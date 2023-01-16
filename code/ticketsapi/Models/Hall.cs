public class Hall
{
    public Hall()
    {
        Seats = new List<Seat>();
    }
    public int Id { get; set; }
    public int ZaalId { get; set; }
    public DateTime DateTime {get; set;}
    public List<Seat> Seats { get; set; }
}
