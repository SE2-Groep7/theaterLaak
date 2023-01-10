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
import NoPage from "./components/NoPage/NoPage";
import Disclaimer from "./components/Layout/Disclaimer";
import Cookies from "./components/Layout/Cookies";
import PrivacyStatement from "./components/Layout/PrivacyStatement";
import Admin from "./components/Admin/Admin";

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
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="privacystatement" element={<PrivacyStatement />} />
          <Route path="admin" element={<Admin />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
