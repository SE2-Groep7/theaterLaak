using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers;

[Route("api/todoapi/[controller]")]
[ApiController]
public class TicketsController : ControllerBase
{
    private readonly TodoContext _context;

    public TicketsController(TodoContext context)
    {
        _context = context;
    }

    // GET: api/Tickets
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TicketDTO>>> GetTickets()
    {
        var userId = GetUserIdFromJWT();
        return await _context.Tickets
            .Where(x => x.UserId == userId)
            .Select(x => ItemToDTO(x))
            .ToListAsync();
    }

    // GET: api/Tickets/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TicketDTO>> GetTicket(long id)
    {
        var userId = GetUserIdFromJWT();
        var ticket = await _context.Tickets
                            .Where(x => x.UserId == userId && x.Id == id)
                            .FirstOrDefaultAsync();

        if (ticket == null)
        {
            return NotFound();
        }

        return ItemToDTO(ticket);
    }

    // PUT: api/Tickets/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTicket(long id, TicketDTO ticketDTO)
    {
        var userId = GetUserIdFromJWT();
        var ticket = await _context.Tickets
                            .Where(x => x.UserId == userId && x.Id == id)
                            .FirstOrDefaultAsync();

        if (ticket == null)
        {
            return NotFound();
        }

        ticket.ShowId = ticketDTO.ShowId;
        ticket.ZaalId = ticketDTO.ZaalId;
        ticket.ShowDate = ticketDTO.ShowDate;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException) when (!TicketExists(id))
        {
            return NotFound();
        }

        return NoContent();
    }

    // POST: api/Tickets
    [HttpPost]
    public async Task<ActionResult<TicketDTO>> PostTicket(TicketDTO ticketDTO)
    {
        var userId = GetUserIdFromJWT();
        var ticket = new Ticket
        {
            ShowId = ticketDTO.ShowId,
            ZaalId = ticketDTO.ZaalId,
            ShowDate = ticketDTO.ShowDate,
            UserId = userId
        };
        _context.Tickets.Add(ticket);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetTicket),
            new { id = ticket.Id },
            ItemToDTO(ticket));
    }

    // DELETE: api/Tickets/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTicket(long id)
    {
        var userId = GetUserIdFromJWT();
        var ticket = await _context.Tickets
                            .Where(x => x.UserId == userId && x.Id == id)
                            .FirstOrDefaultAsync();
        if (ticket == null)
        {
            return NotFound();
        }

        _context.Tickets.Remove(ticket);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TicketExists(long id)
    {
        var userId = GetUserIdFromJWT();
        return _context.Tickets.Any(e => e.Id == id && e.UserId == userId);
    }

    private static TicketDTO ItemToDTO(Ticket ticket)
    {
        return new TicketDTO
        {
            ShowId = ticket.ShowId,
            ZaalId = ticket.ZaalId,
            ShowDate = ticket.ShowDate
        };
    }
    private string GetUserIdFromJWT()
    {
        var userId = User.Claims.FirstOrDefault(c => c.Type == "userId")?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            throw new Exception("User Id not found in JWT token");
        }
        return userId;
    }
}