import React from 'react';
import styles from './TicketHeader.module.css';

const TicketHeader = ({ title = "Suất chiếu hôm nay" }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default TicketHeader;
