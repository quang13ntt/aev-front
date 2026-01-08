import styles from './Header.module.css';
import LocationSelector from './LocationSelector';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ location, onLocationChange, currentLang, onLangChange }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerLeft}>
          <LocationSelector 
            location={location} 
            onChange={onLocationChange} 
          />
          <div className={styles.logo}>AEON BETA</div>
          <Navigation />
        </div>
        <div className={styles.headerRight}>
          <a href="#" className={styles.headerAction}>
            <span>📱</span>
            <span>Scan for This Film</span>
          </a>
          <LanguageSwitcher 
            currentLang={currentLang}
            onLangChange={onLangChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
