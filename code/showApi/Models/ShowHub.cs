using Microsoft.AspNetCore.SignalR;

public class ShowHub : Hub
{
    public async Task OnConnectedAsync()
    {
        Console.WriteLine("A user connected");
    }

    public async Task OnDisconnectedAsync(Exception exception)
    {
        Console.WriteLine("A user disconnected");
    }
}