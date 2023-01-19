using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using Newtonsoft.Json;
using System.Text;
using Microsoft.AspNetCore.SignalR;
[Route("api/[controller]")]
[ApiController]

public class ShowController : Controller
{
    private readonly DatabaseContext _context;
    private readonly IHubContext<ShowHub> _hubContext;
    public ShowController(DatabaseContext context, IHubContext<ShowHub> hubContext)
    {
        _context = context;
        _hubContext = hubContext;
    }

    [HttpGet("date")]
    public IActionResult GetShowsByDate(DateTime date)
    {
        var shows = _context.ShowSchedules
            .Where(s => s.ScheduleDate.Date == date.Date)
            .Select(s => new ShowScheduleDTO
            {
                Id = s.Id,
                ShowId = s.ShowId,
                ShowName = s.Show.showName,
                ZaalId = s.ZaalId,
                ZaalName = s.Zaal.Naam,
                ScheduleDate = s.ScheduleDate
            }).ToList();

        return Ok(shows);
    }

    [HttpGet("shows/{showId}/schedule")]
    public IActionResult GetShowSchedule(int showId)
    {
        var schedules = _context.ShowSchedules
            .Where(s => s.ShowId == showId)
            .Select(s => new ShowScheduleDTO
            {
                Id = s.Id,
                ShowId = s.ShowId,
                ShowName = s.Show.showName,
                ZaalId = s.ZaalId,
                ZaalName = s.Zaal.Naam,
                ScheduleDate = s.ScheduleDate
            }).ToList();

        if (schedules.Count == 0)
        {
            return NotFound();
        }

        return Ok(schedules);
    }
    [HttpGet("{id}")]
    public IActionResult GetShow(int id)
    {
        var showSchedule = _context.ShowSchedules.Find(id);
        if (showSchedule == null)
        {
            return NotFound();
        }
        return Ok(showSchedule);
    }
    // [HttpPost]
    // public async Task<IActionResult> AddShow(int showId, int zaalId, DateTime scheduleDate)
    // {
    //     // Check if the given zaalId is valid
    //     if (zaalId < 1 || zaalId > 5)
    //     {
    //         return BadRequest("Invalid zaalId. ZaalId must be between 1 and 5.");
    //     }
    //     var existingShow = _context.FileModels.Find(showId);
    //     if (existingShow == null)
    //     {
    //         return NotFound();
    //     }
    //     var existingHall = _context.Zalen.Find(zaalId);
    //     if (existingHall == null)
    //     {
    //         return NotFound();
    //     }
    //     var showSchedule = new ShowSchedule
    //     {
    //         ShowId = showId,
    //         ZaalId = zaalId,
    //         ScheduleDate = scheduleDate
    //     };


    //     // Read the JSON for the second request from a file
    //     var jsonString = System.IO.File.ReadAllText($"indelingen/zaal{zaalId}.json");
    //     dynamic json = JsonConvert.DeserializeObject(jsonString);
    //     json.dateTime = scheduleDate.ToString("o");
    //     json.zaalId = zaalId;

    //     // Make a post request to create the hall with the seats
    //     var client = new HttpClient();
    //     var content = new StringContent(JsonConvert.SerializeObject(json), Encoding.UTF8, "application/json");
    //     var response = await client.PostAsync("http://ticketapi/api/Hall", content);
    //     if (!response.IsSuccessStatusCode)
    //     {
    //         return StatusCode((int)response.StatusCode);
    //     }
    //     return CreatedAtAction("GetShow", new { id = showId }, existingShow);
    // }
    [HttpPost]
    public async Task<IActionResult> AddShow(int showId, int zaalId, DateTime scheduleDate)
    {
        // Check if the given zaalId is valid
        if (zaalId < 1 || zaalId > 5)
        {
            return BadRequest("Invalid zaalId. ZaalId must be between 1 and 5.");
        }
        var existingShow = _context.FileModels.Find(showId);
        if (existingShow == null)
        {
            return NotFound();
        }
        var existingHall = _context.Zalen.Find(zaalId);
        if (existingHall == null)
        {
            return NotFound();
        }
        var showSchedule = new ShowSchedule
        {
            ShowId = showId,
            ZaalId = zaalId,
            ScheduleDate = scheduleDate
        };
        // var ShowScheduleDTO = new ShowScheduleDTO()
        // {
        //     Id = showSchedule.Id,
        //     ShowId = showSchedule.ShowId,
        //     ShowName = showSchedule.Show.showName,
        //     ZaalId = showSchedule.ZaalId,
        //     ZaalName = showSchedule.Zaal.Naam,
        //     ScheduleDate = showSchedule.ScheduleDate
        // };
        await _hubContext.Clients.All.SendAsync("newShow", showSchedule);
        _context.ShowSchedules.Add(showSchedule);
        _context.SaveChanges();
        // Read the JSON for the second request from a file
        var jsonString = System.IO.File.ReadAllText($"indelingen/zaal{zaalId}.json");
        dynamic json = JsonConvert.DeserializeObject(jsonString);
        json.dateTime = scheduleDate.ToString("o");
        json.zaalId = zaalId;
        // Make a post request to create the hall with the seats
        var client = new HttpClient();
        var content = new StringContent(JsonConvert.SerializeObject(json), Encoding.UTF8, "application/json");
        var response = await client.PostAsync("http://ticketapi/api/Hall", content);
        if (!response.IsSuccessStatusCode)
        {
            return StatusCode((int)response.StatusCode);
        }
        return CreatedAtAction("GetShow", new { id = showId }, existingShow);
    }

    [HttpPut]
    public IActionResult UpdateShow([FromBody] UpdateShowDto updateShowDto)
    {
        var showSchedule = _context.ShowSchedules.FirstOrDefault(s => s.ShowId == updateShowDto.ShowId && s.ZaalId == updateShowDto.OldZaalId && s.ScheduleDate == updateShowDto.OldScheduleDate);
        if (showSchedule == null)
        {
            return NotFound();
        }
        showSchedule.ZaalId = updateShowDto.NewZaalId;
        showSchedule.ScheduleDate = updateShowDto.NewScheduleDate;
        _context.Entry(showSchedule).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();
        return Ok(showSchedule);
    }


}