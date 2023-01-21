import React from 'react';
import "./overons.css";
import foto1 from "./images/pexels-francesco-ungaro-669319.jpg";
import foto2 from "./images/pexels-kosygin-leishangthem-2888802.jpg";
import foto3 from "./images/pexels-matheus-viana-2372945.jpg";
import foto4 from "./images/pexels-pixabay-45258.jpg";


function OverOns() {
  return (
    <div className="about-us">
      <div className="about-us-title">
        <h2>Over Ons</h2>
      </div>
      <div className="about-usWrapper">
        <div className="about-us-text">
          <p>Theater Laak is een cultureel centrum voor de hele gemeenschap van het Laakkwartier en omgeving. Wij zijn trots om een breed scala aan optredens en evenementen aan te bieden, van toneelstukken tot live muziek en comedy.</p>
          <p>Met onze nieuwe webapplicatie kunt u gemakkelijk kaartjes kopen voor onze shows en onze programmering bekijken. Organisaties en individuen kunnen ook zalen reserveren voor eigen evenementen.</p>
          <p>Onze trouwe groep donateurs speelt een belangrijke rol in het behoud van ons culturele programma en de toegankelijkheid ervan voor de gemeenschap. Daarom bieden we een speciaal begunstigersportaal met exclusieve content en voorrang bij kaartverkoop voor onze donateurs.</p>
          <p>We danken onze publiek en donateurs voor hun steun en kijken ernaar uit om u binnenkort te verwelkomen in Theater Laak.</p>
        </div>
      </div>
      <div className="about-us-images flex">
        <img src={foto1} alt="Over Ons Foto1" />
        <img src={foto2} alt="Over Ons Foto2" />
        <img src={foto3} alt="Over Ons Foto3" />
        <img src={foto4} alt="Over Ons Foto4" />
      </div>
    </div>
  );
};

export default OverOns;