using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TheaterLaakLibrary;

    [NotMapped]
    public class GenreDTO : IGenre
    {
        public int Id { get; set; }
        public string Naam { get; set; }
        public List<Account> accounts{ get; set;}
    }
