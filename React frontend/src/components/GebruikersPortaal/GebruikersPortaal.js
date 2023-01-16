import "./GebruikersPortaal.css";
import {Link} from 'react-router-dom'

const GebruikersPortaal = () => {
  return (
    <>
    <div class="GebruikersPortaalBox">
      <div class="GebruikersPortaalWrapper">
        <h2 class="GebruikersPortaalTitle">GebruikersPortaal</h2>
          <div class="GebruikersPortaalContentBox">
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Persoonlijke Agenda</h2>
                <div class="GebruikersPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Judeska Airlines</button>
                  </Link>
                </div>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Doneren</h2>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Aankoophistorie</h2>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Tickets Overzetten</h2>
            </div>
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">BegunstigersPortaal</h2>
            </div>
            
            <div class="GebruikersPortaalContentWrapper">
              <h2 class="GebruikersPortaalContentTitle">Uitloggen</h2>
            </div>

        </div>
        
      </div>
    </div>
    </>
  );
};

export default GebruikersPortaal;