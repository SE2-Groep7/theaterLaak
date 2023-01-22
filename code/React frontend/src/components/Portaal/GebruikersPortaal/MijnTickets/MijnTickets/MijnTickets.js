import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import "./MijnTickets.css";
import TicketsComponent from '../TicketsComponent/TicketsComponent'

const MijnTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    axios.get('https://mohieddin.nl/todoapi/api/todoapi/tickets', { headers: { Authorization: `Bearer ${jwt}` } })
      .then(res => {
        setTickets(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="MijnTicketsBox">
        <div class="MijnTicketsWrapper">
          <h2 class="MijnTicketsTitle">Mijn Tickets</h2>
          <div class="MijnTicketsContentBox">
            <div class="MijnTicketsContentWrapper">
              <h2 class="MijnTicketsContentTitle">Mijn Tickets</h2>
              <div class="MijnTicketsRoundCorners">
                <div class="MijnTicketsScrollbar" id="style-3">
                  {tickets.map(ticket => (
                    <TicketsComponent key={ticket.id} ticket={ticket} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MijnTickets;