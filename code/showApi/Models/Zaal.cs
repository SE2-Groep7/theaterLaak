public class Zaal
{
    public int Id { get; set; }
    public string Naam { get; set; }
    public int Capacity { get; set; }
    public List<ShowSchedule> ShowSchedules {get; set;}
}