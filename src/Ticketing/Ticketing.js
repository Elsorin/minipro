import { useEffect, useState } from 'react';
import './Ticketing.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Navi from '../NaviBar/Navi';


const Ticketing = () => {

  const seatnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => { //시간을 나타내기 위함
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSeatSelection = (seatNum) => {
    if (selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNum));
    } else {
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
                  onClick={() => toggleSeatSelection(seatNum)}
                  key={seatNum}>
                  {seatNum}
                </button>
              ))}

            </div>
          </div>
          <div className='ticketingInfo'>
            <div className='info'>
              <p>선택된 좌석: {selectedSeats.join(', ')}</p>
              <p>예매 시간: {currentDate.toLocaleString()}</p>
            </div>
            <Link to='/food' className='ticketingBtn'>
              예매하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticketing;