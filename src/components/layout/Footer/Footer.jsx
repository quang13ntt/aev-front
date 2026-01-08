import styles from './Footer.module.css';

const Footer = () => {
  const footerLinks = [
    'FAQs',
    'Contact Us',
    'Ticket Policy',
    'Terms of Use',
    'Privacy Policy'
  ];

  const socialIcons = ['📷', 'f', '▶', '🔗'];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBgLogo}>AEON BETA</div>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          {footerLinks.map((link, index) => (
            <a key={index} href="#">{link}</a>
          ))}
        </div>
        <div className={styles.socialLinks}>
          {socialIcons.map((icon, index) => (
            <div key={index} className={styles.socialIcon}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
