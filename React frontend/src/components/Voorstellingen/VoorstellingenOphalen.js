import React, { useState } from "react";

function VoorstellingenOphalen(props) {
  const show = useState({});
 
  return <div class="VoorstellingenOphalen">
    <div class="VoorstellingenShow">
      <img src={props.show.file} alt={props.show.fotoAlt} />
      <p>{props.show.showName}</p>
    </div>
    <div class="VoorstellingenTijd">
      <p>{show.tijd}</p>
    </div>
    <div class="VoorstellingenZaal">
      <p>Zaal : {props.show.zaalId}</p>
    </div>
    <div class="VoorstellingenButtonPos">
      <button class="VoorstellingenButton">Tickets Bestellen</button>
    </div>
  </div>
}

export default VoorstellingenOphalen;