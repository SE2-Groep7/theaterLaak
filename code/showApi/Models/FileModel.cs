using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
public class FileModel
{
    public int Id { get; set; }
    public string showName { get; set; }
    public string FileName { get; set; }
    [NotMapped]
    public IFormFile FormFile { get; set; }

    public string fotoAlt {get; set;}

    public string beschrijving {get; set;}
     public List<ShowSchedule> ShowSchedules {get; set;}
}