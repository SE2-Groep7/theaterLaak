import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import Logo from "./logo.png";
const Nav = ({ isLoggedIn, updateIsLoggedIn }) => {
  const [loggedInState, setIsLoggedIn] = useState(isLoggedIn);


const logOutHandler = () => {
Cookies.remove("UserInformation");
Cookies.remove("token");
Cookies.remove("loggedIn");
Cookies.remove("jwt");
setIsLoggedIn(false);
updateIsLoggedIn(false);
}

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
{isLoggedIn ? <Link to="/portaal">
{" "}
<a type="button"><i class="fa fa-user"> </i> Portaal</a>{" "}
</Link> :
<li>
<Link to="/registreer">
{" "}
<a type="button"><i class="fa fa-user"> </i> Registreer</a>{" "}
</Link>
</li>
}
<li>
{isLoggedIn ?
<a type="button" onClick={logOutHandler}>Logout</a>
:
<Link to="/login">
<a type="button">Login</a>
</Link>
}
</li>
</ul>
  </nav>
</>
);
};
export default Nav;

