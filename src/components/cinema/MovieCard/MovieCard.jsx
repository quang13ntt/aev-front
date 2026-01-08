import styles from './MovieCard.module.css';
import MovieHeader from './MovieHeader';
import ShowtimeSection from '../Showtimes/ShowtimeSection';

const MovieCard = ({ movie, onBooking, onDetailsClick }) => {
  return (
    <div className={styles.movieCard}>
      <MovieHeader 
        movie={movie}
        onDetailsClick={() => onDetailsClick(movie.id)}
      />
      
      {movie.showtimes.map((showtime, index) => (
        <ShowtimeSection
          key={index}
          type={showtime.type}
          language={showtime.language}
          isAdvanceScreening={showtime.isAdvanceScreening}
          sessions={showtime.sessions}
          onBooking={onBooking}
        />
      ))}
    </div>
  );
};

export default MovieCard;
