import React from 'react';
import styles from './GiftCardPromoCard.module.css';

const GiftCardPromoCard = ({ 
  imageSrc = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
  title = "Aeon Beta: Experience Cinematic Luxury",
  description = "Welcome to the new era of entertainment at Aeon Beta! With our grand reopening, immerse yourself in crystal-clear imagery..."
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default GiftCardPromoCard;
