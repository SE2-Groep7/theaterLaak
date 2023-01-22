import "./RegistreerStap1.css"


const RegistreerStap1 = () => {
  return <main>
    <div class="RegistreerStap1Box">
      <div class="RegistreerStap1Wrapper">
        <div class="RegistreerStap1Title">Registreren</div>
        <form action="#">
          <div class="RegistreerStap1Field">
            <input type="text" required></input>
            <label>Gebruikersnaam</label>
            </div>
          <div class="RegistreerStap1Field">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="RegistreerStap1Field">
            <input type="password" required></input>
            <label>Herhaal uw Wachtwoord</label>
          </div>
          <div class="RegistreerStap1Field">
            <input type="submit" value="Volgende Stap"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default RegistreerStap1;