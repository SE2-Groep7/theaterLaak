import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [fotoAlt, setFotoAlt] = useState();
  const [beschrijving, setBeschrijving] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const saveAlt = (e) => {
    setFotoAlt(e.target)
  }

  const saveBesch = (e) => {
    setBeschrijving(e.target)
  }

  const uploadFile = async (e) => {
    console.log(file);
    const formData = new FormData();
    formData.append("formFile", file);
    formData.append("fileName", fileName);
    formData.append("fotoAlt", fotoAlt);
    formData.append("beschrijving", beschrijving);
    try {
      const res = await axios.post("http://localhost:5245/api/file",formData);
      console.log(res);
    }
    catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <input type="file" onChange={saveFile} />
      <input type="text" onChange={saveAlt} />
      <input type="text" onChange={saveBesch} />
      <input type="button" value="upload" onClick={uploadFile} />
    </div>
  );
};

export default Admin;
