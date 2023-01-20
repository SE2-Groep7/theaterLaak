import "./MedewerkersPortaalComponent.css";
import { Link } from 'react-router-dom'

const MedewerkersPortaalComponent = () => {
  return (
    <>
      <div class="MedewerkersPortaalComponentContentBox">
        <div class="MedewerkersPortaalComponentContentWrapper">
          <h2 class="MedewerkersPortaalComponentContentTitle">MedewerkersPortaal</h2>
          <div class="MedewerkersPortaalComponentField">
            <Link to="/MedewerkersPortaal">
              <button type="submit">MedewerkersPortaal</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedewerkersPortaalComponent;