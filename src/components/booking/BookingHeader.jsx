import styles from './BookingHeader.module.css';

const BookingHeader = ({ onBack }) => {
  return (
    <div className={styles.header}>
      <div className={styles.backButton} onClick={onBack}>←</div>
      <div className={styles.movieTitle}>
        Doraemon: Nobita's Earth Symphony
        <span className={styles.ratingBadge}>K</span>
      </div>
      <div className={styles.cinemaInfo}>Aeon Bđta Tan Binh Complex</div>
      <div className={styles.screenInfo}>Screen 1 <strong>IMAX</strong> &nbsp; Subtitle (Vietnamese)</div>
      <div className={styles.datetimeRow}>
        <div className={styles.datetime}>
          <span>📅 Tue, 18/6</span>
          <span>🕐 9:10 - 11:30</span>
        </div>
        <a className={styles.changeTime}>Change time</a>
      </div>
    </div>
  );
};

export default BookingHeader;
