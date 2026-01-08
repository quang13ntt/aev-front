import { useState } from 'react';
import styles from './TheaterBookingPage.module.css';
import { useNavigate } from 'react-router-dom';
import BookingHeader from '../components/booking/BookingHeader';
import SeatGrid from '../components/booking/SeatGrid';
import SeatLegend from '../components/booking/SeatLegend';
import SelectionFooter from '../components/booking/SelectionFooter';
import { seatLayout as defaultSeatLayout } from '../data/seatLayout';

const TheaterBookingPage = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  const toggleSeat = (seatId, seatType) => {
    if (seatType === 'occupied' || seatType === 'unavailable') return;
    
    setSelectedSeats(prev => {
      const newSet = new Set(prev);
      if (newSet.has(seatId)) {
        newSet.delete(seatId);
      } else {
        newSet.add(seatId);
      }
      return newSet;
    });
  };

  const handleReserve = () => {
    if (selectedSeats.size > 0) {
      alert(`Reserved seats: ${Array.from(selectedSeats).sort().join(', ')}`);
    }
  };

  return (
    <div className={styles.page}>
      <BookingHeader onBack={() => navigate('/cinema')} />

      {/* Main Content */}
      <div className={styles.container}>
        <h1 className={styles.title}>Which seat do you prefer?</h1>
        <SeatGrid 
          seatLayout={defaultSeatLayout}
          selectedSeats={selectedSeats}
          onToggleSeat={toggleSeat}
        />

        <SeatLegend />
      </div>

      <SelectionFooter 
        selectedSeats={selectedSeats}
        onReserve={handleReserve}
      />
    </div>
  );
};

export default TheaterBookingPage;
