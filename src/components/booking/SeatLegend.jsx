import seatStyles from './SeatStyles.module.css';
import styles from './SeatLegend.module.css';

const legendItems = [
  { label: 'Regular', type: 'regular' },
  { label: 'VIP', type: 'vip' },
  { label: 'Sweet Box', type: 'sweetbox' },
  { label: 'Supreme', type: 'supreme' },
  { label: 'Wheelchair', type: 'wheelchair', icon: '♿' },
];

const SeatLegend = () => {
  return (
    <div className={styles.legend}>
      {legendItems.map((item) => (
        <div key={item.type} className={styles.legendItem}>
          <div className={`${seatStyles.legendColor} ${seatStyles[item.type]}`}>
            {item.icon}
          </div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SeatLegend;
