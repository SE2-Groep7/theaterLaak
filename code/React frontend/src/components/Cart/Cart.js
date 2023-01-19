import React, { useState,useEffect } from 'react';
import "./Cart.css";
const Cart = () => {
  const [storedSeats, setStoredSeats] = useState(JSON.parse(localStorage.getItem("selectedSeats")) || []);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(storedSeats));
  }, [storedSeats]);

  // rest of the code is the same as before

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
              <li key={seat}>
                Seat: {seat}
                <button class="cta-button" onClick={() => removeSeat(show.date, show.zaalId, seat)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div class="btn-holder">
      <button class="cta-button" onClick={clearCart}>Clear Cart</button>
      <button className='cta-button'>Afrekenen</button>
      </div>
    </div>
  );
};


export default Cart;