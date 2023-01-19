import "./GebruikersPortaal.css";
import { Link } from 'react-router-dom'

const GebruikersPortaal = () => {
  return (
    <>
      <div class="GebruikersPortaalBox">
        <div class="GebruikersPortaalWrapper">
          <h2 class="GebruikersPortaalTitle">GebruikersPortaal</h2>
          <div class="GebruikersPortaalContentBox">
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Mijn Account</h2>
              <div class="GebruikersPortaalField">
                <Link to="/gegevenswijzigen">
                  <button type="submit">Mijn Account</button>
                </Link>
              </div>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Mijn Tickets</h2>
              <div class="GebruikersPortaalField">
                <Link to="/mijntickets">
                  <button type="submit">Mijn Tickets</button>
                </Link>
              </div>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Mijn Portaal</h2>
              <div class="GebruikersPortaalField">
                <Link to="/mijnportaal">
                  <button type="submit">Mijn Portaal</button>
                </Link>
              </div>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Tickets Overzetten</h2>
              <div class="GebruikersPortaalField">
                <Link to="/ticketsoverzetten">
                  <button type="submit">Tickets Overzetten</button>
                </Link>
              </div>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Doneren</h2>
              <div class="GebruikersPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Doneren</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GebruikersPortaal;