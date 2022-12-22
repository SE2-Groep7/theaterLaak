using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TheaterLaakLibrary;

    [NotMapped]
    public class KaartDTO : IKaart
    {
        public int Id { get; set; }
        public string Waarheidsmerk { get; set; }
         public List<Account> accounts{ get; set;}
    }
