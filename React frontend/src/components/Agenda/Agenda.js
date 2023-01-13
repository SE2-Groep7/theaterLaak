import React from "react";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agenda.css';
import VoorstellingenOphalen from "../Voorstellingen/VoorstellingenOphalen";





const Agenda = () => {
    const [value, onChange] = useState(new Date());
    return (
        <main>
            <div class="Agenda">
                <Calendar onChange={onChange} value={value} />
                <div id="AgendaWrapper">
                    <div class="AgendaRoundCorners">
                        <div class="AgendaScrollbar" id="style-1">
                            <h2>De volgende Voorstellingen zijn op deze datum te zien</h2>
                            <VoorstellingenOphalen id={1} />
                            <VoorstellingenOphalen id={2} />
                            <VoorstellingenOphalen id={3} />
                            <VoorstellingenOphalen id={4} />
                            <VoorstellingenOphalen id={5} />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
};

export default Agenda;
