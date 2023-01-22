import React, { useState , Fragment } from "react";
import "./style.css";
import { Dialog , Transition } from '@headlessui/react'
// The TheaterHall component takes in a prop called "seats" which is an array of seat objects
const TheaterHall = ({ seats,zaalId,showName,datum,showId }) => {
  // Declare the selectedSeats state variable with the useState hook
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  // Create an empty object called "rows" to organize the seats into rows
  const rows = {};  // Create an empty object called "organizedSeats" to organize the seats into rows and columns
  const organizedSeats = {};
  const addSelected = () => {
    let seats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    let existingSeat = seats.find(seat => seat.date === datum && seat.zaalId === zaalId);
    console.log(seats);
    console.log(existingSeat);
    let duplicateFound = false;
    if (existingSeat) {
        selectedSeats.forEach(seat => {
            if (!existingSeat.seats.find(s => s.id === seat.id)) {
                existingSeat.seats.push(seat);
            } else {
                console.log(seat.id + " duplicate, ignored");
            }
        });
        const index = seats.indexOf(existingSeat);
        seats.splice(index, 1, existingSeat);
    } else {
        seats.push({
            date: datum,
            zaalId: zaalId,
            showName: showName,
            showId: showId,
            seats: selectedSeats
        });
    }
    localStorage.setItem("selectedSeats", JSON.stringify(seats));
    setSelectedSeats([]);
    if (duplicateFound) {
        alert("Seat already selected");
    } else {
      openModal();
        
    }
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
    console.log(seat);
    if (selectedSeatsIds.includes(seat.id)) {
      setSelectedSeatsIds(selectedSeatsIds.filter((s) => s !== seat.id));
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeatsIds([...selectedSeatsIds, seat.id]);
      setSelectedSeats([...selectedSeats, seat]);
      console.log(selectedSeats);
    }
  };

  // create helper function for returning seat's class
  const getSeatClass = (seat) => {
    // case when the seat is occupied
    if (seat.status === "occupied") return "seatOccupied";
    //case when the seat is selected
    if (selectedSeatsIds.includes(seat.id)) return "seatSelected";
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
       <>
   

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Stoelen toegevoegd
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Geselecteerde stoelen zijn toegevoegd aan de winkelmand. U kunt nu verder winkelen of afrekenen.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Verder winkelen
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=> window.location.href = "cart"}
                    >
                     Afrekenen
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
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
      <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={addSelected}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
           Add selected seats
        </button>
      </div>
    </div>
  );

  // Return the JSX returned by the renderSeats function
  return renderSeats();
};

// Export the TheaterHall component
export default TheaterHall;
