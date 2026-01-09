import React from 'react';
import styles from './MovieShowtimeCard.module.css';

const MovieShowtimeCard = ({ movie, onSelectShowtime }) => {
  return (
    <div className={styles.card}>
      <div className={styles.movieInfo}>
        <div className={styles.poster}>
          {/* Placeholder for movie poster */}
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{movie.title}</h3>
          <div className={styles.meta}>
            <span className={styles.format}>{movie.format}</span>
            {movie.ageRating && (
              <span className={styles.ageRating}>{movie.ageRating}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.showtimes}>
        {movie.showtimes.map((showtime, idx) => (
          <button
            key={idx}
            className={styles.showtimeBtn}
            onClick={() => onSelectShowtime && onSelectShowtime(movie, showtime)}
          >
            <div className={styles.time}>{showtime.time}</div>
            <div className={styles.theaterInfo}>
              <span className={styles.theater}>{showtime.theater}</span>
              <span className={styles.seats}>{showtime.seats}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieShowtimeCard;
