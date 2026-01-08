import styles from './Badge.module.css';

const Badge = ({ children, variant = 'default', color }) => {
  const className = `${styles.badge} ${styles[variant]}`;
  const style = color ? { backgroundColor: color } : {};
  
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

export default Badge;
