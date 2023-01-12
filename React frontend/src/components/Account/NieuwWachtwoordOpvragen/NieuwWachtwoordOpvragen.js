import "./NieuwWachtwoordOpvragen.css"


const NieuwWachtwoordOpvragen = () => {
  return <main>
    <div class="NieuwWachtwoordOpvragenBox">
      <div class="NieuwWachtwoordOpvragenwrapper">
        <div class="NieuwWachtwoordOpvragentitle">Wachtwoord Resetten</div>
        <form action="#">
          <div class="NieuwWachtwoordOpvragenfield">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="NieuwWachtwoordOpvragenfield">
            <input type="password" required></input>
            <label>Herhaal uw Wachtwoord</label>
          </div>
          <div class="NieuwWachtwoordOpvragenfield">
            <input type="submit" value="Nieuw Wachtwoord Opslaan"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default NieuwWachtwoordOpvragen;
