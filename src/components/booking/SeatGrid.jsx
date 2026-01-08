import seatStyles from './SeatStyles.module.css';
import styles from './SeatGrid.module.css';

const SeatGrid = ({ seatLayout, selectedSeats, onToggleSeat }) => {
  const getSeatId = (rowIndex, colIndex) => `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.screenLabel}>Screen</div>
      <div className={styles.screenDivider}></div>

      <div className={styles.seatingArea}>
        <div className={styles.rowLabels}>
          {[1,2,3,4,5,6,7,8,9,10].map(num => (
            <div key={num} className={styles.rowLabel}>{num}</div>
          ))}
        </div>

        <div className={styles.seatsGrid}>
          <div className={styles.columnLabels}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(num => (
              <div key={num} className={styles.columnLabel}>{num}</div>
            ))}
          </div>

          <div className={styles.seatsContainer}>
            {seatLayout.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.seatRow}>
                {row.map((seatType, colIndex) => {
                  if (seatType === null) {
                    return <div key={colIndex} className={seatStyles.emptySeat}></div>;
                  }
                  const seatId = getSeatId(rowIndex, colIndex);
                  const isSelected = selectedSeats.has(seatId);
                  return (
                    <button
                      key={colIndex}
                      className={`${seatStyles.seat} ${seatStyles[seatType]} ${isSelected ? seatStyles.selected : ''}`}
                      onClick={() => onToggleSeat(seatId, seatType)}
                      disabled={seatType === 'occupied' || seatType === 'unavailable'}
                    >
                      {seatType === 'wheelchair' && '♿'}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatGrid;
