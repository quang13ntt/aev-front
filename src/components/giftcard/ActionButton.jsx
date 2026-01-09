import React from 'react';
import styles from './ActionButton.module.css';

const ActionButton = ({ children, onClick, variant = 'default', disabled = false }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ActionButton;
