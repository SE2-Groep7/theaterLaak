import "./Registreer.css"
import React, { useState } from 'react';
import RegisteerStap1 from "../Registreer/RegistreerStap1/RegistreerStap1" 
import RegisteerStap2 from "../Registreer/RegistreerStap2/RegistreerStap2" 
const Registreer = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  return <main>
    <div class="RegistreerBox">
      <div class="RegistreerWrapper">
        <div class="RegistreerTitle">Registreren</div>
        <form action="#">
          <div class="RegistreerField">
            <input type="submit" value="Registreer">{currentComponent}</input>
          </div>
          <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<RegisteerStap1 />)}>
            RegistreerStap1
          </button>
          <button class="GegevensWijzigenButton" onClick={() => setCurrentComponent(<RegisteerStap2 />)}>
            RegistreerStap2
          </button>
        </form>
      </div>
    </div>
  </main>
};

export default Registreer;