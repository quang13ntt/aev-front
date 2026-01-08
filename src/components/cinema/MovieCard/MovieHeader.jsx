import styles from './MovieHeader.module.css';
import Badge from '../../common/Badge';

const MovieHeader = ({ movie, onDetailsClick }) => {
  return (
    <div className={styles.movieHeader}>
      <div 
        className={styles.moviePoster}
        style={{ backgroundImage: movie.poster ? `url(${movie.poster})` : 'none' }}
      />
      <div className={styles.movieInfo}>
        <div className={styles.movieTitleRow}>
          <Badge variant="rating">{movie.rating}</Badge>
          <h2 className={styles.movieTitle}>
            {movie.title}
            {movie.titleVi && ` ${movie.titleVi}`}
          </h2>
        </div>
        <div className={styles.movieMeta}>
          {movie.runtime && (
            <span>
              <strong>Run time:</strong> {movie.runtime}
            </span>
          )}
          {movie.releaseDate && (
            <span>
              <strong>Release date:</strong> {movie.releaseDate}
            </span>
          )}
        </div>
        <a 
          href="#" 
          className={styles.seeDetails}
          onClick={(e) => {
            e.preventDefault();
            onDetailsClick();
          }}
        >
          See details →
        </a>
      </div>
    </div>
  );
};

export default MovieHeader;
