import "./BegunstigersPortaalComponent.css";
import { Link } from 'react-router-dom'

const BegunstigersPortaalComponent = () => {
  return (
    <>
      <div class="BegunstigersPortaalComponentContentBox">
        <div class="BegunstigersPortaalComponentContentWrapper">
          <h2 class="BegunstigersPortaalComponentContentTitle">BegunstigersPortaal</h2>
          <div class="BegunstigersPortaalComponentField">
            <Link to="/begunstigersportaal">
              <button type="submit">BegunstigersPortaal</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BegunstigersPortaalComponent;