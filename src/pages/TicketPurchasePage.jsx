import React, { useState } from 'react';
import styles from './TicketPurchasePage.module.css';

const TicketPurchasePage = () => {
  const [activeTab, setActiveTab] = useState('phim');
  const [selectedDate, setSelectedDate] = useState(0);

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
      title: 'ELITO',
      format: '2D',
      ageRating: 'P',
      showtimes: [
        { time: '11:00 - 13:00', theater: 'Rạp 2', seats: '39/120' }
      ]
    },
    {
      id: 3,
      title: 'Doraemon t..',
      format: '2D',
      ageRating: 'P',
      showtimes: [
        { time: '15:45 - 17:45', theater: 'Rạp 3', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 3', seats: '39/120' }
      ]
    },
    {
      id: 4,
      title: 'How to train..',
      format: '2D',
      ageRating: 'P',
      showtimes: [
        { time: '15:45 - 17:45', theater: 'Rạp 5', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 5', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 5', seats: '39/120' }
      ]
    },
    {
      id: 5,
      title: 'Thám tử Kiên',
      format: '2D',
      ageRating: 'T16',
      showtimes: [
        { time: '15:45 - 17:45', theater: 'Rạp 1', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 1', seats: '39/120' },
        { time: '15:45 - 17:45', theater: 'Rạp 1', seats: '39/120' }
      ]
    }
  ];

  const dates = [
    { month: 'JUL', day: '16', weekday: 'Tue' },
    { month: 'JUL', day: '17', weekday: 'Wed' },
    { month: 'JUL', day: '18', weekday: 'Thu' },
    { month: 'JUL', day: '19', weekday: 'Fri' },
    { month: 'JUL', day: '20', weekday: 'Sat' }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.ticketButton}>
            <span>Mua vé</span>
            <span className={styles.date}>16 Jul 2025</span>
          </button>
          <button className={styles.fbButton}>F&B/Quà lưu niệm</button>
        </div>
        
        <div className={styles.headerRight}>
          <div className={styles.balance}>
            <span>Tiền mặt: 1.000.000 đ</span>
          </div>
          <div className={styles.credit}>
            <span>Credit/debit: 0 đ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          {/* Tabs */}
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'phim' ? styles.active : ''}`}
              onClick={() => setActiveTab('phim')}
            >
              Phim
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'suatchieu' ? styles.active : ''}`}
              onClick={() => setActiveTab('suatchieu')}
            >
              Suất chiếu
            </button>
          </div>

          {/* Movie List */}
          <div className={styles.movieList}>
            {movies.map(movie => (
              <div key={movie.id} className={styles.movieRow}>
                <div className={styles.movieInfo}>
                  <div className={styles.moviePoster}></div>
                  <div className={styles.movieDetails}>
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                    <div className={styles.movieMeta}>
                      <span className={styles.format}>{movie.format}</span>
                      <span className={styles.ageRating}>{movie.ageRating}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.showtimes}>
                  {movie.showtimes.map((showtime, idx) => (
                    <button key={idx} className={styles.showtimeButton}>
                      <div className={styles.time}>{showtime.time}</div>
                      <div className={styles.theaterInfo}>
                        <span>{showtime.theater}</span>
                        <span className={styles.seats}>{showtime.seats}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.userName}>Yamada Tarou</span>
            <button className={styles.addGiftCard}>Add Gift card</button>
          </div>
          <div className={styles.sidebarContent}>
            {/* Empty space for future content */}
          </div>
        </aside>
      </div>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <button className={styles.navButton}>
          <div className={styles.navIcon}></div>
          <span>Trang chủ</span>
        </button>
        <button className={styles.navButton}>
          <div className={styles.navIcon}></div>
          <span>Túy chỉnh</span>
        </button>
        <button className={styles.navButton}>
          <div className={styles.navIcon}></div>
          <span>Đăng xuất</span>
        </button>
      </nav>
    </div>
  );
};

export default TicketPurchasePage;
