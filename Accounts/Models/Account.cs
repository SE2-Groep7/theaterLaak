using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TheaterLaakLibrary;


public class Account : Klant
    {   
        public int Id { get; set; }
        public string naam { get; set; }
        public string email { get; set; }
        public string wachtwoord { get; set; }
        public List<AccountGenre> Intresses { get; set; }
        public List<AccountKaart> AankoopGeschiedenis { get; set; }

        public void inloggen(string email, string wachtwoord)
        {
            // Checkt of de email en wachtwoord kloppen
        }
        public void doneren(double bedrag)
        {
            // Voegt bedrag toe aan de donatie pot
        }
        public void kaartOverzetten(IKaart kaart, Account account)
        {
            // Verplaatst kaart van de ene account naar de andere
        }
        public void setIntresse(List<IGenre> intresses)
        {
            // Zet de intresses van de account
        }
        public void resetWachtwoord(string email)
        {
            // Stuurt een email met een link om het wachtwoord te resetten
        }
        public void stoelVoorstellen(){
            // Biedt een stoel aan voor een voorstelling aan de hand van aankoopgeschiedenis
        }

    }
public class AccountGenre
{
     public int AccountId { get; set; }
    public Account Account { get; set; }
    public int GenreId { get; set; }

}
public class AccountKaart
{
    public int AccountId { get; set; }
    public Account Account { get; set; }
    public int KaartId { get; set; }
}