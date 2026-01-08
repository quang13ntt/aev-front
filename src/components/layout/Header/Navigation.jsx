import styles from './Navigation.module.css';

const Navigation = () => {
  const navItems = ['Movies', 'Theatres', 'Sections', 'Pick-up now'];

  return (
    <nav>
      <ul className={styles.navMenu}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
