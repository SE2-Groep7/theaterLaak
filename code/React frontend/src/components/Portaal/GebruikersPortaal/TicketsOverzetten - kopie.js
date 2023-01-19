import "./TicketsOverzetten.css";

const TicketsOverzetten = () => {
  return (
    <>
      <div class="TicketsOverzettenBox">
        <div class="TicketsOverzettenWrapper">
          <h2 class="TicketsOverzettenTitle">Tickets Overzetten</h2>
          <div class="TicketsOverzettenContentBox">
            <div class="TicketsOverzettenContentWrapper">
              <div class="TicketsOverzettenContentTitle">Tickets Overzetten</div>
              <form action="#">
                <div class="TicketsOverzettenField">
                  <input type="ID" required></input>
                  <label>TicketID</label>
                </div>
                <div class="TicketsOverzettenField">
                  <input type="email" required></input>
                  <label>Emailadres</label>
                </div>
                <div class="TicketsOverzettenContent">
                  <div class="TicketsOverzettenCheckbox">
                    <input type="checkbox" id="zekerweten?" required></input>
                    <label for="zekerweten?" >Weet je zeker dat je je ticket wilt overzetten?</label>
                  </div>
                </div>
                <div class="TicketsOverzettenField">
                  <input type="submit" value="Tickets Overzetten"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsOverzetten;