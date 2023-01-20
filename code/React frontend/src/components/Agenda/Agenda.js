import React, {  useEffect } from "react";
import { HubConnection, JsonHubProtocol } from "@microsoft/signalr";
import * as signalR from '@microsoft/signalr';
import { useRef } from 'react';



import { useState } from 'react';
import Calendar from 'react-calendar';
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import './Agenda.css';
import VoorstellingenOphalen from "../Voorstellingen/VoorstellingenOphalen";

const Agenda = () => {
    const [value, setValue] = useState(new Date());
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const connectionRef = useRef(null);
    const intervalRef = useRef(null);

    const formatDate = date => {
      let d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day];
    }
  
    const getShows = async (givenShows) => {
      givenShows = JSON.parse(givenShows);
      let showsOnDate = givenShows;
      console.log(showsOnDate);
      const showsOnDateIds = showsOnDate.map(show => show.ShowId);  // get an array of showIds
      // Create a map of showIds to zaalIds
      const showsOnDateMap = showsOnDate.reduce((showMap, show) => {
        showMap[show.ShowId] = {zaalId: show.ZaalId, date: show.ScheduleDate};
                return showMap;
      }, {});
  
      const res = await axios.get("https://mohieddin.nl/showapi/api/file");
      const shows = res.data;
      let promises = shows.filter(show => showsOnDateIds.includes(show.id)).map(async (show) => {  // filter the shows based on the showIds
        const fileResponse = await axios({
          method: "get",
          responseType: "blob",
          url: "https://mohieddin.nl/showapi/api/file/show/" + show.fileName
        });
        show.file = URL.createObjectURL(new Blob([fileResponse.data]));
        const showDateMap = showsOnDateMap[show.id];
        show.zaalId = showDateMap.zaalId; 
        show.date = showDateMap.date;
        
        return new Promise((resolve) => resolve(show));
      });
      const allShows = await Promise.all(promises)
      setShows(allShows);
      setLoading(false);
    }
  //   const handleNewShow = (newShow) => {
  //     getShows(value)
  // };
  const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://mohieddin.nl/showapi/showhub")
  .build();
  useEffect(() => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
    if (connectionRef.current) {
        connectionRef.current.stop();
    }
  

    connection.on("ReceiveShows", data => {
        getShows(data);
    });

    connection.start().then(() => {
        connectionRef.current = connection;
        connection.invoke("GetShowsByDate", value);

        intervalRef.current = setInterval(() => {
            connection.invoke("GetShowsByDate", value);
        }, 10000);
    });
    return () => {
        if (connectionRef.current) {
            connectionRef.current.stop();
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
}, [value]);

   return (
      <main>
        <div class="Agenda">
          <Calendar onChange={setValue} value={value} />
          <div id="AgendaWrapper">
            <div class="AgendaRoundCorners">
              <div class="AgendaScrollbar" id="style-1">
              <h2>De volgende Voorstellingen zijn op deze datum te zien</h2>
              {loading ? <p>Loading...</p> : shows.length ? shows.map(show => <VoorstellingenOphalen show={show} />) : <p>Geen voorstellingen op geselecteerde datum</p>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
  
export default Agenda;
