import React from 'react'
import styles from './verification.module.css';

const Verification = () => {
  return (
    <>
      <div className={styles.welcomeMain}>
        <div className={styles.welocmeContent}>
          <div className={styles.welocmeHead}>
            Confirm Verification Code
          </div>
          <div className={styles.welocmePara}>
            Hi Alex,
            <br /> <br />
            This is your verification code:
            <br /> <br />
            <div className={styles.number_boxes}>
              <div className={`${styles.box} ${styles.selected}`}>3</div>
              <div className={`${styles.box} ${styles.selected}`}>1</div>
              <div className={styles.box}></div>
              <div className={styles.box}></div>
            </div>


            Whether you’re here for your brand, for a cause, or just for fun — welcome! This code will only be valid for the next 5 minutes.
            <br /><br />
            Thanks, <br />
            Team name
          </div>
        </div>

      </div>

    </>
  )
}

export default Verification