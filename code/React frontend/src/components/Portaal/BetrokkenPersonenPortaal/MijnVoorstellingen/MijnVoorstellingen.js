import "./MijnVoorstellingen.css";
import moment from 'moment';


const MijnVoorstellingen = () => {
  const voorstellingId = '#12345';
  const voorstellingActeurs = 'Jan Dino';
  const voorstellingTitel = 'Judeska Airlines';
  const voorstellingZaal = 'Zaal 5';
  const startDateTime = '20230119T180000'; // 19-Jan-2023, 18:00 PM in local time (not UTC) format
  const startDateTimeFormatted = moment(startDateTime, 'YYYYMMDDTHHmmss').format('MM/DD/YYYY hh:mm a');


  return (
    <>
      <div class="MijnVoorstellingenBox">
        <div class="MijnVoorstellingenWrapper">
          <h2 class="MijnVoorstellingenTitle">Mijn Voorstellingen</h2>
          <div class="MijnVoorstellingenContentBox">
            <div class="MijnVoorstellingenContentWrapper">
              <h2 class="MijnVoorstellingenContentTitle">Mijn Voorstellingen</h2>
              <div class="MijnVoorstellingenRoundCorners">
                <div class="MijnVoorstellingenScrollbar" id="style-3">
                  <div class="MijnVoorstellingenField">
                    <div class="MijnVoorstellingenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <p>Zaal: {voorstellingZaal}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <div class="MijnVoorstellingenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <p>Zaal: {voorstellingZaal}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <div class="MijnVoorstellingenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <p>Zaal: {voorstellingZaal}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <div class="MijnVoorstellingenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <p>Zaal: {voorstellingZaal}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
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

export default MijnVoorstellingen;


