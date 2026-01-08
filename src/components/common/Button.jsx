import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  fullWidth = false 
}) => {
  const className = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`;
  
  return (
    <button 
      className={className} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
