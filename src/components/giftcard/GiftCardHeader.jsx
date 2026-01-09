import React from 'react';
import styles from './GiftCardHeader.module.css';

const GiftCardHeader = ({ title = "Gift Card Information" }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default GiftCardHeader;
