import React, { useState } from 'react';
import TicketHeader from '../components/ticket/TicketHeader';
import TabButton from '../components/ticket/TabButton';
import MovieShowtimeCard from '../components/ticket/MovieShowtimeCard';
import UserSidebar from '../components/ticket/UserSidebar';
import BottomNav from '../components/ticket/BottomNav';
import styles from './TicketPurchasePage.module.css';

const TicketPurchasePage = () => {
  const [activeTab, setActiveTab] = useState('tickets');

  const movies = [
    {
      id: 1,
      title: '28 Year later',
      format: '2D',
      ageRating: 'T13',
      showtimes: [
        { time: '15:45 - 17:45', theater: 'Rạp 1', seats: '39/120' },
        { time: '18:00 - 20:00', theater: 'Rạp 1', seats: '39/120' },
        { time: '20:30 - 22:30', theater: 'Rạp 1', seats: '39/120' }
      ]
    },
    {
      id: 2,
      title: '28 Year later',
      format: '2D',
      ageRating: 'T13',
      showtimes: [
        { time: '11:00 - 13:00', theater: 'Rạp 2', seats: '39/120' }
      ]
    },
    {
      id: 3,
      title: 'ELITO',
      format: '2D',
      ageRating: 'P',
      showtimes: [
        { time: '11:00 - 17:00', theater: 'Rạp 2', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 3', seats: '39/120' }
      ]
    },
    {
      id: 4,
      title: 'How emon t..',
      format: '2D',
      ageRating: 'P',
      showtimes: [
        { time: '15:45 - 17:45', theater: 'Rạp 3', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 3', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 3', seats: '39/120' }
      ]
    },
    {
      id: 5,
      title: 'Thám tử Kiên',
      format: '2D',
      ageRating: 'T16',
      showtimes: [
        { time: '15:45 - 17:45', theater: 'Rạp 1', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 2', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 2', seats: '39/120' }
      ]
    }
  ];

  const handleShowtimeClick = (movie, showtime) => {
    console.log('Selected:', movie.title, showtime.time);
  };

  const handleAddGiftCard = () => {
    console.log('Add gift card clicked');
  };

  return (
    <div className={styles.container}>
      <TicketHeader title="Suất chiếu hôm nay" />
      
      <div className={styles.mainLayout}>
        <div className={styles.contentArea}>
          {/* Tab Buttons */}
          <div className={styles.tabBar}>
            <TabButton 
              active={activeTab === 'tickets'} 
              onClick={() => setActiveTab('tickets')}
              variant="green"
              subtitle="16 Jul 2025"
            >
              Mua vé
            </TabButton>
            <TabButton 
              active={activeTab === 'fb'} 
              onClick={() => setActiveTab('fb')}
              variant="beige"
            >
              F&B/Quà lưu niệm
            </TabButton>
          </div>

          {/* Content Tabs */}
          <div className={styles.contentTabs}>
            <button 
              className={`${styles.contentTab} ${styles.active}`}
            >
              Phim
            </button>
            <button 
              className={styles.contentTab}
            >
              Suất chiếu
            </button>
          </div>

          {/* Movie List */}
          <div className={styles.movieList}>
            {movies.map(movie => (
              <MovieShowtimeCard 
                key={movie.id}
                movie={movie}
                onShowtimeClick={handleShowtimeClick}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <UserSidebar 
          userName="Yamada Tarou"
          onAddGiftCard={handleAddGiftCard}
        />
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeItem="home" />
    </div>
  );
};

export default TicketPurchasePage;
