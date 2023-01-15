import { Link } from "react-router-dom";
import Logo from "./logo.png";

const Nav = () => {
  return (
    <>
             <nav class="navbar">
            <ul>
            <li>
            <Link to="/">
              <img src={Logo} class="logo" alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="/voorstellingen">Voorstellingen</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
          <li>
            <Link to="/agenda">Agenda</Link>
          </li>
          <li>
            <Link to="/overons">Over Ons</Link>
          </li>

          
          <li>
            <Link to="/contact">Contact</Link>
          </li>

               
            </ul>
            <ul>
            <li>
            <Link to="/cart">Cart</Link>
          </li>
            <li>
            <Link to="/registreer">
              {" "}
              <a type="button"><i class="fa fa-user"> </i>  Registreer</a>{" "}
            </Link>
          </li>
          <li>
            <Link to="/login">
              
              <a type="button">Login</a>
            </Link>
          </li>
                
            </ul>
        </nav>
        </>
  );
};

export default Nav;
