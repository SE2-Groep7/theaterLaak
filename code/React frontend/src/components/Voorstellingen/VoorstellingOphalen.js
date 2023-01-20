import React, { useState, useEffect } from "react";
import Programma1 from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";


function VoorstellingOphalen(props) {
  const show = useState({});
  const formatDate = date => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year+"/"+ month+"/"+ day];
  }
  const date = new Date(props.show.scheduleDate);
  console.log(props.show.scheduleDate);
  const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  return <div class="VoorstellingenOphalen">
    <div class="VoorstellingenShow">
      <img src={props.show.file} alt={props.show.fotoAlt} />
      <p>{props.show.showName}</p>
    </div>
    <div class="VoorstellingenTijd">
      <p>{formatDate(props.show.scheduleDate) +" " + time}</p>
    </div>
    <div class="VoorstellingenZaal">
      <p>Zaal : {props.show.zaalId}</p>
    </div>
    <div class="VoorstellingButtonDiv">
      <button class="VoorstellingenButton" onClick={() => window.location.href = `tickets?zaal=${props.show.zaalId}&&datum=${props.show.scheduleDate}&&showName=${props.show.showName}`}>Tickets Bestellen</button>
    </div>
  </div>
}

export default VoorstellingOphalen;