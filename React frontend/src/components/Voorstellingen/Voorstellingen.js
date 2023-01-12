import Card from "../Home/Card";
import axios from "axios";
import React, {useState, useEffect } from "react";
import "./voorstellingen.css"
const Voorstellingen = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const getFiles = async () => {
    const res = await axios.get("http://localhost:5245/api/file");
    const fileNames = res.data;
    let promises = fileNames.map(async (file) => {
      const fileResponse = await axios({
        method: "get",
        responseType: "blob",
        url: "http://localhost:5245/api/file/" + String(file),
      });
      return new Promise((resolve, reject) => {
        let reader = new window.FileReader();
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(fileResponse.data);
      });
    });
    const filess = await Promise.all(promises)
    setFiles(filess);

    setLoading(false);
  }

  useEffect(() => {
    getFiles();
    

  }, []);

  return (
    <>
   
      {loading && <div>loading...</div>}
      <section class="" >
        <h2>Uitgelichte voorstellingen</h2>
        <div
          class="">
       
            <div class="main"style={{display:"flex", flexDirection:"row",margin:"10px"}}>
            {!loading &&
              files.map((file,index) => (
                <>
               
                  <div class="as">{index}                   <Card class="showBig" id={index}
                    foto={file}
                    fotoAlt="Foto van baletdanseresses"
                    beschrijving="D@nce"
                  /></div>

                </>
              ))
           
              }
                 </div>
          </div>

          </section>
          </>)
}

  
  export default Voorstellingen;
  