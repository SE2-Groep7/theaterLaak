import "./Login.css"


const Login = () => {
  return <main>
    <div class="LoginBox">
      <div class="LoginWrapper">
        <div class="LoginTitle">Inloggen</div>
        <form action="#">
          <div class="LoginField">
            <input type="email" required></input>
            <label>Emailadres</label>
          </div>
          <div class="LoginField">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="LoginContent">
            <div class="LoginCheckbox">
              <input type="checkbox" id="remember-me"></input>
              <label for="remember-me">Onthoud mij</label>
            </div>
            <div class="LoginWachtwoord-Link"><a href="/wachtwoordvergeten">Wachtwoord Vergeten?</a></div>
          </div>
          <div class="LoginField">
            <input type="submit" value="Login"></input>
          </div>
          <div class="LoginAanmmeldenLink">Wil je een account aanmaken? <a href="/registreer">Klik hier om te registreren</a></div>
        </form>
      </div>
    </div>
  </main>
};

export default Login;
