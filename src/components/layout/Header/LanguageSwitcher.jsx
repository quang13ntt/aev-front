import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = ({ currentLang, onLangChange }) => {
  const languages = ['VN', 'EN'];

  return (
    <div className={styles.langSwitcher}>
      {languages.map((lang) => (
        <span
          key={lang}
          className={`${styles.langOption} ${currentLang === lang ? styles.active : ''}`}
          onClick={() => onLangChange(lang)}
        >
          {lang}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
