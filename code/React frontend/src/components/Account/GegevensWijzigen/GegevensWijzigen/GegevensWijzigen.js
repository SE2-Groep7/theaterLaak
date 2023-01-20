import "./GegevensWijzigen.css";
import GegevensOverzicht from "../GegevensOverzicht/GegevensOverzicht";
import WachtwoordResetten from "../WachtwoordResetten/WachtwoordResetten";
import EmailVeranderen from "../EmailVeranderen/EmailVeranderen";
import TwoFactorAuth from "../TwoFactorAuth/TwoFactorAuth";
import InteressesBeheren from "../InteressesBeheren/InteressesBeheren";
import AankoopHistorie from "../AankoopHistorie/AankoopHistorie";
import React, { useState } from 'react';

function GegevensWijzigen() {
  const [currentComponent, setCurrentComponent] = useState(null);

  return (
    <div class="GegevensWijzigenBox">
      <div class="GegevensWijzigenWrapper">
        <h2 class="GegevensWijzigenTitle">GegevensWijzigen</h2>
        <div class="GegevensWijzigenContentBox">
          <div class="GegevensWijzigenNavWrapper">
            <h2 class="GegevensWijzigenNavTitle">Navigatie</h2>
            <div>
              <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<GegevensOverzicht />)}>
                Gegevensoverzicht
              </button>
              <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<WachtwoordResetten />)}>
                Wachtwoord veranderen
              </button>
              <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<EmailVeranderen />)}>
                Email veranderen
              </button>
              <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<InteressesBeheren />)}>
                Interesses beheren
              </button>
              <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<TwoFactorAuth />)}>
                Two Factor Authentication
              </button>
              <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<AankoopHistorie />)}>
                AankoopGeschiedenis
              </button>
            </div>
            <div>
            </div>
          </div>
          <div class="GegevensWijzigenContentWrapper">
            <h2 class="GegevensWijzigenContentTitle">Instellingen</h2>
            {currentComponent}
          </div>
        </div>
      </div>
    </div>

  );
}
export default GegevensWijzigen;