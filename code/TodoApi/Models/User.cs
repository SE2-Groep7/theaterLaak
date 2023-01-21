using TodoApi.Models;

public class User
{
    public string Id { get; set; }
    public ICollection<TodoItem> TodoItems { get; set; } = new List<TodoItem>();
    public ICollection<Interesse> Interesses { get; set; } = new List<Interesse>();
    public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}