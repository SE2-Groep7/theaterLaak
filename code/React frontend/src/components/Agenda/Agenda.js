import React, {  useEffect } from "react";
import { HubConnection, JsonHubProtocol } from "@microsoft/signalr";
import * as signalR from '@microsoft/signalr';


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
    const [connection, setConnection] = useState(null);

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
  
    const getShows = async (date) => {
      const showsOnDate = await axios.get(`https://mohieddin.nl/showapi/api/Show/date?date=${formatDate(date)}`);
      const showsOnDateIds = showsOnDate.data.map(show => show.showId);  // get an array of showIds
      // Create a map of showIds to zaalIds
      const showsOnDateMap = showsOnDate.data.reduce((showMap, show) => {
        showMap[show.showId] = {zaalId: show.zaalId, date: show.scheduleDate};
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
    const handleNewShow = (newShow) => {
      getShows(value)
  };
    useEffect(() => {
      getShows(value);
      var connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5245/showhub").build()
      connection.on("newShow", handleNewShow);
      connection.start().then(() => {
        setConnection(connection);
      });
      return () => {
        connection.stop();
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
