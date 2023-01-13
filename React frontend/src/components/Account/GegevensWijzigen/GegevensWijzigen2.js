import "./GegevensWijzigen.css";

const GegevensWijzigen = () => {
  return (
    <>
    <div class="GegevensWijzigenBox">
      <div class="GegevensWijzigenWrapper">
        <h2 class="GegevensWijzigenTitle">GegevensWijzigen</h2>
          <div class="GegevensWijzigenContentBox">
            <div class="GegevensWijzigenNavWrapper">
              <h2 class="GegevensWijzigenNavTitle">Navigatie</h2>
              <button class="WachtwoordWijzigenButton" onClick="">Wachtwoord Vergeten</button>
            </div>
            <div class="GegevensWijzigenContentWrapper">
              <h2 class="GegevensWijzigenContentTitle">Uw Gegevens</h2>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GegevensWijzigen;