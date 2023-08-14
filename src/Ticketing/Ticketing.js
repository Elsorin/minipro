import { useState } from 'react';
import './Ticketing.css';
import React from 'react';

import Navi from '../NaviBar/Navi';



const Ticketing = () => {

  // const rows = 3;
  // const numberOfSeats = 10; //좌석 수

  // const seats = Array.from({ length: rows * numberOfSeats }, (_, index) => index + 1);
  const seatnum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const toggleSeatSelection  = (seatNum) => {
    if(selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNum));
    }else{
      setSelectedSeats([...selectedSeats, seatNum]);
    }
  };



  return (
    <>
      <div className='ticketing'>
          <Navi />
        <div className='wrapper'>
          <div className='screen'><h2>screen</h2></div>
          <div className='seatMain'>
            <div className='seat-grid' >
              {seatnum.map((seatNum) => (
                <button className={`seat ${selectedSeats.includes(seatNum) ? 'selected' : ''}`} 
                onClick={() => toggleSeatSelection (seatNum)}
                key={seatNum}>
                 {seatNum}
                 </button>                
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticketing;