import React, { useState, useEffect } from "react";
import Programma1 from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";
import Programma2 from "./images/gelukzoekers-op-sumatra-nieuwethumbnail.jpg";

function VoorstellingOphalen(props) {
  const [show, setShow] = useState({});
  const shows = {
    show: [
      { id: 1, img: Programma1, datum: "Donderdag 16 februari 2023", tijd: "20.15", zaal: "Zaal 2",},
      { id: 2, img: Programma2, datum: "Vrijdag 17 februari 2023", tijd: "20.30", zaal: "Zaal 3" },
      { id: 3, img: Programma1, datum: "Donderdag 16 februari 2023", tijd: "20.15", zaal: "Zaal 2",},
      { id: 4, img: Programma2, datum: "Vrijdag 17 februari 2023", tijd: "20.30", zaal: "Zaal 3" },
      { id: 5, img: Programma1, datum: "Donderdag 16 februari 2023", tijd: "20.15", zaal: "Zaal 2",},
      { id: 6, img: Programma2, datum: "Vrijdag 17 februari 2023", tijd: "20.30", zaal: "Zaal 3" },

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
  return <div class="VoorstellingOphalen">
    <div class="VoorstellingShow">
      <img src={show.img} alt="new" />
    </div>
    <div class="VoorstellingDatum">
      <p>{show.datum}</p>
    </div>
    <div class="VoorstellingTime">
      <p>{show.tijd}</p>
    </div>
    <div class="VoorstellingTijd">
      <p>{show.zaal}</p>
    </div>
    <div class="VoorstellingButtonPos">
      <button class="VoorstellingButton">Tickets Bestellen</button>
    </div>
  </div>
}

export default VoorstellingOphalen;