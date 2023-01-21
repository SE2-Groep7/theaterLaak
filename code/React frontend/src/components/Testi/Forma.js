import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Forma = () => {
  const [account, setAccount] = useState('');
  const [succes, setSucces] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const total = params.get('total');


  const handlePayment = () => {
    const success = (account === "NL55ABNA5660751954") || (account === "NL02INGB8635612388" && Math.random() > 0.5);
    setSucces(success);
    if (succes) {
      // axios.post('https://mohieddin.nl/auth/bestellingen', {
      //   reference: 34,
      // })
      //   .then(res => {
          window.location.href = 'payed';
          localStorage.removeItem("selectedSeats");
        // })
        // .catch(error => {
        //   console.log(error);
        // });
    }
    else {
      alert("Het account heeft niet genoeg geld.");
    }
  }

  return (
    <div>
      U moet euro {total} betalen.
      <br />
      Het account NL55ABNA5660751954 heeft oneindig veel geld.
      <br />
      Het account NL02INGB8635612388 heeft in 50% van de gevallen genoeg geld.
      <br />
      Alle andere accounts hebben niet genoeg geld.
      <br />
      <form method="post">
        Bankrekeningnummer: <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="account" id="account" value={account} onChange={e => setAccount(e.target.value)}></input>
        <input type="hidden" id="succes" name="succes" value={succes}></input>
        <input type="hidden" name="reference" value="34"></input>
        <button type="button"class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePayment}>Betaal!</button>
      </form>
    </div>
  );
}


export default Forma;
