import { useState } from 'react';
import styles from './CinemaPage.module.css';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import TheaterBanner from '../components/cinema/TheaterBanner/TheaterBanner';
import DateSelector from '../components/cinema/DateSelector/DateSelector';
import MovieCard from '../components/cinema/MovieCard/MovieCard';
import Tabs from '../components/common/Tabs';
import ScrollButton from '../components/common/ScrollButton';
import { generateDates } from '../utils/dateHelpers';
import { mockMovies } from '../data/mockMovies';

const CinemaPage = () => {
  const [location, setLocation] = useState('Vincom Mega Mall Smart City');
  const [currentLang, setCurrentLang] = useState('EN');
  const [activeTheaterTab, setActiveTheaterTab] = useState(0);
  const [activeSectionTab, setActiveSectionTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const dates = generateDates();
  const theaterTabs = ['Sweetbox', 'Basic Hall', 'Screen', 'Standard'];
  const sectionTabs = ['Showing now', 'Coming soon'];

  const handleLocationChange = () => {
    console.log('Change location clicked');
  };

  const handleBooking = (sessionId) => {
    console.log('Booking session:', sessionId);
    alert(`Booking for session: ${sessionId}`);
  };

  const handleDetailsClick = (movieId) => {
    console.log('View details for movie:', movieId);
  };

  return (
    <div className={styles.cinemaPage}>
      <Header
        location={location}
        onLocationChange={handleLocationChange}
        currentLang={currentLang}
        onLangChange={setCurrentLang}
      />

      <div className={styles.container}>
        <h1 className={styles.cinemaTitle}>{location}</h1>

        <TheaterBanner
          imageUrl=""
          tabs={theaterTabs}
          activeTab={activeTheaterTab}
          onTabChange={setActiveTheaterTab}
        />

        <Tabs
          items={sectionTabs}
          activeIndex={activeSectionTab}
          onTabChange={setActiveSectionTab}
          variant="section"
        />

        <DateSelector
          dates={dates}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />

        <div className={styles.moviesContainer}>
          {mockMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onBooking={handleBooking}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
      </div>

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default CinemaPage;
