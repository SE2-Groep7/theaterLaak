import "./ZalenBeheren.css";
import { Link } from 'react-router-dom';
import moment from 'moment';


const ZalenBeheren = () => {
  const zaalId = '#12345';
  const aantalRijen = '12';
  const aantalStoelen = '240';
  const aantalRangen = '4';
  const aantalStoelenRang1 = '20';
  const aantalStoelenRang2 = '40';
  const aantalStoelenRang3 = '60';
  const aantalStoelenRang4 = '120';




  return (
    <>
      <div class="ZalenBeherenBox">
        <div class="ZalenBeherenWrapper">
          <h2 class="ZalenBeherenTitle">ConceptPlanning Bekijken</h2>
          <div class="ZalenBeherenContentBox">
            <div class="ZalenBeherenContentWrapper">
              <h2 class="ZalenBeherenContentTitle">ConceptPlanning Bekijken</h2>
              <div class="ZalenBeherenRoundCorners">
                <div class="ZalenBeherenScrollbar" id="style-3">
                  <div class="ZalenBeherenField">
                    <div class="ZalenBeherenInfo">
                    <h2>ZaalId: {zaalId}</h2>
                      <h5>AantalRijen: {aantalRijen}</h5>
                      <p>AantalStoelen: {aantalStoelen}</p>
                      <p>AantalRangen: {aantalRangen}</p>
                      <p>AantalStoelenRang1: {aantalStoelenRang1}</p>
                      <p>AantalStoelenRang2: {aantalStoelenRang2}</p>
                      <p>AantalStoelenRang3: {aantalStoelenRang3}</p>
                      <p>AantalStoelenRang4: {aantalStoelenRang4}</p>
                    </div>
                    <Link class="ZalenBeherenLink" to="/ZalenBeheren">
                      <button class="ZalenBeherenButton" type="submit">Zaalindeling aanpassen</button>
                    </Link>
                  </div>
                  <div class="ZalenBeherenField">
                    <div class="ZalenBeherenInfo">
                    <h2>ZaalId: {zaalId}</h2>
                      <h5>AantalRijen: {aantalRijen}</h5>
                      <p>AantalStoelen: {aantalStoelen}</p>
                      <p>AantalRangen: {aantalRangen}</p>
                      <p>AantalStoelenRang1: {aantalStoelenRang1}</p>
                      <p>AantalStoelenRang2: {aantalStoelenRang2}</p>
                      <p>AantalStoelenRang3: {aantalStoelenRang3}</p>
                      <p>AantalStoelenRang4: {aantalStoelenRang4}</p>
                    </div>
                    <Link class="ZalenBeherenLink" to="/ZalenBeheren">
                      <button class="ZalenBeherenButton" type="submit">Zaalindeling aanpassen</button>
                    </Link>
                  </div>
                  <div class="ZalenBeherenField">
                    <div class="ZalenBeherenInfo">
                    <h2>ZaalId: {zaalId}</h2>
                      <h5>AantalRijen: {aantalRijen}</h5>
                      <p>AantalStoelen: {aantalStoelen}</p>
                      <p>AantalRangen: {aantalRangen}</p>
                      <p>AantalStoelenRang1: {aantalStoelenRang1}</p>
                      <p>AantalStoelenRang2: {aantalStoelenRang2}</p>
                      <p>AantalStoelenRang3: {aantalStoelenRang3}</p>
                      <p>AantalStoelenRang4: {aantalStoelenRang4}</p>
                    </div>
                    <Link class="ZalenBeherenLink" to="/ZalenBeheren">
                      <button class="ZalenBeherenButton" type="submit">Zaalindeling aanpassen</button>
                    </Link>
                  </div>
                  <div class="ZalenBeherenField">
                    <div class="ZalenBeherenInfo">
                    <h2>ZaalId: {zaalId}</h2>
                      <h5>AantalRijen: {aantalRijen}</h5>
                      <p>AantalStoelen: {aantalStoelen}</p>
                      <p>AantalRangen: {aantalRangen}</p>
                      <p>AantalStoelenRang1: {aantalStoelenRang1}</p>
                      <p>AantalStoelenRang2: {aantalStoelenRang2}</p>
                      <p>AantalStoelenRang3: {aantalStoelenRang3}</p>
                      <p>AantalStoelenRang4: {aantalStoelenRang4}</p>
                    </div>
                    <Link class="ZalenBeherenLink" to="/ZalenBeheren">
                      <button class="ZalenBeherenButton" type="submit">Zaalindeling aanpassen</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZalenBeheren;


