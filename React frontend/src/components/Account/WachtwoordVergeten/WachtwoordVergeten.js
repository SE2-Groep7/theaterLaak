import "./WachtwoordVergeten.css"


const WachtwoordVergeten = () => {
  return <main>
    <div class="WachtwoordVergetenBox">
      <div class="WachtwoordVergetenwrapper">
        <div class="WachtwoordVergetentitle">Wachtwoord Vergeten?</div>
        <form action="#">
          <div class="WachtwoordVergetenfield">
            <input type="email" required></input>
            <label>Emailadres</label>
          </div>
          <div class="WachtwoordVergetenfield">
            <input type="submit" value="Wachtwoord Opvragen"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default WachtwoordVergeten;
