import styles from './ShowtimeSection.module.css';
import ShowtimeHeader from './ShowtimeHeader';
import TimeSlotGrid from './TimeSlotGrid';

const ShowtimeSection = ({ 
  type, 
  language, 
  isAdvanceScreening, 
  sessions, 
  onBooking 
}) => {
  return (
    <div className={styles.showtimeSection}>
      <ShowtimeHeader 
        type={type}
        language={language}
        isAdvanceScreening={isAdvanceScreening}
      />
      <TimeSlotGrid 
        sessions={sessions}
        onBooking={onBooking}
      />
    </div>
  );
};

export default ShowtimeSection;
