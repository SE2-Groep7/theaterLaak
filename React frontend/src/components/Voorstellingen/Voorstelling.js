import React from "react";
import VoorstellingOphalen from "./VoorstellingOphalen";
import './Voorstelling.css';
import Programma3 from "./images/judeskaairlines-foto-v-ruudbaan_thumbnail.jpg";


const Voorstelling = () => {
    return <main>
        <div class="Voorstelling">
            <div class="VoorstellingText">
                <h2>Jandino Asporaat en anderen - Judeska Airlines</h2>
                <p>Na vier succesvolle films en twee uitverkochte theatertournees keert Judeska terug in een gloednieuwe hilarische klucht.
                    Nadat Judeska voor de zoveelste keer is ontslagen, krijgt ze nog één kans van het uitzendbureau.
                    Ze mag als stewardess aan de slag. Judeska ziet het helemaal zitten. Verre reizen, dure hotels en cocktails drinken aan zwembaden.
                    Met andere woorden: glamour. Maar dat zit er tot haar ongenoegen allemaal niet in, want ze blijft aan de grond. Ze wordt namelijk grondstewardess.
                    Haar realiteit is dealen met overvolle koffers, ongeduldige passagiers en krijsende kinderen. Judeska kent maar één manier om hier mee om te gaan.
                    Alles moet tegen de vlakte. Te midden van al deze hectiek en chaos is iedereen op zoek naar geluk.
                    Het is maar goed dat grondstewardess Judeska er is om ze in de juiste richting te wijzen. Of niet?</p></div>
            <div class="VoorstellingImage">
                <img src={Programma3} alt="judeskaairlines-foto-v-ruudbaan_thumbnail.jpg" ></img>
            </div>

        </div>
        <div class="VoorstellingInfo">        
            <div id="wrapper">
                <div class="VoorstellingRoundCorners">
                <div class="scrollbar" id="style-6">
                <h2>Deze voorstelling is op de volgende datums te zien</h2>
                    <VoorstellingOphalen id={1}/>
                    <VoorstellingOphalen id={2}/>
                    <VoorstellingOphalen id={3}/>
                    <VoorstellingOphalen id={4}/>
                    <VoorstellingOphalen id={5}/>
                    <VoorstellingOphalen id={6}/>

                </div>
            </div>
            </div>
        </div>

    </main>
};

export default Voorstelling;
