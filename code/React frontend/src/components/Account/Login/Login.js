import React, { useState,useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Nav from '../../Layout/Nav';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rememberMe, setRememberMe] = useState(false);
const [error, setError] = useState('');
const { isLoggedIn, updateIsLoggedIn } = useContext(AuthContext);

const navigate = useNavigate();

useEffect(() => {
  if (isLoggedIn) {
    const loggedInCookie = JSON.parse(Cookies.get("loggedIn"));
    if(loggedInCookie) {
      const { roles } = loggedInCookie;
      if(Array.isArray(roles)) {
        if(roles.includes("admin")) {
        navigate('/adminportaal');
        } else {
        navigate('/gebruikersportaal');
        }
      } else {
        if(roles === "admin") {
        navigate('/adminportaal');
        } else {
        navigate('/gebruikersportaal');
        }
      }
    }
  }
}, [isLoggedIn, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // added this line
    try {
      const bodyParameters = {
        userName: email,
        password: password,
     };
      // Send login request with email and password
      const loginResponse = await axios.post('https://mohieddin.nl/auth/api/authapi/ApplicationUsers/Login', bodyParameters);
  
      // Extract the JWT token from the response
      const { data: { token } } = loginResponse;
  
      // Set the JWT token as a cookie
      document.cookie = `jwt=${token}`;
  
      // Decode the JWT token to extract the roles and loggedIn status
      const { roles } = jwtDecode(token);
      const loggedIn = true;
  
      // Store the roles and loggedIn status in browser's local storage
      document.cookie = `loggedIn=${JSON.stringify({ roles, loggedIn })}`;
      document.cookie = `token=${token}`
  
      // Get user information
      if (loggedIn) {
        updateIsLoggedIn(true);
        const config = {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` }
        };
  
        const userResponse = await axios.get('https://mohieddin.nl/auth/api/authapi/ApplicationUsers/profile', config);
  
        // Extract the user information from the response
        const { data: user } = userResponse;
  
        const userResponse2 = await axios.get('https://mohieddin.nl/todoapi/api/todoapi/Interesse', config);
        user.interesses = userResponse2.data;
  
        const userResponse3 = await axios.get('https://mohieddin.nl/todoapi/api/todoapi/tickets', config);
        user.tickets = userResponse3.data;
  
        // Store the user information in browser's local storage
        document.cookie = `UserInformation=${JSON.stringify(user)}`;
  
        // Redirect the user to the appropriate page
        if (Array.isArray(roles)) {
        if (roles.includes("Admin")) {
          navigate('/adminportaal');
        } else {
          navigate('/gebruikersportaal');
        }
      }}
      else{
        if(roles === "Admin") {
          navigate('/adminportaal');
        } else {
          navigate('/gebruikersportaal');
        }
      }
    } catch (error) {
      setError('Incorrect email or password, please try again'); // added this line
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
                  type="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Gebruikersnaam</label>
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
              <div className="LoginError">{error && <p style={{color: 'red'}}>{error}</p>}</div>
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