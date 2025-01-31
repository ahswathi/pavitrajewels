import React from 'react'
import styles from "./sparkle.module.css"

const Sparkle = () => {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.col}>
          <img src="assets/cta.png" alt="Jewelry Image 1" />
          <div className={styles.imagetitle}>
            <h2>Sparkle & Shine Sale!</h2>
            <p>Enjoy 20% OFF on our entire collection for a limited time only!</p>
            <button className={styles.btn1}>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sparkle