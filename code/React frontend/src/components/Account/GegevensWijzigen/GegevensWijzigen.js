import "./GegevensWijzigen.css";
import NieuwWachtwoordOpvragen from "../NieuwWachtwoordOpvragen/NieuwWachtwoordOpvragen";
import React, { useState } from 'react';

function GegevensWijzigen() {
  const [showOther, setShowOther] = useState(false);

  return (
    <div class="GegevensWijzigenBox">
    <div class="GegevensWijzigenWrapper">
      <h2 class="GegevensWijzigenTitle">GegevensWijzigen</h2>
        <div class="GegevensWijzigenContentBox">
          <div class="GegevensWijzigenNavWrapper">
            <h2 class="GegevensWijzigenNavTitle">Navigatie</h2>
            <div>
              <button class="GegevensWijzigenButton" onClick={() => setShowOther(true)}>Wachtwoord Wijzigen</button>
                {showOther && <NieuwWachtwoordOpvragen />}
            </div>  
          </div>
      </div>
    </div>
  </div>

  );
}
export default GegevensWijzigen;