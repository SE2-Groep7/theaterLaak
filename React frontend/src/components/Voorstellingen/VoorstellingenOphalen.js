import React, { useState, useEffect } from "react";
import Programma1 from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";
import Programma2 from "./images/gelukzoekers-op-sumatra-nieuwethumbnail.jpg";
import Programma3 from "./images/doordebankgenomen-foto-s-retatchiamsterdam-michelesecchi_thumbnail.jpg";
import Programma4 from "./images/komteenvrouwbijdedokter-foto-l-piek_thumbnail.jpg";
import Programma5 from "./images/tishiergeenhotel2-v-foto-govertderoos_thumbnail.jpg";

function VoorstellingenOphalen(props) {
  const [show, setShow] = useState({});
  const shows = {
    show: [
      { id: 1, img: Programma1, naam: "Judeska Airlines", datum: "Donderdag 16 februari 2023", tijd: "19.45", zaal: "Zaal 1",},
      { id: 2, img: Programma2, naam: "Gelukzoekers op Sumatra", datum: "Donderdag 16 februari 2023", tijd: "20.00", zaal: "Zaal 2" },
      { id: 3, img: Programma3, naam: "Door de bank genomen", datum: "Donderdag 16 februari 2023", tijd: "20.15", zaal: "Zaal 3",},
      { id: 4, img: Programma4, naam: "Komt een vrouw bij de dokter", datum: "Donderdag 16 februari 2023", tijd: "20.30", zaal: "Zaal 4" },
      { id: 5, img: Programma5, naam: "Tis hier geen hotel", datum: "Donderdag 16 februari 2023", tijd: "21:00", zaal: "Zaal 5",},

    ],
  };
  var getShow = () => {
    shows.show.map(element => {
      if (element.id == props.id) {
        setShow(element);

      }

    });
  }
  useEffect(() => {
    getShow();


  }, []);
  return <div class="VoorstellingenOphalen">
    <div class="VoorstellingenShow">
      <img src={show.img} alt="new" />
      <p>{show.naam}</p>
    </div>
    <div class="VoorstellingenDatum">
      <p>{show.datum}</p>
    </div>
    <div class="VoorstellingenTijd">
      <p>{show.tijd}</p>
    </div>
    <div class="VoorstellingenZaal">
      <p>{show.zaal}</p>
    </div>
    <div class="VoorstellingButtonDiv">
      <button class="VoorstellingenButton">Tickets Bestellen</button>
    </div>
  </div>
}

export default VoorstellingenOphalen;