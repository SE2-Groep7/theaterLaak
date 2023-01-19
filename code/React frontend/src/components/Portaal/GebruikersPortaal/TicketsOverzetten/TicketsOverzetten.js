import "./TicketsOverzetten.css";

const TicketsOverzetten = () => {
  return (
    <>
      <div class="TicketsOverzettenBox">
        <div class="TicketsOverzettenWrapper">
          <h2 class="TicketsOverzettenTitle">TicketsOverzetten</h2>
          <div class="TicketsOverzettenContentBox">
            <div class="TicketsOverzettenContentWrapper">
              <h2 class="TicketsOverzettenContentTitle">TicketsOverzetten</h2>
              <form action="#">
                <div class="TicketsOverzettenField">
                  <input type="name" required></input>
                  <label>Ticket ID</label>
                </div>
                <div class="TicketsOverzettenField">
                  <input type="email" required></input>
                  <label>Emailadres</label>
                </div>
                <div class="TicketsOverzettenCheckbox">
                  <input type="checkbox" id="zekerweten?"></input>
                  <label for="zekerweten?">Weet je het zeker?</label>
                </div>
                <div class="TicketsOverzettenField">
                  <input type="submit" value="Opslaan"></input>
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