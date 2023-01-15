// import logo from "./components/Layout/logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Voorstellingen from "./components/Voorstellingen/Voorstellingen";
import Voorstelling from "./components/Voorstellingen/Voorstelling";
import Agenda from "./components/Agenda/Agenda";
import Tickets from "./components/Tickets/Tickets";
import OverOns from "./components/OverOns/OverOns";
import Contact from "./components/Contact/Contacts";
import Login from "./components/Account/Login/Login";
import Registreer from "./components/Account/Registreer/Registreer";
import WachtwoordVergeten from "./components/Account/WachtwoordVergeten/WachtwoordVergeten";
import NieuwWachtwoordOpvragen from "./components/Account/NieuwWachtwoordOpvragen/NieuwWachtwoordOpvragen";
import Uitloggen from "./components/Account/Uitloggen/Uitloggen";
import GebruikersPortaal from "./components/GebruikersPortaal/GebruikersPortaal";
import GegevensWijzigen from "./components/Account/GegevensWijzigen/GegevensWijzigen";
import NoPage from "./components/NoPage/NoPage";
import Disclaimer from "./components/Layout/Disclaimer";
import Cookies from "./components/Layout/Cookies";
import PrivacyStatement from "./components/Layout/PrivacyStatement";
import Admin from "./components/Admin/Admin";
import Cart from "./components/Cart/Cart";


function App() {
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
          <Route path="gegevenswijzigen" element={<GegevensWijzigen />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="privacystatement" element={<PrivacyStatement />} />
          <Route path="admin" element={<Admin />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

