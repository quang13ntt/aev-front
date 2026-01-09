import React from 'react';
import styles from './TabButton.module.css';

const TabButton = ({ children, active = false, onClick, variant = 'default', subtitle }) => {
  return (
    <button 
      className={`${styles.button} ${active ? styles.active : ''} ${styles[variant]}`}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </button>
  );
};

export default TabButton;
