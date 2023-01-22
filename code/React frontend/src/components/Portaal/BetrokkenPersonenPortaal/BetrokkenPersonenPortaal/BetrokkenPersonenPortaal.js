import "./BetrokkenPersonenPortaal.css";
import { Link } from 'react-router-dom'

const BetrokkenPersonenPortaal = () => {
  return (
    <>
      <div class="BetrokkenPersonenPortaalBox">
        <div class="BetrokkenPersonenPortaalWrapper">
          <h2 class="BetrokkenPersonenPortaalTitle">BetrokkenPersonenPortaal</h2>
          <div class="BetrokkenPersonenPortaalContentBox">
            <div class="BetrokkenPersonenPortaalContentWrapper">
              <h2 class="BetrokkenPersonenPortaalContentTitle">Mijn Voorstellingen</h2>
              <div class="BetrokkenPersonenPortaalField">
                <Link to="/mijnvoorstellingen">
                  <button type="submit">Mijn Voorstellingen</button>
                </Link>
              </div>
            </div>
            <div class="BetrokkenPersonenPortaalContentWrapper">
              <h2 class="BetrokkenPersonenPortaalContentTitle">Ruimte Reserveren</h2>
              <div class="BetrokkenPersonenPortaalField">
                <Link to="/ruimtereserveren">
                  <button type="submit">Ruimte Reserveren</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetrokkenPersonenPortaal;