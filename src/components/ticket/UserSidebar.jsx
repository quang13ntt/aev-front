import React from 'react';
import GiftCardPromoCard from '../giftcard/GiftCardPromoCard';
import styles from './UserSidebar.module.css';

const UserSidebar = ({ userName = "Yamada Tarou", onAddGiftCard }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.userSection}>
        <div className={styles.userName}>{userName}</div>
        <button className={styles.addGiftButton} onClick={onAddGiftCard}>
          Add Gift card
        </button>
      </div>

      <div className={styles.promoSection}>
        <GiftCardPromoCard 
          imageSrc="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
          title="Aeon Beta: Experience Cinematic Luxury"
          description="Welcome to the new era of entertainment at Aeon Beta! With our grand reopening, immerse yourself in crystal-clear imagery..."
        />
      </div>

      <div className={styles.locationTags}>
        <span className={styles.tag}>Ho Chi Minh</span>
        <span className={styles.tag}>Hai Phong</span>
      </div>
    </div>
  );
};

export default UserSidebar;
