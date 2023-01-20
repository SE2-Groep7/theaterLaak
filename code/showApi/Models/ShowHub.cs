using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

public class ShowHub : Hub
{
    private readonly DatabaseContext _context;

    public ShowHub(DatabaseContext context)
    {
        _context = context;
    }
    public async Task GetShowsByDate(DateTime date)
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

        // convert shows to json and send it over the websocket
        var json = JsonConvert.SerializeObject(shows);
        await Clients.All.SendAsync("ReceiveShows", json);
    }
}
