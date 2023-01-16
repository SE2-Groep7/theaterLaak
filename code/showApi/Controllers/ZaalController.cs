using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

[Route("api/[controller]")]
[ApiController]

public class ZaalController : Controller
{
    private readonly DatabaseContext _context;

    public ZaalController(DatabaseContext context)
    {
        _context = context;
    }


   [HttpPost]
    public IActionResult AddZaal([FromBody] AddZaalDto addZaalDto)
    {
        var zaal = new Zaal
        {
            Naam = addZaalDto.Naam,
            Capacity = addZaalDto.Capacity
        };

        _context.Zalen.Add(zaal);
        _context.SaveChanges();

        return CreatedAtAction("GetZaal", new { id = zaal.Id }, zaal);
    }
[HttpGet("{id}")]
public IActionResult GetZaal(int id)
{
    var zaal = _context.Zalen.Find(id);
    if (zaal == null)
    {
        return NotFound();
    }
    return Ok(zaal);
}
}