namespace TodoApi.Models
{
    public class Ticket
    {
        public long Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public string ShowId { get; set; }
        public string ZaalId { get; set; }
        public DateTime ShowDate { get; set; }
    }
}
