import React from 'react';
import "./contact.css";
import foto1 from "./images/pexels-pixabay-63328.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-Wrapper">
        <div className="contact-text">
          <div className="contact-title">
            <h2>Contact</h2>
          </div>
          <p>Theater Laak is gelegen in het hart van het Laakkwartier en is gemakkelijk te bereiken. Of u nu met de auto, openbaar vervoer of te voet komt, wij zijn gemakkelijk te vinden.</p>
          <p>Voor vragen, opmerkingen of reserveringen kunt u contact met ons opnemen via onze contactpagina op onze website, een e-mail sturen naar <a href="mailto: info@theaterlaak.nl">info@theaterlaak.nl</a>, of telefonisch contact opnemen via <a href="tel: (070)-44588889">(070)-44588889</a>. Onze klantenservice is beschikbaar van maandag tot en met vrijdag tussen 9:00 en 17:00 uur.</p>
          <p>Als u liever uw vraag of opmerking per post wilt sturen, kunt u dat doen naar Westerdijkplein 750, 25212 EN Den Haag of kom gerust een keer langs bij ons.</p>
          <p>We doen ons best om u zo snel mogelijk te helpen en zullen u binnen 24 uur terugbellen of antwoorden op uw e-mail. Bedankt voor het contact met Theater Laak.</p>
        </div>
        <div className="contact-images">
          <img src={foto1} alt="Contact Foto1" />
        </div>
      </div>
    </div>
  );
};

export default Contact;