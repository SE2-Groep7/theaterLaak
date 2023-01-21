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
  
      return year + "-" + month + "-" + day;
    }
  
    
async function getShows(givenShows) {
  givenShows = JSON.parse(givenShows);
  try {
      // Stap 1: Haal array A op van alle shows vanuit de API
      const response = await axios.get('https://mohieddin.nl/showapi/api/file');
      let arrayA = response.data;

      // Stap 2: Maak API-call voor elk element in array A om foto op te halen
      const filePromises = arrayA.map(async element => {
        const fileResponse = await axios({
          method: "get",
          responseType: "blob",
          url: "https://mohieddin.nl/showapi/api/file/show/" + element.fileName
        });
          return {...element, file: URL.createObjectURL(new Blob([fileResponse.data]))
          };
      });
      const arrayAWithFiles = await Promise.all(filePromises);

      // Stap 3: Houd alleen shows over die dezelfde id hebben als in de givenShows-array
      arrayA = arrayAWithFiles.filter(element => {
          let showId = givenShows.find(show => show.ShowId == element.id);
          return showId !== undefined;
      });

      // Stap 4: Maak Array B aan door schedule en show-data te combineren
      let arrayB = givenShows.map(schedule => {
          let show = arrayA.find(element => element.id === schedule.ShowId);
          console.log(show.file);
          return {
              "id": schedule.Id,
              "showName": schedule.ShowName,
              "fileName": show.fileName,
              "formFile": show.formFile,
              "fotoAlt": show.fotoAlt,
              "beschrijving": show.beschrijving,
              "showSchedules": show.showSchedules,
              "file": show.file,
              "zaalId": schedule.ZaalId,
              "date": schedule.ScheduleDate
          }
      });

      // Stap 5: Zet shows en zet loading op false
      setShows(arrayB);
      setLoading(false);
  } catch (error) {
      console.log(error);
  }
}

  const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://mohieddin.nl/showapi/showhub")
  .build();
  const handleDateChange = (date) => {
    setValue(date);
    if (connectionRef.current) {
        connectionRef.current.stop();
    }
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }

    connection.on("ReceiveShows", data => {
        getShows(data);
    });

    connection.start().then(() => {
        connectionRef.current = connection;
        connection.invoke("GetShowsByDate", formatDate(date));

        intervalRef.current = setInterval(() => {
            connection.invoke("GetShowsByDate", formatDate(date));
        }, 10000);
    });
};

useEffect(() => {
    return () => {
        if (connectionRef.current) {
            connectionRef.current.stop();
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
}, []);

   return (
      <main>
        <div class="Agenda">
          <Calendar onChange={handleDateChange} value={value} />
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
