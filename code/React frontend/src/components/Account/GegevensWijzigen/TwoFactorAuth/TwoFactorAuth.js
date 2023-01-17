import "./TwoFactorAuth.css"


const TwoFactorAuth = () => {
  return <main>
    <div class="TwoFactorAuthBox">
      <div class="TwoFactorAuthWrapper">
        <div class="TwoFactorAuthTitle">Two Factor Authentication</div>
        <form action="#">
        <div class="TwoFactorAuthField">
            <input type="email" required></input>
            <label>Emailadres</label>
        </div>
        <div class="TwoFactorAuthCheckbox">
            <input type="checkbox" id="remember-me"></input>
            <label for="remember-me">2FA toepassen</label>
          </div>
        <div class="TwoFactorAuthField">
          <input type="submit" value="Opslaan"></input>
        </div>
        </form>
      </div>
      
    </div>
  </main>
};

export default TwoFactorAuth;
