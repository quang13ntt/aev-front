import React from 'react';
import styles from './MovieShowtimeCard.module.css';

const MovieShowtimeCard = ({ movie, onShowtimeClick }) => {
  const getBadgeClass = (rating) => {
    const lowerRating = rating?.toLowerCase();
    if (lowerRating === 't13') return styles.t13;
    if (lowerRating === 't16') return styles.t16;
    if (lowerRating === 'p') return styles.p;
    return styles.default;
  };

  return (
    <div className={styles.card}>
      <div className={styles.movieInfo}>
        <div className={styles.poster}>
          {movie.posterUrl ? (
            <img src={movie.posterUrl} alt={movie.title} />
          ) : null}
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{movie.title}</h3>
          <div className={styles.badges}>
            <span className={styles.formatBadge}>{movie.format}</span>
            {movie.ageRating && (
              <span className={`${styles.ratingBadge} ${getBadgeClass(movie.ageRating)}`}>
                {movie.ageRating}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.showtimes}>
        {movie.showtimes.map((showtime, idx) => (
          <button
            key={idx}
            className={styles.showtimeButton}
            onClick={() => onShowtimeClick && onShowtimeClick(movie, showtime)}
          >
            <div className={styles.time}>{showtime.time}</div>
            <div className={styles.theaterInfo}>
              <div className={styles.theater}>{showtime.theater}</div>
              <div className={styles.seats}>{showtime.seats}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieShowtimeCard;
