import TheaterHall from "./TheaterHall";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
const Tickets = () => {
  const location = useLocation();
    const params = new URLSearchParams(location.search);
    const zaalId = params.get('zaal');
    const datum = params.get('datum');
    const showName = params.get('showName');
    const showId = params.get('showId');

  const [hall, setHall] = useState({});
  const [loading, setLoading] = useState(true);

  const getHall = async () => {
    setLoading(true);
    await axios
      .get("https://mohieddin.nl/ticketsapi/api/Hall/" + datum + "/" +zaalId )
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
      {loading ? <div>loading...</div> : <TheaterHall seats={hall.seats} zaalId={zaalId} datum={datum} showName={showName} showId={showId} />}
      
    </div>
  );
  };
  
  export default Tickets;
  