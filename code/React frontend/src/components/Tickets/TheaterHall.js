import React, { useState } from "react";
import "./style.css";

// The TheaterHall component takes in a prop called "seats" which is an array of seat objects
const TheaterHall = ({ seats,zaalId,showName,datum }) => {
  // Declare the selectedSeats state variable with the useState hook
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Create an empty object called "rows" to organize the seats into rows
  const rows = {};  // Create an empty object called "organizedSeats" to organize the seats into rows and columns
  const organizedSeats = {};
  const addSelected = () => {
    let seats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    let existingSeat = seats.find(seat => seat.date === datum && seat.zaalId === zaalId);
    if (existingSeat) {
      selectedSeats.forEach(seat => {
        if (!existingSeat.seats.includes(seat)) {
          existingSeat.seats.push(seat);
        }
      });
    } else {
      seats.push({
        date: datum,
        zaalId: zaalId,
        showName: showName,
        seats: selectedSeats
      });
    }
    document.cookie = `selectedSeats=${ JSON.stringify(seats)}`;

    localStorage.setItem("selectedSeats", JSON.stringify(seats));
    setSelectedSeats([]);
  }

  // Iterate through each seat in the "seats" prop and organize them into their respective rows and columns
  seats.forEach((seat) => {
    if (!organizedSeats[seat.row]) {
      organizedSeats[seat.row] = {};
    }
    if (!organizedSeats[seat.row][seat.column]) {
      organizedSeats[seat.row][seat.column] = seat;
    }
  });

  // This function toggle the state of the seatId
  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  // create helper function for returning seat's class
  const getSeatClass = (seat) => {
    // case when the seat is occupied
    if (seat.status === "occupied") return "seatOccupied";
    //case when the seat is selected
    if (selectedSeats.includes(seat.id)) return "seatSelected";
    // case when the seat is unoccupied
    return "seat";
  };

  // create helper function for returning seat's click handler function
  const getSeatClickHandler = (seat) => {
    // return an empty function for occupied seats
    if (seat.status === "occupied") return () => {};
    // return the handleSeatSelect function for unoccupied seats
    return () => handleSeatSelect(seat);
  };

  // Define a function to render the seats
  const renderSeats = () => (
    <div className="theaterHall">
      {Object.values(organizedSeats).map((row, index) => (
        <div className="row" key={index}>
          {Object.values(row).map((seat) => (
            <button
              key={seat.id}
              disabled={seat.status === "occupied"}
              alt={`Seat id: ${seat.id}, row: ${seat.row}, column: ${
                seat.column
              }, status: ${
                selectedSeats.includes(seat.id) ? "selected" : seat.status
              }, rank: ${seat.rank}`}
              className={getSeatClass(seat)}
              onClick={getSeatClickHandler(seat)}
            ></button>
          ))}
        </div>
      ))}
      <button class="AddSelected" onClick={addSelected}>Add selected</button>
    </div>
  );

  // Return the JSX returned by the renderSeats function
  return renderSeats();
};

// Export the TheaterHall component
export default TheaterHall;
