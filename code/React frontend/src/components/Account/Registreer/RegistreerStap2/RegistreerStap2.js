import "./RegistreerStap2.css"


const RegistreerStap2 = () => {
  return <main>
    <div class="RegistreerStap2Box">
      <div class="RegistreerStap2Wrapper">
        <div class="RegistreerStap2Title">Registreren</div>
        <form action="#">
          <div class="RegistreerStap2Field">
            <input type="text" required></input>
            <label>Voornaam</label>
            </div>
          <div class="RegistreerStap2Field">
            <input type="text" required></input>
            <label>Achternaam</label>
          </div>
          <div class="RegistreerStap2Field">
            <input type="email" required></input>
            <label>Emailadres</label>
          </div>
          <div class="RegistreerStap2Field">
            <input type="tel" required></input>
            <label>Telefoonnummer</label>
          </div>
          <div class="RegistreerStap2Field">
            <input type="submit" value="RegistreerStap2"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default RegistreerStap2;