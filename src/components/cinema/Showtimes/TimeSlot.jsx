import styles from './TimeSlot.module.css';
import Badge from '../../common/Badge';
import Button from '../../common/Button';

const TimeSlot = ({ session, onBook }) => {
  const { startTime, endTime, screen, seatsLeft, isSoldOut, format } = session;

  return (
    <div className={styles.timeSlot}>
      <div className={`${styles.timeButton} ${isSoldOut ? styles.soldOut : ''}`}>
        <div className={styles.timeInfo}>
          <div className={styles.startTime}>{startTime}</div>
          <div className={styles.endTime}>{endTime}</div>
        </div>
        {!isSoldOut && (
          <Button variant="book" onClick={onBook}>
            BOOK
          </Button>
        )}
      </div>
      <div className={styles.formatInfo}>
        <Badge variant="format">{format || screen}</Badge>
        <span className={styles.screenInfo}>
          {isSoldOut ? 'Sold out' : `${seatsLeft} seats left`}
        </span>
      </div>
    </div>
  );
};

export default TimeSlot;
