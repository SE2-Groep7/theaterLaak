import "./BetrokkenPersonenPortaalComponent.css";
import { Link } from 'react-router-dom'

const BetrokkenPersonenPortaalComponent = () => {
  return (
    <>
      <div class="BetrokkenPersonenPortaalComponentContentBox">
        <div class="BetrokkenPersonenPortaalComponentContentWrapper">
          <h2 class="BetrokkenPersonenPortaalComponentContentTitle">BetrokkenPersonenPortaal</h2>
          <div class="BetrokkenPersonenPortaalComponentField">
            <Link to="/betrokkenpersonenportaal">
              <button type="submit">BetrokkenPersonenPortaal</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetrokkenPersonenPortaalComponent;