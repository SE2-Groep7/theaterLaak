import "./MijnPortaal.css";
import { Link } from 'react-router-dom'

const MijnPortaal = () => {
  return (
    <>
      <div class="MijnPortaalBox">
        <div class="MijnPortaalWrapper">
          <h2 class="MijnPortaalTitle">MijnPortaal</h2>
          <div class="MijnPortaalContentBox">
            <div class="MijnPortaalContentWrapper">
              <h2 class="MijnPortaalContentTitle">BegunstigersPortaal</h2>
              <div class="MijnPortaalField">
                <Link to="/begunstigersportaal">
                  <button type="submit">BegunstigersPortaal</button>
                </Link>
              </div>
            </div>
            <div class="MijnPortaalContentWrapper">
              <h2 class="MijnPortaalContentTitle">BetrokkenPersonenPortaal</h2>
              <div class="MijnPortaalField">
                <Link to="/betrokkenpersonenportaal">
                  <button type="submit">BetrokkenPersonenPortaal</button>
                </Link>
              </div>
            </div>
            <div class="MijnPortaalContentWrapper">
              <h2 class="MijnPortaalContentTitle">Uitloggen</h2>
              <div class="MijnPortaalField">
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

export default MijnPortaal;