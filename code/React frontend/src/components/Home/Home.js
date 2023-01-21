import Hero from "./Hero";
import Card from "./Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  // state for the width of the show-slider element
  const showWidth = 300;
  const [maxPos, setMaxPos] = useState(0);

  const getShows = async () => {
    const res = await axios.get("https://mohieddin.nl/showapi/api/file");
    const shows = res.data;
    let promises = shows.map(async (show) => {
      const fileResponse = await axios({
        method: "get",
        responseType: "blob",
        url: "https://mohieddin.nl/showapi/api/file/show/" + show.fileName
      });
      show.file = URL.createObjectURL(new Blob([fileResponse.data]));
      return new Promise((resolve) => resolve(show));
    });
    const allShows = await Promise.all(promises)
    setShows(allShows);
    var length = shows.length;
    setMaxPos(showWidth * (length - 1));
    setLoading(false);
  }


  useEffect(() => {
    getShows();
    return () => shows.forEach(show => URL.revokeObjectURL(show.file));
  }, []);
  const handelRightClick = () => {
    setScrollPos(scrollPos + showWidth);
    if (scrollPos > maxPos) {
      setScrollPos(0);
    }
    updateButtonState();
  }
  const handelLeftClick = () => {
    setScrollPos(scrollPos - showWidth);
    if (scrollPos < 0) {
      setScrollPos(maxPos);

    }
    updateButtonState();
  }

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
    if (scrollPos + showSlider.offsetWidth >= maxPos + showWidth) {

      rightButton.disabled = true;
    } else {
      rightButton.disabled = false;
    }
  }
  return (
    <>
      <Hero />
      {loading && <div>loading...</div>}
      <section class="shows" >
        <h2 className="text-4xl">Uitgelichte voorstellingen</h2>
        <div
          class="show-slider">
          <div class="show-elements"
            style={{
              left: `-${scrollPos}px`,
            }}>

            {!loading &&

              shows.map((file, index) => (
                <>

                  <Card id={index}
                    foto={file.file}
                    fotoAlt={file.fotoAlt}
                    showName={file.showName}
                    beschrijving={file.beschrijving}
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