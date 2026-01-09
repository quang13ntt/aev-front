import seatStyles from './SeatStyles.module.css';
import styles from './SeatGrid.module.css';

const SeatGrid = ({ seatLayout, selectedSeats, onToggleSeat }) => {
  const getSeatId = (rowIndex, colIndex) => `${rowIndex + 1}-${colIndex + 1}`;

  // Icon only for wheelchair seats
  const getSeatIcon = (type) => {
    if (type === 'wheelchair') {
      return '♿';
    }
    return null;
  };

  // Handle seat selection for merged sweet boxes
  const handleSeatClick = (rowIndex, colIndex, cell) => {
    const seatType = cell.type;
    const mergeWith = cell.mergeWith;
    
    // If it's a merged sweet box, select both seats
    if (seatType === 'sweetbox' && mergeWith === 'next') {
      const seatId1 = getSeatId(rowIndex, colIndex);
      const seatId2 = getSeatId(rowIndex, colIndex + 1);
      onToggleSeat(`${seatId1}_${seatId2}`, seatType, true); // Pass flag for merged seats
    } else if (seatType === 'sweetbox' && !mergeWith) {
      // Single sweet box seat
      const seatId = getSeatId(rowIndex, colIndex);
      onToggleSeat(seatId, seatType);
    } else {
      const seatId = getSeatId(rowIndex, colIndex);
      onToggleSeat(seatId, seatType);
    }
  };

  return (
    <div className={styles.gridWrapper}>
      {/* Screen row (row 0) spanning columns 2-12 */}
      <div className={styles.screenRow}>
        <div className={styles.screenContainer}>
          <div className={styles.screenLabel}>Screen</div>
          <div className={styles.screenDivider}></div>
        </div>
      </div>

      <div className={styles.seatingArea}>
        <div className={styles.seatsGrid}>
          <div className={styles.seatsContainer}>
            {seatLayout.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.seatRow}>
                <div className={styles.rowLabel}>{rowIndex + 1}</div>
                <div className={styles.rowSeats}>
                  {row.map((cell, colIndex) => {
                    if (cell === null) {
                      return <div key={colIndex} className={seatStyles.emptySeat}></div>;
                    }
                    
                    const seatType = cell.type;
                    const isBooked = cell.booked || false;
                    const mergeWith = cell.mergeWith;
                    const seatId = getSeatId(rowIndex, colIndex);
                    
                    // Check if this seat or its merged pair is selected
                    let isSelected = selectedSeats.has(seatId);
                    if (seatType === 'sweetbox' && mergeWith === 'next') {
                      const seatId2 = getSeatId(rowIndex, colIndex + 1);
                      const mergedId = `${seatId}_${seatId2}`;
                      isSelected = selectedSeats.has(mergedId);
                    }
                    
                    // Skip rendering the second cell of merged sweetbox
                    if (mergeWith === 'prev') {
                      return null;
                    }
                    
                    // Determine if this is a merged sweetbox (spans 2 cells)
                    const isMergedSweetbox = seatType === 'sweetbox' && mergeWith === 'next';
                    
                    return (
                      <button
                        key={colIndex}
                        className={`
                          ${seatStyles.seat} 
                          ${seatStyles[seatType]} 
                          ${isBooked ? seatStyles.booked : ''} 
                          ${isSelected ? seatStyles.selected : ''}
                          ${isMergedSweetbox ? seatStyles.mergedSeat : ''}
                        `}
                        style={isMergedSweetbox ? { gridColumn: `span 2` } : {}}
                        onClick={() => !isBooked && handleSeatClick(rowIndex, colIndex, cell)}
                        disabled={isBooked}
                      >
                        <span className={seatStyles.seatIcon}>
                          {getSeatIcon(seatType)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.columnLabels}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(num => (
              <div key={num} className={styles.columnLabel}>{num}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatGrid;
