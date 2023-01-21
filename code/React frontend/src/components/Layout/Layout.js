import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./style.css";

const Layout = () => {
  return (
    
    <div class="flex flex-col h-screen justify-between">


    <Nav className="h-10" />

      <Outlet className="mb-auto h-10" />

      <Footer className ="h-10"/>
      </div>
  );
};

export default Layout;
