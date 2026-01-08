import { useRef } from 'react';
import styles from './DateSelector.module.css';
import DateItem from './DateItem';

const DateSelector = ({ dates, selectedDate, onDateSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.dateSelector}>
      <div 
        className={styles.dateNav} 
        onClick={() => scroll('left')}
      >
        ◀
      </div>
      <div className={styles.datesScroll} ref={scrollRef}>
        {dates.map((date, index) => (
          <DateItem
            key={index}
            date={date}
            isActive={selectedDate === date.value}
            onClick={() => onDateSelect(date.value)}
          />
        ))}
      </div>
      <div 
        className={styles.dateNav} 
        onClick={() => scroll('right')}
      >
        ▶
      </div>
    </div>
  );
};

export default DateSelector;
