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
              <h2 class="BetrokkenPersonenPortaalContentTitle">Mijn Voorstelling Beheren</h2>
              <div class="BetrokkenPersonenPortaalField">
                <Link to="/gegevenswijzigen">
                  <button type="submit">Mijn Voorstelling Beheren</button>
                </Link>
              </div>
            </div>
            <div class="BetrokkenPersonenPortaalContentWrapper">
              <h2 class="BetrokkenPersonenPortaalContentTitle">Voorstelling Aanmelden</h2>
              <div class="BetrokkenPersonenPortaalField">
                <Link to="/voorstelling">
                  <button type="submit">Voorstelling Aanmelden</button>
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