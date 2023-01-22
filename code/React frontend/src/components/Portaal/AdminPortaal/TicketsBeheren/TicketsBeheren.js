import "./TicketsBeheren.css";

const TicketsBeheren = () => {
  return (
    <>
      <div class="TicketsBeherenBox">
        <div class="TicketsBeherenWrapper">
          <h2 class="TicketsBeherenTitle">Tickets Beheren</h2>
          <div class="TicketsBeherenContentBox">
            <div class="TicketsBeherenContentWrapper">
              <h2 class="TicketsBeherenContentTitle">Tickets Beheren</h2>
              <form action="#">
                <div class="TicketsBeherenField">
                  <input type="name" required></input>
                  <label>TicketID</label>
                </div>
                <div class="TicketsBeherenField">
                  <input type="name" required></input>
                  <label>TicketEigenaar</label>
                </div>
                <div class="TicketsBeherenField">
                  <input type="name" required></input>
                  <label>Voorstelling van de Ticket</label>
                </div>
                <div class="TicketsBeherenField">
                  <input type="date" required></input>
                </div>
                <div class="TicketsBeherenField">
                  <input type="time" required></input>
                </div>
                <div class="TicketsBeherenCheckbox">
                  <input type="checkbox" id="zekerweten?" required></input>
                  <label for="zekerweten?">Weet je het zeker?</label>
                </div>
                <div class="TicketsBeherenField">
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

export default TicketsBeheren;