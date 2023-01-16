using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


    public class ShowDTO
    {
        
    public int Id { get; set; }
    public string showName { get; set; }
    [NotMapped]
    public IFormFile FormFile { get; set; }

    public string fotoAlt {get; set;}

    public string beschrijving {get; set;}

    }
