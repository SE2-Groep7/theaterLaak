import "./Registreer.css"


const Registreer = () => {
  return <main>
    <div class="RegistreerBox">
      <div class="wrapper">
        <div class="title">Registreren</div>
        <form action="#">
          <div class="field">
            <input type="text" required></input>
            <label>Gebruikersnaam</label></div>
          <div class="field">
            <input type="email" required></input>
            <label>Email Adres</label>
          </div>
          <div class="field">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="field">
            <input type="password" required></input>
            <label>Wachtwoord herhalen</label>
          </div>
          <div class="field">
            <input type="submit" value="Login"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default Registreer;