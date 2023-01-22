import "./RegistreerStap1.css"
import RegistreerStap2 from "../RegistreerStap2/RegistreerStap2"
import { useState, useEffect } from "react";

const RegistreerStap1 = () => {
  const [stap2, SetStap2] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordMatch) {
      SetStap2(true);
    }
  }

  return<div>

      
    {stap2 ? <RegistreerStap2 userName={userName} password={password} /> :

        <main>
          <div class="RegistreerStap1Box">
            <div class="RegistreerStap1Wrapper">
              <div class="RegistreerStap1Title">Registreren</div>
              <form onSubmit={handleSubmit}>
                <div class="RegistreerStap1Field">
                  <input value={userName}
                    onChange={(e) => setUserName(e.target.value)} type="text" required />
                    <label>Gebruikersnaam</label>
                </div>
                <div class="RegistreerStap1Field">
                  <input type="password" required
                    onChange={(e) => setPassword(e.target.value)} />
                    <label>Wachtwoord</label>
                </div>
                <div class="RegistreerStap1Field">
                  <input type="password" required
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label>Herhaal uw Wachtwoord</label>
                    {!passwordMatch && <div class="password-match-error">Wachtwoorden komen niet overeen</div>}
                </div>
                <div class="RegistreerStap1Field">
                  <button class="Submit" onClick={handleSubmit} value="">Volgende Stap</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      }
    </div>
  
};
export default RegistreerStap1;