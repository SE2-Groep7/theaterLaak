import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-info">
          <div class="theater-laak">
            <h2>THEATER LAAK</h2>
            <p>Theater laak Johanna <br/>
                Westerdijkplein 750<br/>
                 25212 EN Den Haag <br/>
                 (070) 4 45 88 888</p>
          </div>
          <div class="contact-met-ons">
            <h2>CONTACT MET ONS</h2>
            <p>(070) 4 45 88 889 Dit nummer is <br/>
                telefonisch bereikbaar van <br/>
                woensdag tot en met dinsdag van <br/>
                10:00 - 16:00</p>
          </div>
        </div>
        <div class="copyright">
            <div class="social-media">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
            </div>
          Copyright &copy; 2022


          <Link to="/disclaimer">Disclaimer</Link>


          <Link to="/cookies">Cookies</Link>


          <Link to="/privacystatement">Privacy Statement</Link>


          
        </div>
      </footer>
    </>
  );
};

export default Footer;
