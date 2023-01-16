public class UpdateShowDto
{
    public int ShowId { get; set; }
    public int OldZaalId { get; set; }
    public int NewZaalId { get; set; }
    public DateTime OldScheduleDate { get; set; }
    public DateTime NewScheduleDate { get; set; }
}
