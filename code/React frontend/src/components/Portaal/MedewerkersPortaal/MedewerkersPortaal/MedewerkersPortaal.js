import "./MedewerkersPortaal.css";
import { Link } from 'react-router-dom'

const MedewerkersPortaal = () => {
  return (
    <>
      <div class="MedewerkersPortaalBox">
        <div class="MedewerkersPortaalWrapper">
          <h2 class="MedewerkersPortaalTitle">MedewerkersPortaal</h2>
          <div class="MedewerkersPortaalContentBox">
            <div class="MedewerkersPortaalContentWrapper">
              <h2 class="MedewerkersPortaalContentTitle">Overzicht Voorstellingen</h2>
              <div class="MedewerkersPortaalField">
                <Link to="/gegevenswijzigen">
                  <button type="submit">Overzicht Voorstellingen</button>
                </Link>
              </div>
            </div>
            <div class="MedewerkersPortaalContentWrapper">
              <h2 class="MedewerkersPortaalContentTitle">Voorstelling Beheren</h2>
              <div class="MedewerkersPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Voorstelling Beheren</button>
                </Link>
              </div>
            </div>
            <div class="MedewerkersPortaalContentWrapper">
              <h2 class="MedewerkersPortaalContentTitle">Kortingsregels Toepassen</h2>
              <div class="MedewerkersPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Kortingsregels Toepassen</button>
                </Link>
              </div>
            </div>
            <div class="MedewerkersPortaalContentWrapper">
              <h2 class="MedewerkersPortaalContentTitle">Uitloggen</h2>
              <div class="MedewerkersPortaalField">
                <Link to="/uitloggen">
                  <button type="submit">Uitloggen</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedewerkersPortaal;