import "./Registreer.css"


const Registreer = () => {
  return <main>
    <div class="RegistreerBox">
      <div class="RegistreerWrapper">
        <div class="RegistreerTitle">Registreren</div>
        <form action="#">
          <div class="RegistreerField">
            <input type="text" required></input>
            <label>Gebruikersnaam</label>
            </div>
          <div class="RegistreerField">
            <input type="email" required></input>
            <label>Emailadres</label>
          </div>
          <div class="RegistreerField">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="RegistreerField">
            <input type="password" required></input>
            <label>Herhaal uw Wachtwoord</label>
          </div>
          <div class="RegistreerField">
            <input type="submit" value="Registreer"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default Registreer;