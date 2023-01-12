import React, { useState, useEffect } from "react";
import Programma1 from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";


function VoorstellingOphalen(props) {
  const [show, setShow] = useState({});
  const shows = {
    show: [
      { id: 1, img: Programma1, naam: "Judeska Airlines", datum: "Donderdag 16 februari 2023", tijd: "20.15", zaal: "Zaal 1",},
      { id: 2, img: Programma1, naam: "Judeska Airlines", datum: "Vrijdag 17 februari 2023", tijd: "20.30", zaal: "Zaal 2" },
      { id: 3, img: Programma1, naam: "Judeska Airlines", datum: "Zaterdag 18 februari 2023", tijd: "19.45", zaal: "Zaal 3",},
      { id: 4, img: Programma1, naam: "Judeska Airlines", datum: "Zondag 19 februari 2023", tijd: "20.00", zaal: "Zaal 4" },
      { id: 5, img: Programma1, naam: "Judeska Airlines", datum: "Maandag 20 februari 2023", tijd: "21:00", zaal: "Zaal 5",},

    ],
  };
  var getShow = () => {
    shows.show.map(element => {
      if (element.id === props.id) {
        setShow(element);

      }

    });
  }
  useEffect(() => {
    getShow();


  }, []);
  return <div class="VoorstellingOphalen">
    <div class="VoorstellingShow">
      <img src={show.img} alt="new" />
      <p>{show.naam}</p>
    </div>
    <div class="VoorstellingDatum">
      <p>{show.datum}</p>
    </div>
    <div class="VoorstellingTijd">
      <p>{show.tijd}</p>
    </div>
    <div class="VoorstellingZaal">
      <p>{show.zaal}</p>
    </div>
    <div class="VoorstellingButtonDiv">
      <button class="VoorstellingButton">Tickets Bestellen</button>
    </div>
  </div>
}

export default VoorstellingOphalen;