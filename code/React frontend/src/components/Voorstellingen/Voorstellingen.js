import Card from "../Home/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./voorstellingen.css"
const Voorstellingen = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  }


  useEffect(() => {
    getShows();
    return () => shows.forEach(show => URL.revokeObjectURL(show.file));
  }, []);
  return (
    <>

      {loading && <div>loading...</div>}
      <section class="" >
        <h2>Uitgelichte voorstellingen</h2>
        <div
          class="">

          <div class="main" style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
            {!loading &&
              shows.map((file, index) => (
                <>

                  <div class="as">{index}
                    <Card id={index}
                      class="showBig"
                      foto={file.file}
                      fotoAlt={file.fotoAlt}
                      showName={file.showName}
                      beschrijving={file.beschrijving}
                      shp
                    />
                  </div>

                </>
              ))

            }
          </div>
        </div>

      </section>
    </>)
}


export default Voorstellingen;
