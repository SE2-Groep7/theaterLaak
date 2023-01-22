import React, { useState, useEffect } from "react";
import axios from "axios";

import VoorstellingOphalen from "./VoorstellingOphalen";
import './Voorstelling.css';
import { useLocation } from 'react-router-dom';
const Voorstelling = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const showName = params.get('showName');
    const [showFinal, setShow] = useState({});
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scheduleCalled, setScheduleCalled] = useState(false);

    const getShow = async () => {

        const showResponse = await axios.get("https://mohieddin.nl/showapi/api/File/Show?showName=" + showName);
        const show = showResponse.data;
        const fileResponse = await axios({
            method: "get",
            responseType: "blob",
            url: "https://mohieddin.nl/showapi/api/file/show/" + show.fileName
        });
        show.file = URL.createObjectURL(new Blob([fileResponse.data]));
        setShow(show);


        console.log("im here");
        console.log(showFinal.id);

    };
    const getSchedule = async (showId) => {
        console.log("Im called");
        if (!scheduleCalled) {
            setScheduleCalled(true);
            const response = await axios.get(`https://mohieddin.nl/showapi/api/Show/shows/${showId}/schedule`);
            const schedule = response.data;
            const updateShows = async () => {
                schedule.forEach(show => {
                    show.file = showFinal.file;
                }

                );
            }
            await updateShows();

            setShows(schedule);


            setLoading(false);

        }
    }


    useEffect(() => {
        getShow();

    }, []);

    useEffect(() => {
        console.log(showFinal.id);
        if (showFinal.id)
            getSchedule(showFinal.id)
        console.log(shows);
    }, [showFinal]);

    return <main>
        <div class="Voorstelling">
            <div class="VoorstellingText">
                <h2>{showFinal.showName}</h2>
                <p>{showFinal.beschrijving}</p></div>
            <div class="VoorstellingImage">
                <img src={showFinal.file} alt={showFinal.fotoAlt} ></img>
            </div>

        </div>
        <div class="VoorstellingInfo">
            <div id="VoorstellingWrapper">
                <div class="MijnVoorstellingenContentBox">
                    <div class="MijnVoorstellingenContentWrapper">
                        <h2 class="MijnVoorstellingenContentTitle">Mijn Voorstellingen</h2>
                        <div class="VoorstellingRoundCorners">
                            <div class="VoorstellingScrollbar" id="style-3">
                                <h2>Deze Voorstelling is op de volgende datums te zien</h2>
                                {loading ? <p>Loading...</p> : shows.length ? shows.map(show => <VoorstellingOphalen show={show} />) : <p>Geen voorstellingen op geselecteerde datum</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
};

export default Voorstelling;
