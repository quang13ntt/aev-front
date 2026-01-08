import styles from './Tabs.module.css';

const Tabs = ({ items, activeIndex, onTabChange, variant = 'default' }) => {
  return (
    <div className={`${styles.tabs} ${styles[variant]}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.tab} ${activeIndex === index ? styles.active : ''}`}
          onClick={() => onTabChange(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
