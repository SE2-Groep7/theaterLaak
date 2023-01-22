import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./style.css";
import React, {useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

const Layout = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLoggedIn = (setIsLoggedIn) => {
    if(Cookies.get("loggedIn")) {
      const loggedInCookie = JSON.parse(Cookies.get("loggedIn"));
      if(loggedInCookie) {
        if(loggedInCookie.loggedIn)
        {setIsLoggedIn(loggedInCookie.loggedIn)}
      }
      } else {
        setIsLoggedIn(false) }

  }
  useEffect(() => {
    // if (isLoggedIn) {
    //   const loggedInCookie = JSON.parse(Cookies.get("loggedIn"));
    //   if (loggedInCookie) {
    //   const { roles } = loggedInCookie;
    //   if (Array.isArray(roles)) {
    //   if (roles.includes("admin")) {
    //   navigate("/adminportaal");
    //   } else {
    //   navigate("/gebruikersportaal");
    //   }
    //   } else {
    //   if (roles === "admin") {
    //   navigate("/adminportaal");
    //   } else {
    //   navigate("/gebruikersportaal");
    //   }
    //   }
    //   }
    //   }
    checkLoggedIn(setIsLoggedIn);
  }, [isLoggedIn, navigate]);
  return (
    <AuthContext.Provider value={{ isLoggedIn, updateIsLoggedIn: setIsLoggedIn }}>

    <div class="flex flex-col h-screen justify-between">


<Nav className="h-10" isLoggedIn={isLoggedIn} updateIsLoggedIn={setIsLoggedIn}/>

      <Outlet className="mb-auto h-10" />

      <Footer className ="h-10"/>
      </div>
      </AuthContext.Provider>

  );
};

export default Layout;
