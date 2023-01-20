import "./BegunstigersPortaal.css";
import { Link } from 'react-router-dom'

const BegunstigersPortaal = () => {
  return (
    <>
      <div class="BegunstigersPortaalBox">
        <div class="BegunstigersPortaalWrapper">
          <h2 class="BegunstigersPortaalTitle">BegunstigersPortaal</h2>
          <div class="BegunstigersPortaalContentBox">
            <div class="BegunstigersPortaalContentWrapper">
              <h2 class="BegunstigersPortaalContentTitle">Mijn Voordelen</h2>
              <div class="BegunstigersPortaalField">
                <Link to="/gegevenswijzigen">
                  <button type="submit">Mijn Voordelen</button>
                </Link>
              </div>
            </div>
            <div class="BegunstigersPortaalContentWrapper">
              <h2 class="BegunstigersPortaalContentTitle">Conceptplanning Bekijken</h2>
              <div class="BegunstigersPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Conceptplanning Bekijken</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BegunstigersPortaal;