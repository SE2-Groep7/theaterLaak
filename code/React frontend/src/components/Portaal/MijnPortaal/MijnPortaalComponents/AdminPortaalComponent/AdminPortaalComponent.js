import "./AdminPortaalComponent.css";
import { Link } from 'react-router-dom'

const AdminPortaalComponent = () => {
  return (
    <>
      <div class="AdminPortaalComponentContentBox">
        <div class="AdminPortaalComponentContentWrapper">
          <h2 class="AdminPortaalComponentContentTitle">AdminPortaal</h2>
          <div class="AdminPortaalComponentField">
            <Link to="/AdminPortaal">
              <button type="submit">AdminPortaal</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortaalComponent;