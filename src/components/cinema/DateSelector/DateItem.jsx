import styles from './DateItem.module.css';

const DateItem = ({ date, isActive, onClick }) => {
  return (
    <div 
      className={`${styles.dateItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div className={styles.dateDay}>{date.day}</div>
      <div className={styles.dateNumber}>{date.number}</div>
      <div className={styles.dateMonth}>{date.month}</div>
    </div>
  );
};

export default DateItem;
