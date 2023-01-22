import React, { useState } from "react";

function VoorstellingenOphalen(props) {
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
  const show = useState({});
  const date = new Date(props.show.date);
  console.log(props.show);
  console.log(props.show.date);
  const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  return <div class="VoorstellingenOphalen">
    <div class="VoorstellingenShow">
      <img src={props.show.file} alt={props.show.fotoAlt} />
      <p>{props.show.showName}</p>
    </div>
    <div class="VoorstellingenTijd">
      <p>{time}</p>
    </div>
    <div class="VoorstellingenZaal">
      <p>Zaal : {props.show.zaalId}</p>
    </div>
    <div class="VoorstellingButtonDiv">
      <button class="VoorstellingenButton" onClick={() => window.location.href = `tickets?zaal=${props.show.zaalId}&&datum=${props.show.date}&&showName=${props.show.showName}&&showId=${props.show.showId}`}>Tickets Bestellen</button>
    </div>
  </div>
}

export default VoorstellingenOphalen;