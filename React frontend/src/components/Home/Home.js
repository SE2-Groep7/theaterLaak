import Hero from "./Hero";
import Card from "./Card";
import axios from "axios";
import React, {useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  // state for the width of the show-slider element
  const showWidth = 300;
  const [maxPos,setMaxPos] = useState(0);

  const getFiles = async () => {
    const res = await axios.get("http://localhost:5245/api/file");
    const fileNames = res.data;
    let files = [];
    fileNames.map(async (file) => {
      const fileResponse = await axios({
        method: "get",
        responseType: "blob",
        url: "http://localhost:5245/api/file/" + String(file),
      });
      let reader = new window.FileReader();
      reader.readAsDataURL(fileResponse.data);
      reader.onload = function () {
        let imageDataUrl = reader.result;
        files.push(imageDataUrl);
      };
    });
    setFiles(files);
    var length = fileNames.length;
    setMaxPos(showWidth * (length -1));
    setLoading(false);
  }
  

  useEffect(() => {
    getFiles();
    

  }, []);
   const handelRightClick = () =>{
    setScrollPos(scrollPos + showWidth);
    if (scrollPos > maxPos) {
      setScrollPos(0);
    }
    updateButtonState();
  }
  const handelLeftClick = () =>{
    setScrollPos(scrollPos - showWidth);
    if (scrollPos < 0) {
      setScrollPos(maxPos);

    }
    updateButtonState();}

  const updateButtonState = () => {
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const showSlider = document.querySelector('.show-slider');
console.log(showSlider.offsetWidth);
console.log(maxPos);
console.log(scrollPos);
    if (scrollPos === 0) {
      leftButton.disabled = true;
    } else {
      leftButton.disabled = false;
    }
    if (scrollPos+ showSlider.offsetWidth >= maxPos + showWidth) {

      rightButton.disabled = true;
    } else {
      rightButton.disabled = false;
    }}
  return (
    <>
      <Hero />
      {loading && <div>loading...</div>}
      <section class="shows" >
        <h2>Uitgelichte voorstellingen</h2>
        <div
          class="show-slider">
          <div class="show-elements"          
          style={{
            left: `-${scrollPos}px`,
          }}>
            {!loading &&
             
              files.map((file,index) => (
                <>
                
                  <Card id={index}
                    foto={file}
                    fotoAlt="Foto van baletdanseresses"
                    beschrijving="D@nce"
                  />
                </>
              ))}
          </div>
          <button
            class="slider-button left" onClick={handelLeftClick}

          >
            &lt;
          </button>
          <button
            class="slider-button right" onClick={handelRightClick}

          >
            &gt;
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;