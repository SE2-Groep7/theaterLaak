import "./WachtwoordResetten.css"


const WachtwoordResetten = () => {
  return <main>
    <div class="WachtwoordResettenBox">
      <div class="WachtwoordResettenWrapper">
        <div class="WachtwoordResettenTitle">Wachtwoord Resetten</div>
        <form action="#">
          <div class="WachtwoordResettenField">
            <input type="password" required></input>
            <label>Uw huidige wachtwoord</label>
          </div>
          <div class="WachtwoordResettenField">
            <input type="password" required></input>
            <label>Uw nieuwe wachtwoord</label>
          </div>
          <div class="WachtwoordResettenField">
            <input type="password" required></input>
            <label>Herhaal uw nieuwe wachtwoord</label>
          </div>
          <div class="WachtwoordResettenField">
            <input type="submit" value="Opslaan"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default WachtwoordResetten;
