namespace TodoApi.Models
{
    public class Interesse
    {
        public long Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public string genre { get; set; }
    }
}
