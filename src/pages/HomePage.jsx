import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>AEON BETA</h1>
          <p className={styles.tagline}>Your Premier Cinema Experience</p>
        </div>

        <div className={styles.buttonContainer}>
          <Link to="/cinema" className={styles.navButton}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonIcon}>🎬</span>
              <div className={styles.buttonText}>
                <h2>Cinema Showtimes</h2>
                <p>Browse movies and book tickets</p>
              </div>
            </div>
          </Link>

          <Link to="/booking" className={styles.navButton}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonIcon}>🎫</span>
              <div className={styles.buttonText}>
                <h2>Theater Booking</h2>
                <p>Select your seats</p>
              </div>
            </div>
          </Link>

          <Link to="/ticket-purchase" className={styles.navButton}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonIcon}>🛒</span>
              <div className={styles.buttonText}>
                <h2>Mua vé</h2>
                <p>Browse showtimes & buy tickets</p>
              </div>
            </div>
          </Link>

          <Link to="/gift-card" className={styles.navButton}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonIcon}>💳</span>
              <div className={styles.buttonText}>
                <h2>Gift Card</h2>
                <p>View & manage gift cards</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
