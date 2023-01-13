import "./Uitloggen.css"


const Uitloggen = () => {
  return <main>
    <div class="UitloggenBox">
      <div class="UitloggenWrapper">
        <div class="UitloggenTitle">Weet je zeker dat je wilt uitloggen?</div>
        <form action="#">
          <div class="UitloggenField">
            <input type="submit" value="Uitloggen"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default Uitloggen;
