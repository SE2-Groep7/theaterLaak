import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Voorstellingen from './components/Voorstellingen/Voorstellingen';
import Voorstelling from './components/Voorstellingen/Voorstelling';
import Agenda from './components/Agenda/Agenda';
import Tickets from './components/Tickets/Tickets';
import OverOns from './components/OverOns/OverOns';
import Contact from './components/Contact/Contacts';
import Login from './components/Account/Login/Login';
import Registreer from './components/Account/Registreer/Registreer';
import WachtwoordVergeten from './components/Account/WachtwoordVergeten/WachtwoordVergeten';
import NieuwWachtwoordOpvragen from './components/Account/NieuwWachtwoordOpvragen/NieuwWachtwoordOpvragen';
import Uitloggen from './components/Account/Uitloggen/Uitloggen';
import GebruikersPortaal from './components/GebruikersPortaal/GebruikersPortaal';
import MijnTickets from "./components/Portaal/GebruikersPortaal/MijnTickets/MijnTickets";
import TicketsOverzetten from "./components/Portaal/GebruikersPortaal/TicketsOverzetten/TicketsOverzetten";
import MijnPortaal from "./components/Portaal/MijnPortaal/MijnPortaal/MijnPortaal";
import MedewerkersPortaal from "./components/Portaal/MedewerkersPortaal/MedewerkersPortaal/MedewerkersPortaal";
import AdminPortaal from "./components/Portaal/AdminPortaal/AdminPortaal/AdminPortaal";
import Template from "./components/Portaal/Template/Template";
import BegunstigersPortaal from "./components/Portaal/BegunstigersPortaal/BegunstigersPortaal/BegunstigersPortaal";
import BetrokkenPersonenPortaal from "./components/Portaal/BetrokkenPersonenPortaal/BetrokkenPersonenPortaal/BetrokkenPersonenPortaal";
import GegevensWijzigen from './components/Account/GegevensWijzigen/GegevensWijzigen';
import NoPage from './components/NoPage/NoPage';
import Disclaimer from './components/Layout/Disclaimer';
import CookiesPage from './components/Layout/Cookies';
import PrivacyStatement from './components/Layout/PrivacyStatement';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import { useNavigate } from "react-router-dom";
import Unauthorized from './components/NoPage/Unauthorized';
import Cookies  from "js-cookie";


const ProtectedComponent = ({component: WrappedComponent, roles}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(Cookies.get("loggedIn")) {
    const loggedIn = JSON.parse(Cookies.get("loggedIn"));
    if(!loggedIn) {
      navigate('/Unauthorized');
    } else {
      // check if user has a specific role
      
      const userRoles = loggedIn.roles;
      console.log(userRoles);
      if (roles && !userRoles.some(role => roles.includes(role))) {
        navigate('/Unauthorized');
      }
    }}
    else if (!Cookies.get("loggedIn")){
      navigate('/login');
    }
}, [navigate, roles]);

  return <WrappedComponent />;
}

function App() {
  const testToken = {
    "roles": ["admin"],
    "loggedIn": true,
}
  
  // const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="voorstellingen" element={<Voorstellingen />} />
          <Route path="voorstelling" element={<Voorstelling />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="overons" element={<OverOns />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="registreer" element={<Registreer />} />
          <Route path="wachtwoordvergeten" element={<WachtwoordVergeten />} />
          <Route path="nieuwwachtwoordopvragen" element={<NieuwWachtwoordOpvragen />} />
          <Route path="uitloggen" element={<Uitloggen />} />
          <Route path="gebruikersportaal" element={<GebruikersPortaal />} />
          <Route path="mijntickets" element={<MijnTickets />} />
          <Route path="ticketsoverzetten" element={<TicketsOverzetten />} />
          <Route path="mijnportaal" element={<MijnPortaal />} />
          <Route path="medewerkersportaal" element={<MedewerkersPortaal />} />
          <Route path="adminportaal" element={<AdminPortaal />} />
          <Route path="template" element={<Template />} />
          <Route path="begunstigersportaal" element={<BegunstigersPortaal />} />
          <Route path="betrokkenpersonenportaal" element={<BetrokkenPersonenPortaal />} />
          <Route path="gegevenswijzigen" element={<GegevensWijzigen />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="privacystatement" element={<PrivacyStatement />} />
          <Route path="admin"  element={<ProtectedComponent component={Admin}  roles={['admin']} />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="cart" element={<Cart />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

