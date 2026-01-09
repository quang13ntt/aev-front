import React from 'react';
import styles from './BottomNav.module.css';

const BottomNav = ({ activeItem = 'home' }) => {
  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: '🏠' },
    { id: 'customize', label: 'Túy chỉnh', icon: '👤' },
    { id: 'logout', label: 'Đăng xuất', icon: '📢' }
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map(item => (
        <button 
          key={item.id}
          className={`${styles.navButton} ${activeItem === item.id ? styles.active : ''}`}
        >
          <div className={styles.iconCircle}>
            <span className={styles.icon}>{item.icon}</span>
          </div>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
