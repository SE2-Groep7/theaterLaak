import React, { useState,useEffect } from 'react';
const Cart = () => {
  const [storedSeats, setStoredSeats] = useState(JSON.parse(localStorage.getItem("selectedSeats")) || []);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(storedSeats));
  }, [storedSeats]);

  // rest of the code is the same as before

  if(storedSeats.length === 0) return <p>No seats selected</p>;
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
  };

  return (
    <div>
      <h2>Cart</h2>
      {storedSeats.map((show, index) => (
        <div key={index}>
          <p>Date: {show.date}</p>
          <p>Zaal: {show.zaalId}</p>
          <ul>
            {show.seats.map((seat) => (
              <li key={seat}>
                Seat: {seat}
                <button onClick={() => removeSeat(show.date, show.zaalId, seat)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};


export default Cart;