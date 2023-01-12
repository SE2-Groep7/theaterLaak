import React from "react";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agenda.css';
import VoorstellingOphalen from "../Voorstellingen/VoorstellingOphalen";





const Agenda = () => {
    const [value, onChange] = useState(new Date());
    return (
        <main>
            <div class="Agenda">
                <Calendar onChange={onChange} value={value} />
                <div id="Agendawrapper">
                    <div class="roundCorners">
                <div class="Agendascrollbar" id="style-6">
                    <h2>De volgende voorstellingen zijn op deze datum te zien</h2>
                        <div class="AgendaProgramma">
                            <VoorstellingOphalen id={1}/>
                            <VoorstellingOphalen id={2}/>
                            <VoorstellingOphalen id={3}/>
                            <VoorstellingOphalen id={4}/>
                            <VoorstellingOphalen id={5}/>

                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </main>
    )
};

export default Agenda;
