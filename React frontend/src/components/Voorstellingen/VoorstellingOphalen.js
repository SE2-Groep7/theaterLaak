import React from "react";
import Programma from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";

function VoorstellingOphalen() {
    return <div class="VoorstellingOphalen">
        <img src={Programma} alt="Programma"/>
        <div class="VoorstellingSpecificatie">
        <p>Donderdag 16 februari 2023 - 20.15 uur</p>
        <p>Theater Laak - Zaal 2</p></div>
    </div>
  }

export default VoorstellingOphalen;