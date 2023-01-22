import AdminPortaal from './AdminPortaal/AdminPortaal/AdminPortaal';
import GebruikersPortal from './GebruikersPortaal/GebruikersPortaal/GebruikersPortaal';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
const Portaal = () => {
    const loggedInCookie = JSON.parse(Cookies.get("loggedIn"));
    const navigate = useNavigate();
    useEffect(() => {
        if (loggedInCookie) {
            const roles = loggedInCookie.roles;
            if (roles) {
                if (Array.isArray(roles)) {
                    if (roles.includes("admin")) {
                        navigate('/adminportaal');
                    } else {
                        navigate('/gebruikersportaal');
                    }
                } else {
                    if (roles === "admin") {
                        navigate('/adminportaal');
                    } else {
                        navigate('/gebruikersportaal');
                    }
                }
            }
            else {
                navigate('/gebruikersportaal');
            }

        }
    });
    return (
        <>
        </>
    );
}

export default Portaal;