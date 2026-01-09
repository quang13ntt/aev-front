import React from 'react';
import styles from './TimeSlotButton.module.css';

const TimeSlotButton = ({ time, theater, seats, selected, onClick }) => {
  return (
    <button
      className={`${styles.button} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <div className={styles.time}>{time}</div>
      <div className={styles.info}>
        <span className={styles.theater}>{theater}</span>
        <span className={styles.seats}>{seats}</span>
      </div>
    </button>
  );
};

export default TimeSlotButton;
