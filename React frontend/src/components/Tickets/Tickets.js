import TheaterHall from "./TheaterHall";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
const Tickets = () => {
  const location = useLocation();
    const params = new URLSearchParams(location.search);
    const zaalId = params.get('zaal');
    const datum = params.get('datum');

  const [hall, setHall] = useState({});
  const [loading, setLoading] = useState(true);

  const getHall = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:5203/api/Hall/" + datum + "/" +zaalId )
      .then((response) => {
        setHall(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getHall();
  }, []);

  return (
    <div className="App">
      {loading ? <div>loading...</div> : <TheaterHall seats={hall.seats} zaalId={zaalId} datum={datum} />}
      
    </div>
  );
  };
  
  export default Tickets;
  