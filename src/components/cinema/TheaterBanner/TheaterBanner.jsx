import { useState } from 'react';
import styles from './TheaterBanner.module.css';
import Tabs from '../../common/Tabs';

const TheaterBanner = ({ imageUrl, tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.theaterBanner}>
      <div 
        className={styles.theaterImage}
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
      />
      <div className={styles.theaterTabs}>
        <Tabs 
          items={tabs}
          activeIndex={activeTab}
          onTabChange={onTabChange}
          variant="theater"
        />
      </div>
    </div>
  );
};

export default TheaterBanner;
