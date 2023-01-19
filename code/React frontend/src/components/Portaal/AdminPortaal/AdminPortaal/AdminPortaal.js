import "./AdminPortaal.css";
import { Link } from 'react-router-dom'

const AdminPortaal = () => {
  return (
    <>
      <div class="AdminPortaalBox">
        <div class="AdminPortaalWrapper">
          <h2 class="AdminPortaalTitle">AdminPortaal</h2>
          <div class="AdminPortaalContentBox">
            <div class="AdminPortaalContentWrapper">
              <h2 class="AdminPortaalContentTitle">Theater Beheren</h2>
              <div class="AdminPortaalField">
                <Link to="/gegevenswijzigen">
                  <button type="submit">Theater Beheren</button>
                </Link>
              </div>
            </div>
            <div class="AdminPortaalContentWrapper">
              <h2 class="AdminPortaalContentTitle">Tickets Beheren</h2>
              <div class="AdminPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Tickets Beheren</button>
                </Link>
              </div>
            </div>
            <div class="AdminPortaalContentWrapper">
              <h2 class="AdminPortaalContentTitle">Zalen Beheren</h2>
              <div class="AdminPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Zalen Beheren</button>
                </Link>
              </div>
            </div>
            <div class="AdminPortaalContentWrapper">
              <h2 class="AdminPortaalContentTitle">Winkel Beheren</h2>
              <div class="AdminPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Winkel Beheren</button>
                </Link>
              </div>
            </div>
            <div class="AdminPortaalContentWrapper">
              <h2 class="AdminPortaalContentTitle">MedewerkersPortaal</h2>
              <div class="AdminPortaalField">
                <Link to="/medewerkersportaal">
                  <button type="submit">MedewerkersPortaal</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortaal;