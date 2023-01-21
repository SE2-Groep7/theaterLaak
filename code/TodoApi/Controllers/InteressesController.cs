using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers;

[Route("api/todoapi/[controller]")]
[ApiController]
public class InteresseController : ControllerBase
{
    private readonly TodoContext _context;

    public InteresseController(TodoContext context)
    {
        _context = context;
    }

    // GET: api/Interesses
    [HttpGet]
    public async Task<ActionResult<IEnumerable<InteresseDTO>>> GetInteresses()
    {
        var userId = GetUserIdFromJWT();
        return await _context.Interesses
            .Where(x => x.UserId == userId)
            .Select(x => ItemToDTO(x))
            .ToListAsync();
    }

    // GET: api/Interesses/5
    [HttpGet("{id}")]
    public async Task<ActionResult<InteresseDTO>> GetInteresse(long id)
    {
        var userId = GetUserIdFromJWT();
        var interesse = await _context.Interesses
                            .Where(x => x.UserId == userId && x.Id == id)
                            .FirstOrDefaultAsync();

        if (interesse == null)
        {
            return NotFound();
        }

        return ItemToDTO(interesse);
    }

    // PUT: api/Interesses/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutInteresse(long id, InteresseDTO interesseDTO)
    {
        var userId = GetUserIdFromJWT();
        var interesse = await _context.Interesses
                            .Where(x => x.UserId == userId && x.Id == id)
                            .FirstOrDefaultAsync();

        if (interesse == null)
        {
            return NotFound();
        }

        interesse.genre = interesseDTO.genre;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException) when (!InteresseExists(id))
        {
            return NotFound();
        }

        return NoContent();
    }

    // POST: api/Interesses
    [HttpPost]
    public async Task<ActionResult<InteresseDTO>> PostInteresse(InteresseDTO interesseDTO)
    {
        var userId = GetUserIdFromJWT();
        var interesse = new Interesse
        {
            genre = interesseDTO.genre,
            UserId = userId
        };

        _context.Interesses.Add(interesse);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetInteresse),
            new { id = interesse.Id },
            ItemToDTO(interesse));
    }

    // DELETE: api/Interesses/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteInteresse(long id)
    {
        var userId = GetUserIdFromJWT();
        var interesse = await _context.Interesses
                            .Where(x => x.UserId == userId && x.Id == id)
                            .FirstOrDefaultAsync();
        if (interesse == null)
        {
            return NotFound();
        }

        _context.Interesses.Remove(interesse);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool InteresseExists(long id)
    {
        var userId = GetUserIdFromJWT();
        return _context.Interesses.Any(e => e.Id == id && e.UserId == userId);
    }

    private static InteresseDTO ItemToDTO(Interesse interesse)
    {
        return new InteresseDTO
        {
            Id = interesse.Id,
            genre = interesse.genre
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