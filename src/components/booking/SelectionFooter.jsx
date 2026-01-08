import styles from './SelectionFooter.module.css';

const SelectionFooter = ({ selectedSeats, onReserve }) => {
  const hasSelection = selectedSeats.size > 0;
  const seatsText = hasSelection
    ? Array.from(selectedSeats).sort().join(', ')
    : 'No seats selected';

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.selectionInfo}>
          <div className={styles.selectionLabel}>Your selection</div>
          <div className={styles.selectedSeats}>{seatsText}</div>
        </div>
        <button 
          className={styles.reserveButton}
          onClick={onReserve}
          disabled={!hasSelection}
        >
          RESERVE MY SEAT
        </button>
      </div>
    </div>
  );
};

export default SelectionFooter;
