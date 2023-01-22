import "./VoorstellingBeheren.css";

const VoorstellingBeheren = () => {
  return (
    <>
      <div class="VoorstellingBeherenBox">
        <div class="VoorstellingBeherenWrapper">
          <h2 class="VoorstellingBeherenTitle">Voorstelling Beheren</h2>
          <div class="VoorstellingBeherenContentBox">
            <div class="VoorstellingBeherenContentWrapper">
              <h2 class="VoorstellingBeherenContentTitle">Voorstelling Beheren</h2>
              <form action="#">
                <div class="VoorstellingBeherenField">
                  <input type="name" required></input>
                  <label>Voorstelling ID</label>
                </div>
                <div class="VoorstellingBeherenField">
                  <input type="name" required></input>
                  <label>Voorstelling Titel</label>
                </div>
                <div class="VoorstellingBeherenField">
                  <input type="name" required></input>
                  <label>Voorstelling Zaal</label>
                </div>
                <div class="VoorstellingBeherenField">
                  <input type="date" required></input>
                </div>
                <div class="VoorstellingBeherenField">
                  <input type="time" required></input>
                </div>
                <div class="VoorstellingBeherenCheckbox">
                  <input type="checkbox" id="zekerweten?" required></input>
                  <label for="zekerweten?">Weet je het zeker?</label>
                </div>
                <div class="VoorstellingBeherenField">
                  <input type="submit" value="Opslaan"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoorstellingBeheren;