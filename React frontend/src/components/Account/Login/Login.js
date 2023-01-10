import "./Login.css"


const Login = () => {
  return <main>
    <div class="LoginBox">
      <div class="wrapper">
        <div class="title">Inloggen</div>
        <form action="#">
          <div class="field">
            <input type="email" required></input>
            <label>Email Adres</label>
          </div>
          <div class="field">
            <input type="password" required></input>
            <label>Wachtwoord</label>
          </div>
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" id="remember-me"></input>
              <label for="remember-me">Onthoud mij</label>
            </div>
            <div class="pass-link"><a href="#">Wachtwoord Vergeten?</a></div>
          </div>
          <div class="field">
            <input type="submit" value="Login"></input>
          </div>
          <div class="signup-link">Wil je een account aanmaken? <a href="#">Klik hier om te registreren</a></div>
        </form>
      </div>
    </div>
  </main>
};

export default Login;
