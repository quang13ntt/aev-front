import styles from './LocationSelector.module.css';

const LocationSelector = ({ location, onChange }) => {
  return (
    <div className={styles.locationSelector} onClick={onChange}>
      <span>{location}</span>
      <span>▼</span>
    </div>
  );
};

export default LocationSelector;
