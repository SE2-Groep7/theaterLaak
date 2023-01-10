import "./Login.css"


const Login = () => {
  return <main>
    <div class="LoginBox">
      <div class="Loginwrapper">
        <div class="Logintitle">Inloggen</div>
        <form action="#">
          <div class="Loginfield">
            <input type="email" required></input>
            <label>Emailadres</label>
          </div>
          <div class="Loginfield">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="Logincontent">
            <div class="Logincheckbox">
              <input type="checkbox" id="remember-me"></input>
              <label for="remember-me">Onthoud mij</label>
            </div>
            <div class="LoginWachtwoord-Link"><a href="/wachtwoordvergeten">Wachtwoord Vergeten?</a></div>
          </div>
          <div class="Loginfield">
            <input type="submit" value="Login"></input>
          </div>
          <div class="LoginAanmmeldenLink">Wil je een account aanmaken? <a href="/registreer">Klik hier om te registreren</a></div>
        </form>
      </div>
    </div>
  </main>
};

export default Login;
