using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class HallController : ControllerBase
{
    private readonly DatabaseContext _context;

    public HallController(DatabaseContext context)
    {
        _context = context;
    }

    // GET: api/Hall
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Hall>>> GetHalls()
    {
        return await _context.Halls.ToListAsync();
    }

    // GET: api/Hall/{dateTime}/{zaalId}
[HttpGet("{dateTime}/{zaalId}")]
public async Task<ActionResult<Hall>> GetHall(DateTime dateTime, int zaalId)
{
    var hall = await _context.Halls
        .Include(h => h.Seats)
        .Where(h => h.DateTime == dateTime && h.ZaalId == zaalId)
        .FirstOrDefaultAsync();

    if (hall == null)
    {
        return NotFound();
    }

    return hall;
}



    // PUT: api/Hall/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutHall(int id, Hall hall)
    {
        if (id != hall.Id)
        {
            return BadRequest();
        }

        _context.Entry(hall).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!HallExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Hall
    [HttpPost]
    public async Task<ActionResult<Hall>> PostHall(HallDto hallDto)
    {
        var hall = new Hall
        {
            DateTime = hallDto.DateTime,
            ZaalId = hallDto.ZaalId
        };
        foreach (var seat in hallDto.Seats)
        {
            var s = new Seat
            {
                Row = seat.Row,
                Column = seat.Column,
                Status = seat.Status,
                Rank = seat.Rank,
            };
            hall.Seats.Add(s);
        }
        _context.Halls.Add(hall);
        await _context.SaveChangesAsync();
        return Ok();
            }


    // DELETE: api/Hall/5
    [HttpDelete("{id}")]
public async Task<ActionResult<Hall>> DeleteHall(int id)
{
    var hall = await _context.Halls.FindAsync(id);
    if (hall == null)
    {
        return NotFound();
    }
    var seats = _context.Seats.Where(s => s.HallId == id);
    _context.Seats.RemoveRange(seats);
    _context.Halls.Remove(hall);
    await _context.SaveChangesAsync();

    return hall;
}


    private bool HallExists(int id)
    {
        return _context.Halls.Any(e => e.Id == id);
    }
}
