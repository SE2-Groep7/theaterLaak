import "./NieuwWachtwoordOpvragen.css"


const NieuwWachtwoordOpvragen = () => {
  return <main>
    <div class="NieuwWachtwoordOpvragenBox">
      <div class="NieuwWachtwoordOpvragenWrapper">
        <div class="NieuwWachtwoordOpvragenTitle">Wachtwoord Resetten</div>
        <form action="#">
          <div class="NieuwWachtwoordOpvragenField">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="NieuwWachtwoordOpvragenField">
            <input type="password" required></input>
            <label>Herhaal uw Wachtwoord</label>
          </div>
          <div class="NieuwWachtwoordOpvragenField">
            <input type="submit" value="Nieuw Wachtwoord Opslaan"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default NieuwWachtwoordOpvragen;
