import React, { useState,useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
    }
  }, [loggedIn, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request with email and password
      const loginResponse = await axios.post('https://mohieddin.nl/accountApi/api/account/login', {
        email,
        password,
      });

      // Extract the JWT token from the response
      const { data: { token } } = loginResponse;

      // Set the JWT token as a cookie
      document.cookie = `jwt=${token}`;

      // Decode the JWT token to extract the roles and loggedIn status
      const { roles, loggedIn } = jwtDecode(token);

      // Store the roles and loggedIn status in browser's local storage
      document.cookie = `loggedIn=${JSON.stringify({ roles, loggedIn })}`;

      
      // sessionStorage.setItem('loggedIn', JSON.stringify({ roles, loggedIn, expiry }));

      // Get user information
      if (loggedIn) {
        const userResponse = await axios.get('https://mohieddin.nl/accountApi/api/account/');

        // Extract the user information from the response
        const { data: user } = userResponse;

        // Store the user information in browser's local storage
        document.cookie = `UserInformation=${JSON.stringify(user)}`;

        // sessionStorage.setItem('UserInformation', JSON.stringify(user));
        console.log(user);
        navigate('/profile');

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className="LoginBox">
        <div className="LoginWrapper">
          <div className="LoginTitle">Inloggen</div>
          <form onSubmit={handleSubmit}>
            <div className="LoginField">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Emailadres</label>
            </div>
            <div className="LoginField">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Wachtwoord</label>
            </div>
            <div className="LoginContent">
              <div className="LoginCheckbox">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember-me">Onthoud mij</label>
              </div>
              <div className="LoginWachtwoord-Link">
                <a href="/wachtwoordvergeten">Wachtwoord Vergeten?</a>
              </div>
           
              </div>
            <div className="LoginField">
              <input type="submit" value="Login" />
            </div>
            <div className="LoginAanmmeldenLink">
              Wil je een account aanmaken? <a href="/registreer">Klik hier om te registreren</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
