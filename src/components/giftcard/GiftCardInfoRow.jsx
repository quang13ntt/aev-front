import React from 'react';
import styles from './GiftCardInfoRow.module.css';

const GiftCardInfoRow = ({ label, value, action, indent = false }) => {
  return (
    <div className={styles.row}>
      <div className={`${styles.label} ${indent ? styles.indented : ''}`}>
        {label}
      </div>
      <div className={styles.value}>
        {value}
      </div>
      <div className={styles.action}>
        {action}
      </div>
    </div>
  );
};

export default GiftCardInfoRow;
