import styles from './ShowtimeHeader.module.css';
import Badge from '../../common/Badge';

const ShowtimeHeader = ({ type, language, isAdvanceScreening }) => {
  return (
    <div className={styles.showtimeHeader}>
      <Badge variant="screenType">{type}</Badge>
      {isAdvanceScreening && (
        <Badge variant="special">Advance screening</Badge>
      )}
      {language && (
        <span className={styles.screenLabel}>{language}</span>
      )}
    </div>
  );
};

export default ShowtimeHeader;
