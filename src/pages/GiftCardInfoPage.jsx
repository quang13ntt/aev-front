import React, { useState } from 'react';
import styles from './GiftCardInfoPage.module.css';

const GiftCardInfoPage = () => {
  const [cardData, setCardData] = useState({
    name: 'Yamada Tarou',
    memberID: '12345',
    virtualCardID: '686899',
    virtualIssueDate: '22/12/2025',
    virtualStatus: 'Active',
    physicalID: '6789',
    physicalIssueDate: '22/12/2025',
    physicalStatus: 'Active',
    balance: '0 VND',
    pin: '********',
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
      <div className={styles.content}>
        <h1 className={styles.title}>Gift Card information</h1>

        <div className={styles.formSection}>
          {/* Name */}
          <div className={styles.formRow}>
            <label className={styles.label}>Name:</label>
            <div className={styles.value}>{cardData.name}</div>
            <div className={styles.action}></div>
          </div>

          {/* AEON BETA member ID */}
          <div className={styles.formRow}>
            <label className={styles.label}>AEON BETA member ID:</label>
            <div className={styles.value}>{cardData.memberID}</div>
            <div className={styles.action}></div>
          </div>

          {/* Virtual card ID */}
          <div className={styles.formRow}>
            <label className={`${styles.label}`}>Virtual card ID:</label>
            <div className={styles.value}>{cardData.virtualCardID}</div>
            <div className={styles.action}></div>
          </div>

          {/* Virtual Issue date */}
          <div className={styles.formRow}>
            <label className={`${styles.label} ${styles.indented}`}>Issue date:</label>
            <div className={styles.value}>{cardData.virtualIssueDate}</div>
            <div className={styles.action}></div>
          </div>

          {/* Virtual Status */}
          <div className={styles.formRow}>
            <label className={`${styles.label} ${styles.indented}`}>Status:</label>
            <div className={styles.value}>{cardData.virtualStatus}</div>
            <div className={styles.action}>
              <button className={styles.actionButton} onClick={handleBlockVirtual}>
                Block
              </button>
            </div>
          </div>

          {/* Physical ID */}
          <div className={styles.formRow}>
            <label className={`${styles.label}`}>Physical ID:</label>
            <div className={styles.value}>{cardData.physicalID}</div>
            <div className={styles.action}></div>
          </div>

          {/* Physical Issue date */}
          <div className={styles.formRow}>
            <label className={`${styles.label} ${styles.indented}`}>Issue date:</label>
            <div className={styles.value}>{cardData.physicalIssueDate}</div>
            <div className={styles.action}></div>
          </div>

          {/* Physical Status */}
          <div className={styles.formRow}>
            <label className={`${styles.label} ${styles.indented}`}>Status:</label>
            <div className={styles.value}>{cardData.physicalStatus}</div>
            <div className={styles.action}>
              <button className={styles.actionButton} onClick={handleBlockPhysical}>
                Block
              </button>
            </div>
          </div>

          {/* Card balance */}
          <div className={styles.formRow}>
            <label className={styles.label}>Card balance:</label>
            <div className={styles.value}>{cardData.balance}</div>
            <div className={styles.action}>
              <button className={styles.actionButton} onClick={handleTopUp}>
                TOP UP
              </button>
            </div>
          </div>

          {/* PIN */}
          <div className={styles.formRow}>
            <label className={styles.label}>PIN:</label>
            <div className={styles.value}>{cardData.pin}</div>
            <div className={styles.action}>
              <button className={styles.actionButton} onClick={handleChangePIN}>
                Change PIN
              </button>
            </div>
          </div>

          {/* Expiration date */}
          <div className={styles.formRow}>
            <label className={styles.label}>Expiration date:</label>
            <div className={styles.value}>{cardData.expirationDate}</div>
            <div className={styles.action}></div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCardInfoPage;
