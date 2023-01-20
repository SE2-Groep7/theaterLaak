import "./GegevensOverzicht.css"


const GegevensOverzicht = () => {
  return <main>
    <div class="GegevensOverzichtBox">
      <div class="GegevensOverzichtWrapper">
        <div class="GegevensOverzichtTitle">Overzicht gegevens</div>
        <form action="#">

          <div class="GegevensOverzichtField">
            <label>Voornaam</label>
          </div>
          <div class="GegevensOverzichtField">
            <label>Achternaam</label>
          </div>
          <div class="GegevensOverzichtField">
            <label>Emailadres</label>
          </div>
          <div class="GegevensOverzichtField">
            <label>Interesses</label>
          </div>
          <div class="GegevensOverzichtField">
            <label>Two Factor Authentication</label>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default GegevensOverzicht;
