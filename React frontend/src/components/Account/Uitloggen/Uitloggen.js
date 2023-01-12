import "./Uitloggen.css"


const Uitloggen = () => {
  return <main>
    <div class="UitloggenBox">
      <div class="Uitloggenwrapper">
        <div class="Uitloggentitle">Weet je zeker dat je wilt uitloggen?</div>
        <form action="#">
          <div class="Uitloggenfield">
            <input type="submit" value="Uitloggen"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default Uitloggen;
