import "./RuimteReserveren.css";

const RuimteReserveren = () => {
  return (
    <>
      <div class="RuimteReserverenBox">
        <div class="RuimteReserverenWrapper">
          <h2 class="RuimteReserverenTitle">Ruimte Reserveren</h2>
          <div class="RuimteReserverenContentBox">
            <div class="RuimteReserverenContentWrapper">
              <h2 class="RuimteReserverenContentTitle">Ruimte Reserveren</h2>
              <form action="#">
                <div class="RuimteReserverenField">
                  <input type="name" required></input>
                  <label>Aantal Personen</label>
                </div>
                <div class="RuimteReserverenField">
                  <input type="name" required></input>
                  <label>Grootte van de ruimte</label>
                </div>
                <div class="RuimteReserverenField">
                  <input type="name" required></input>
                  <label>Reden van de reservering</label>
                </div>
                <div class="RuimteReserverenField">
                  <input type="date" required></input>
                </div>
                <div class="RuimteReserverenField">
                  <input type="time" required></input>
                </div>
                <div class="RuimteReserverenCheckbox">
                  <input type="checkbox" id="zekerweten?" required></input>
                  <label for="zekerweten?">Weet je het zeker?</label>
                </div>
                <div class="RuimteReserverenField">
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

export default RuimteReserveren;