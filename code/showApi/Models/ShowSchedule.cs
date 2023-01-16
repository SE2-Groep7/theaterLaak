using System.ComponentModel.DataAnnotations.Schema;
public class ShowSchedule
{
    public int Id { get; set; }
    public int ShowId { get; set; }
    [ForeignKey("ShowId")]
    
    public FileModel Show { get; set; }
    public int ZaalId { get; set;}
    [ForeignKey("ZaalId")]
    public Zaal Zaal {get; set;}
    public DateTime ScheduleDate {get; set;}
}