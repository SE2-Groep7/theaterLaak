import "./KortingsRegelsBeheren.css";

const KortingsRegelsBeheren = () => {
  return (
    <>
      <div class="KortingsRegelsBeherenBox">
        <div class="KortingsRegelsBeherenWrapper">
          <h2 class="KortingsRegelsBeherenTitle">KortingsRegels Beheren</h2>
          <div class="KortingsRegelsBeherenContentBox">
            <div class="KortingsRegelsBeherenContentWrapper">
              <h2 class="KortingsRegelsBeherenContentTitle">KortingsRegels Beheren</h2>
              <form action="#">
                <div class="KortingsRegelsBeherenField">
                  <input type="name" required></input>
                  <label>KortingsPercentage</label>
                </div>
                <div class="KortingsRegelsBeherenField">
                  <input type="name" required></input>
                  <label>Aantal te kopen tickets</label>
                </div>
                <div class="KortingsRegelsBeherenCheckbox">
                  <input type="checkbox" id="zekerweten?" required></input>
                  <label for="zekerweten?">Weet je het zeker?</label>
                </div>
                <div class="KortingsRegelsBeherenField">
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

export default KortingsRegelsBeheren;