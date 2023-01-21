import React, { useState,useEffect } from 'react';
import "./Cart.css";
const Cart = () => {
  const [storedSeats, setStoredSeats] = useState(JSON.parse(localStorage.getItem("selectedSeats")) || []);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(storedSeats));
  }, [storedSeats]);



  if(storedSeats.length === 0) return <div class="Cart"><h3>No seats selected</h3></div>;
  const removeSeat = (date, zaalId, seat) => {
    let seats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    let existingSeat = seats.find(s => s.date === date && s.zaalId === zaalId);
    existingSeat.seats = existingSeat.seats.filter(s => s !== seat);
    if (existingSeat.seats.length === 0) {
      seats = seats.filter(s => s.date !== date && s.zaalId !== zaalId);
    }
    localStorage.setItem("selectedSeats", JSON.stringify(seats));
    setStoredSeats(seats);
  }

  const clearCart = () => {
    localStorage.removeItem("selectedSeats");
    setStoredSeats([]);
  };
  function seatprijs (rang)  {
    if (rang === "1st") {
      return 30;
    } else if (rang === "2st") {
      return 20;
    } else if (rang === "3st") {
      return 10;
    }
  }
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    storedSeats.forEach((show) => {
      show.seats.forEach((seat) => {
        totalPrice += seatprijs(seat.rank);
      });
    });
    return totalPrice;
  }
  storedSeats.forEach(show => {
    show.seats = show.seats.sort((a, b) => a.id - b.id);
  });
  
  return (
    <div class="Cart">
      <h2>Cart</h2>
      {storedSeats.map((show, index) => (
        <div key={index}>
          <h3>Datum: {show.date}</h3>
          <h3>Zaal: {show.zaalId}</h3>
          <h3>Voorstelling: {show.showName}</h3>
          <ul class="CartList" >
            {show.seats.map((seat) => (
              <li key={seat.id}>
                Seat: {seat.id} - Row: {seat.row} - Column: {seat.column} - Rang: {seat.rank}
                <button class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={() => removeSeat(show.date, show.zaalId, seat)}>Remove</button>
                <p> prijs: {seatprijs(seat.rank)}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div class="btn-holder">
      <button class="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={clearCart}>Clear Cart</button>
      <button className='shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={() => window.location.href = `forma?total=${calculateTotalPrice()}`}>Afrekenen</button>
      <p>Total Price: {calculateTotalPrice()}</p>
      </div>
    </div>
  );
};


export default Cart;