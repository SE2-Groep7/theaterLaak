import React from "react";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agenda.css';
import Programma2 from "../Voorstellingen/images/komteenvrouwbijdedokter-foto-l-piek_thumbnail.jpg";
import Programma3 from "../Voorstellingen/images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";




const Agenda = () => {
    const [value, onChange] = useState(new Date());
    return (
        <main>
            <div class="Agenda">
                <Calendar onChange={onChange} value={value} />
                <div class="AgendaProgramma">
                <p>Dianne Liesker, Ellen Dikker & Hanneke Drenth - Tis hier geen hotel 2</p>
                <img src={Programma2} alt="komteenvrouwbijdedokter-foto-l-piek_thumbnail.jpg" ></img>
                <p>Jandino Asporaat en anderen - Judeska Airlines</p>
                <img src={Programma3} alt="judeskaairlines-foto-v-ruudbaan_thumbnail.jpg" ></img>
                </div>
            </div>
        </main>
    )
  };
  
  export default Agenda;
  