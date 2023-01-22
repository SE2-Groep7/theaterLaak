import "./TicketsComponent.css";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import moment from 'moment';
import { SHA256 } from 'crypto-js';

const TicketsComponent = ({ ticket }) => {
  console.log(ticket);
  const ticketId = ticket.id;
  const startDateTime = ticket.showDate;
  const endDateTime = ticket.showDate;
  const [title, setTitle] = useState('');
  const [ticketHolder, setTicketHolder] = useState('');
  const UserInformation = JSON.parse(Cookies.get("UserInformation"));
  useEffect(() => {
    axios.get(`https://mohieddin.nl/showapi/api/File/Show/perID/${ticket.showId}`)
    .then(res => {
        setTitle(res.data.showName);
    }).catch(err => console.log(err))
  }, []);
  useEffect(() => {
    setTicketHolder(`${UserInformation.firstName} ${UserInformation.surName}`);
  }, []);
  const startDateTimeFormatted = moment(startDateTime, 'YYYYMMDDTHHmmss').format('MM/DD/YYYY hh:mm a');

  function generateICal() {
    var icalContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Theater Ticket - ${title}\nDTSTART:${startDateTime}\nDTEND:${endDateTime}\nLOCATION:${ticketHolder}\nDESCRIPTION:Ticket ID: ${ticketId}\nEND:VEVENT\nEND:VCALENDAR`;
    var file = new Blob([icalContent], { type: 'text/calendar' });
    var fileUrl = URL.createObjectURL(file);

    var a = document.createElement("a");
    a.href = fileUrl;
    a.download = 'TheaterTicket.ics';
    document.body.appendChild(a);
    a.click();
  }



  return (
    <>
      <div class="MijnTicketsField">
        <div class="MijnTicketsInfo">
          <h2>{title}</h2>
          <p>Naam: {ticketHolder}</p>
          <h>Begint om: {startDateTimeFormatted}</h>
          
        </div>
        <div class="MijnTicketsQR">
          <QRCode fgColor="#5e5e5e" level="M" size={128} value={SHA256(ticketId).toString()} />
        </div>
        <Link class="MijnTicketsLink" to="/MijnTickets">
          <button class="MijnTicketsButton" type="submit" onClick={generateICal}>Download je ticket</button>
         
        </Link>
      </div>
    </>
  );
};
export default TicketsComponent;