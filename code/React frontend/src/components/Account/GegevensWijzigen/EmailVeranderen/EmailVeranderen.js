import "./EmailVeranderen.css"


const EmailVeranderen = () => {
  return <main>
    <div class="EmailVeranderenBox">
      <div class="EmailVeranderenWrapper">
        <div class="EmailVeranderenTitle">Emailadres veranderen</div>
        <form action="#">
          <div class="EmailVeranderenField">
            <input type="email" required></input>
            <label>Uw huidige email</label>
          </div>
          <div class="EmailVeranderenField">
            <input type="email" required></input>
            <label>Uw nieuwe email</label>
          </div>
          <div class="EmailVeranderenField">
            <input type="email" required></input>
            <label>Herhaal uw nieuwe email</label>
          </div>
          <div class="EmailVeranderenField">
            <input type="submit" value="Opslaan"></input>
          </div>
        </form>
      </div>
    </div>
  </main>
};

export default EmailVeranderen;
