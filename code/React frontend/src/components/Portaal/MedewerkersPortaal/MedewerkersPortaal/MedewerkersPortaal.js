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
              <h2 class="MedewerkersPortaalContentTitle">Voorstelling Beheren</h2>
              <div class="MedewerkersPortaalField">
                <Link to="/voorstellingbeheren">
                  <button type="submit">Voorstelling Beheren</button>
                </Link>
              </div>
            </div>
            <div class="MedewerkersPortaalContentWrapper">
              <h2 class="MedewerkersPortaalContentTitle">Kortingsregels Beheren</h2>
              <div class="MedewerkersPortaalField">
                <Link to="/kortingsregelsbeheren">
                  <button type="submit">Kortingsregels Beheren</button>
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