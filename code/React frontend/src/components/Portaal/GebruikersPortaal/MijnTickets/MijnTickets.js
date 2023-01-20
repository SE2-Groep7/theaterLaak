import "./MijnTickets.css";
import { Link } from 'react-router-dom';
import moment from 'moment';

const MijnTickets = () => {
  const ticketId = '#12345';
  const ticketHolder = 'Alex van Unen';
  const startDateTime = '20230119T180000'; // 19-Jan-2023, 18:00 PM in local time (not UTC) format
  const endDateTime = '20230119T200000'; // 19-Jan-2023, 20:00 PM in local time (not UTC) format
  const startDateTimeFormatted = moment(startDateTime, 'YYYYMMDDTHHmmss').format('MM/DD/YYYY hh:mm a');
  const endDateTimeFormatted = moment(endDateTime, 'YYYYMMDDTHHmmss').format('MM/DD/YYYY hh:mm a');
  const title = 'Judeska Airlines';
  const ticketPurchaseDate = '20230119T140000';
  const ticketPurchaseDateFormatted = moment(ticketPurchaseDate, 'YYYYMMDDTHHmmss').format('MM/DD/YYYY hh:mm a');

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
                    <div class="MijnTicketsInfo">
                      <h2>{title}</h2>
                      <h5>Ticket ID: {ticketId} <br/> Gekocht op: {ticketPurchaseDateFormatted}</h5>
                      <p>Naam: {ticketHolder}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                      <p>Eindigd om: {endDateTimeFormatted}</p>
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

