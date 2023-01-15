import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./style.css";

const Layout = () => {
  return (
    <>
    <Nav />




      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
