import "./MijnPortaal.css";
import React, { useState} from 'react';
import BegunstigersComponent from "../MijnPortaalComponents/BegunstigersPortaalComponent/BegunstigersPortaalComponent";
import BetrokkenPersonenComponent from "../MijnPortaalComponents/BetrokkenPersonenPortaalComponent/BetrokkenPersonenPortaalComponent";
import MedewerkersPortaalComponent from "../MijnPortaalComponents/MedewerkersPortaalComponent/MedewerkersPortaalComponent";
import AdminPortaalComponent from "../MijnPortaalComponents/AdminPortaalComponent/AdminPortaalComponent";

const MijnPortaal = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  return (
    <>
      <div class="MijnPortaalBox">
        <div class="MijnPortaalWrapper">
          <h2 class="MijnPortaalTitle">MijnPortaal</h2>
          <div class="MijnPortaalContentBox">
            <div class="MijnPortaalContentWrapper">
              <h2 class="MijnPortaalNavTitle">Navigatie</h2>
              <div>
                <button class="MijnPortaalButton" onClick={() => setCurrentComponent(<BegunstigersComponent />)}>
                  BegunstigersPortaal
                </button>
                <button class="MijnPortaalButton" onClick={() => setCurrentComponent(<BetrokkenPersonenComponent />)}>
                  BetrokkenPersonenPortaal
                </button>
                <button class="MijnPortaalButton" onClick={() => setCurrentComponent(<MedewerkersPortaalComponent />)}>
                  MedewerkerPortaal
                </button>
                <button class="MijnPortaalButton" onClick={() => setCurrentComponent(<AdminPortaalComponent />)}>
                  AdminPortaal
                </button>
              </div>
              <div>
              </div>
            </div>
            <div class="MijnPortaalContent">
              {currentComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MijnPortaal;