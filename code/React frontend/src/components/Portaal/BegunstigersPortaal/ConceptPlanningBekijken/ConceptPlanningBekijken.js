import "./ConceptPlanningBekijken.css";
import { Link } from 'react-router-dom';
import moment from 'moment';


const ConceptPlanningBekijken = () => {
  const voorstellingId = '#12345';
  const voorstellingActeurs = 'Jan Dino';
  const voorstellingTitel = 'Judeska Airlines';
  const startDateTime = '20230119T180000'; // 19-Jan-2023, 18:00 PM in local time (not UTC) format
  const startDateTimeFormatted = moment(startDateTime, 'YYYYMMDDTHHmmss').format('MM/DD/YYYY hh:mm a');




  return (
    <>
      <div class="ConceptPlanningBekijkenBox">
        <div class="ConceptPlanningBekijkenWrapper">
          <h2 class="ConceptPlanningBekijkenTitle">ConceptPlanning Bekijken</h2>
          <div class="ConceptPlanningBekijkenContentBox">
            <div class="ConceptPlanningBekijkenContentWrapper">
              <h2 class="ConceptPlanningBekijkenContentTitle">ConceptPlanning Bekijken</h2>
              <div class="ConceptPlanningBekijkenRoundCorners">
                <div class="ConceptPlanningBekijkenScrollbar" id="style-3">
                  <div class="ConceptPlanningBekijkenField">
                    <div class="ConceptPlanningBekijkenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <Link class="ConceptPlanningBekijkenLink" to="/ConceptPlanningBekijken">
                      <button class="ConceptPlanningBekijkenButton" type="submit">Laat een review achter</button>
                    </Link>
                  </div>
                  <div class="ConceptPlanningBekijkenField">
                    <div class="ConceptPlanningBekijkenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <Link class="ConceptPlanningBekijkenLink" to="/ConceptPlanningBekijken">
                      <button class="ConceptPlanningBekijkenButton" type="submit">Laat een review achter</button>
                    </Link>
                  </div>
                  <div class="ConceptPlanningBekijkenField">
                    <div class="ConceptPlanningBekijkenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <Link class="ConceptPlanningBekijkenLink" to="/ConceptPlanningBekijken">
                      <button class="ConceptPlanningBekijkenButton" type="submit">Laat een review achter</button>
                    </Link>
                  </div>
                  <div class="ConceptPlanningBekijkenField">
                    <div class="ConceptPlanningBekijkenInfo">
                      <h2>{voorstellingTitel}</h2>
                      <h5>VoorstellingId: {voorstellingId}</h5>
                      <p>Acteurs: {voorstellingActeurs}</p>
                      <h>Begint om: {startDateTimeFormatted}</h>
                    </div>
                    <Link class="ConceptPlanningBekijkenLink" to="/ConceptPlanningBekijken">
                      <button class="ConceptPlanningBekijkenButton" type="submit">Laat een review achter</button>
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

export default ConceptPlanningBekijken;


