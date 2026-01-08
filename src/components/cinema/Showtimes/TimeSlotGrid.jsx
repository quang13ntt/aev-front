import styles from './TimeSlotGrid.module.css';
import TimeSlot from './TimeSlot';

const TimeSlotGrid = ({ sessions, onBooking }) => {
  return (
    <div className={styles.timeSlots}>
      {sessions.map((session, index) => (
        <TimeSlot
          key={session.id || index}
          session={session}
          onBook={() => onBooking(session.id || index)}
        />
      ))}
    </div>
  );
};

export default TimeSlotGrid;
