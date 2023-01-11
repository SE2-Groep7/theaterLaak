import React from "react";
import Programma1 from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";
import Programma2 from "./images/gelukzoekers-op-sumatra-nieuwethumbnail.jpg";

function VoorstellingOphalen(props) {
  const shows = {
    show: [
      { id: 1, img: Programma1, date: "Donderdag 16 februari 2023 - 20.15 uur", zaal: "Theater Laak - Zaal 2"},
      { id: 2, img: Programma2, date: "Vrijdag 17 februari 2023 - 20.30 uur", zaal: "Theater Laak - Zaal 3"},
      // { id: 3, row: 1, column: 3, status: "occupied", rank: "1st" },
      // { id: 4, row: 1, column: 4, status: "occupied", rank: "1st" },
      // { id: 5, row: 2, column: 1, status: "vacant", rank: "2st" },
    ],
  };
  const getShow = (id) => {shows.show.map(element => {
      if (element.id === id) {
        return element.img;
      }
      return () => {};
  });}
    return <div class="VoorstellingOphalen">

        <img src={getShow(1)}/>
        <div class="VoorstellingSpecificatie">
        <p>Donderdag 16 februari 2023 - 20.15 uur</p>
        <p>Theater Laak - Zaal 2</p></div>
        <button class="VoorstellingButton">Tickets Bestellen</button>
    </div>
  }

export default VoorstellingOphalen;