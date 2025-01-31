import React from 'react'
import styles from './wlecome.module.css';

const Welcome = () => {
  return (
    <>
      <div className={styles.welcomeMain}>
        <div className={styles.welocmeContent}>
          <div className={styles.welocmeHead}>
            Welcome to Dummy!
          </div>
          <div className={styles.welocmePara}>
            Hi Alex,
            <br /> <br />
            We're excited to welcome you to Untitled and we're even more excited about what we've got planned. You're already on your way to creating beautiful visual products.
            <br /> <br />
            Whether you're here for your brand, for a cause, or just for fun — welcome! If there's anything you need, we'll be here every step of the way.
            <br /> <br />
            Thanks, <br />
            Team name
          </div>
          <div className={styles.getStartBtn}>
            <button className={styles.trackOrderBtn}>Let's Get Started</button>
          </div>
        </div>
       
      </div>

    </>
  )
}

export default Welcome