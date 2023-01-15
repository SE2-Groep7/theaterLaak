import "./WachtwoordVergeten.css"


const WachtwoordVergeten = () => {
  return <main>
    <div class="WachtwoordVergetenBox">
      <div class="WachtwoordVergetenWrapper">
        <div class="WachtwoordVergetenTitle">Wachtwoord Vergeten?</div>
        <form action="#">
          <div class="WachtwoordVergetenField">
            <input type="email" required></input>
            <label>Emailadres</label>
          </div>
          <div class="WachtwoordVergetenField">
            <input type="submit" value="Wachtwoord Opvragen"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default WachtwoordVergeten;
