import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegistreerStap2.css";
import jwt_decode from "jwt-decode";

const RegistreerStap2 = ({ userName, password }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const phoneNumber = formData.get("telefoonnummer");
    const firstName = formData.get("voornaam");
    const surName = formData.get("achternaam");

    try {
      // Step 1a
      await axios.post("https://mohieddin.nl/auth/api/authapi/ApplicationUsers/register", {
        userName,
        password,
      });

      // Step 1b
      const loginResponse = await axios.post(
        "https://mohieddin.nl/auth/api/authapi/ApplicationUsers/Login",
        {
          userName,
          password,
        }
      );
      // Step 1b.1
      const token = loginResponse.data.token;
      const decoded = jwt_decode(token);
      const userId = decoded.userId;
      await axios.post("https://mohieddin.nl/todoapi/api/User", {
        id: userId,
        todoItems: [],
        interesses: [],
        tickets: []
      });
      // Step 1c
      await axios.put(
        "https://mohieddin.nl/auth/api/authapi/ApplicationUsers/updateprofile",
        {
          email,
          phoneNumber,
          firstName,
          surName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Step 2
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className="RegistreerStap2Box">
        <div className="RegistreerStap2Wrapper">
          <div className="RegistreerStap2Title">Registreren</div>
          <form onSubmit={handleSubmit}>
            <div className="RegistreerStap2Field">
              <input type="text" required name="voornaam"></input>
              <label>Voornaam</label>
            </div>
            <div className="RegistreerStap2Field">
              <input type="text" required name="achternaam"></input>
              <label>Achternaam</label>
            </div>
            <div className="RegistreerStap2Field">
              <input type="email" required name="email"></input>
              <label>Emailadres</label>
            </div>
            <div className="RegistreerStap2Field">
              <input type="tel" required name="telefoonnummer"></input>
              <label>Telefoonnummer</label>
            </div>
            <div className="RegistreerStap2Field">
              <button className="Submit">
                Registreer
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegistreerStap2