import "./MijnTickets.css";
import { Link } from 'react-router-dom';

const MijnTickets = () => {
  const ticketId = '#12345';
  const ticketHolder = 'Alex van Unen';
  const startDateTime = '20221130T220000'; // 30-Nov-2022, 8:00 PM in UTC format
  const endDateTime = '20221130T240000'; // 30-Nov-2022, 10:00 PM in UTC format
  const title = 'Judeska Airlines';

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
      <div class="MijnTicketsBox">
        <div class="MijnTicketsWrapper">
          <h2 class="MijnTicketsTitle">Mijn Tickets</h2>
          <div class="MijnTicketsContentBox">
            <div class="MijnTicketsContentWrapper">
              <h2 class="MijnTicketsContentTitle">Mijn Tickets</h2>
              <div class="MijnTicketsRoundCorners">
                <div class="MijnTicketsScrollbar" id="style-3">
                  <div class="MijnTicketsField">
                    <div>
                      <p>Ticket ID: {ticketId}</p>
                      <p>Eigenaar Ticket: {ticketHolder}</p>
                      <p>Titel van de Voorstelling: {title}</p>
                      <p>Begint om: {startDateTime}</p>
                      <p>Eindigd om: {endDateTime}</p>
                    </div>
                    <Link class="MijnTicketsLink" to="/MijnTickets">
                      <button class="MijnTicketsButton" type="submit" onClick={generateICal}>Download je ticket</button>
                    </Link>
                  </div>
                  <div class="MijnTicketsField">
                    <div>
                      <p>Ticket ID: {ticketId}</p>
                      <p>Eigenaar Ticket: {ticketHolder}</p>
                      <p>Titel van de Voorstelling: {title}</p>
                      <p>Begint om: {startDateTime}</p>
                      <p>Eindigd om: {endDateTime}</p>
                    </div>
                    <Link class="MijnTicketsLink" to="/MijnTickets">
                      <button class="MijnTicketsButton" type="submit" onClick={generateICal}>Download je ticket</button>
                    </Link>
                  </div>
                  <div class="MijnTicketsField">
                    <div>
                      <p>Ticket ID: {ticketId}</p>
                      <p>Eigenaar Ticket: {ticketHolder}</p>
                      <p>Titel van de Voorstelling: {title}</p>
                      <p>Begint om: {startDateTime}</p>
                      <p>Eindigd om: {endDateTime}</p>
                    </div>
                    <Link class="MijnTicketsLink" to="/MijnTickets">
                      <button class="MijnTicketsButton" type="submit" onClick={generateICal}>Download je ticket</button>
                    </Link>
                  </div>
                  <div class="MijnTicketsField">
                    <div>
                      <p>Ticket ID: {ticketId}</p>
                      <p>Eigenaar Ticket: {ticketHolder}</p>
                      <p>Titel van de Voorstelling: {title}</p>
                      <p>Begint om: {startDateTime}</p>
                      <p>Eindigd om: {endDateTime}</p>
                    </div>
                    <Link class="MijnTicketsLink" to="/MijnTickets">
                      <button class="MijnTicketsButton" type="submit" onClick={generateICal}>Download je ticket</button>
                    </Link>
                  </div>
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

