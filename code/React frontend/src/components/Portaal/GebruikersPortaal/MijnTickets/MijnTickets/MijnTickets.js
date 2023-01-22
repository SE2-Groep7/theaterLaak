import "./MijnTickets.css";
import TicketsComponent from "../TicketsComponent/TicketsComponent"


const MijnTickets = () => {
  return (
    <>
      <div class="MijnTicketsBox">
        <div class="MijnTicketsWrapper">
          <h2 class="MijnTicketsTitle">Mijn Tickets</h2>
          <div class="MijnTicketsContentBox">
            <div class="MijnTicketsContentWrapper">
              <h2 class="MijnTicketsContentTitle">Mijn Tickets</h2>
              <div class="MijnTicketsRoundCorners">
                <div class="MijnTicketsScrollbar" id="style-3">
                    <TicketsComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MijnTickets;


