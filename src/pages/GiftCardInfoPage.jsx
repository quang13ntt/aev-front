import React, { useState } from 'react';
import GiftCardHeader from '../components/giftcard/GiftCardHeader';
import GiftCardInfoRow from '../components/giftcard/GiftCardInfoRow';
import GiftCardPromoCard from '../components/giftcard/GiftCardPromoCard';
import ActionButton from '../components/giftcard/ActionButton';
import styles from './GiftCardInfoPage.module.css';

const GiftCardInfoPage = () => {
  const [cardData, setCardData] = useState({
    memberID: '12345',
    virtualCardID: '686899',
    virtualIssueDate: '22/12/2025',
    virtualStatus: 'Active',
    physicalID: '6677',
    physicalIssueDate: '22/12/2025',
    physicalStatus: '22/12/2025',
    balance: '0 VND',
    pin: '*******',
    expirationDate: '22/12/2027'
  });

  const handleBlockVirtual = () => {
    console.log('Block virtual card');
  };

  const handleBlockPhysical = () => {
    console.log('Block physical card');
  };

  const handleTopUp = () => {
    console.log('Top up card');
  };

  const handleChangePIN = () => {
    console.log('Change PIN');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  const handleNext = () => {
    console.log('Next');
  };

  return (
    <div className={styles.container}>
      <GiftCardHeader title="Gift Card Information" />
      
      <div className={styles.content}>
        <div className={styles.mainGrid}>
          {/* Left column - Card information */}
          <div className={styles.infoSection}>
            <GiftCardInfoRow 
              label="AEON BETA member ID:" 
              value={cardData.memberID} 
            />
            
            <GiftCardInfoRow 
              label="Virtual card ID:" 
              value={cardData.virtualCardID} 
            />
            
            <GiftCardInfoRow 
              label="Issue date:" 
              value={cardData.virtualIssueDate}
              indent 
            />
            
            <GiftCardInfoRow 
              label="Status:" 
              value={cardData.virtualStatus}
              indent
              action={
                <ActionButton variant="yellow" onClick={handleBlockVirtual}>
                  Block
                </ActionButton>
              }
            />
            
            <GiftCardInfoRow 
              label="Physical ID:" 
              value={cardData.physicalID} 
            />
            
            <GiftCardInfoRow 
              label="Issue date:" 
              value={cardData.physicalIssueDate}
              indent 
            />
            
            <GiftCardInfoRow 
              label="Status:" 
              value={cardData.physicalStatus}
              indent
              action={
                <ActionButton variant="gray" onClick={handleBlockPhysical}>
                  Block
                </ActionButton>
              }
            />
            
            <GiftCardInfoRow 
              label="Card balance:" 
              value={cardData.balance}
              action={
                <ActionButton variant="yellow" onClick={handleTopUp}>
                  TOP UP
                </ActionButton>
              }
            />
            
            <GiftCardInfoRow 
              label="PIN:" 
              value={cardData.pin}
              action={
                <ActionButton variant="yellow" onClick={handleChangePIN}>
                  Change PIN
                </ActionButton>
              }
            />
            
            <GiftCardInfoRow 
              label="Expiration date:" 
              value={cardData.expirationDate} 
            />
          </div>

          {/* Right column - Promo card */}
          <div className={styles.promoSection}>
            <GiftCardPromoCard 
              imageSrc="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
              title="Aeon Beta: Experience Cinematic Luxury"
              description="Welcome to the new era of entertainment at Aeon Beta! With our grand reopening, immerse yourself in crystal-clear imagery..."
            />
          </div>
        </div>

        {/* Bottom buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCardInfoPage;
