import React from 'react'
import styles from "./sparkle.module.css"
const Sparkle = () => {
  return (
    <div className={styles.container}>
       <div className={styles.section}>
       <div className={styles.box}>
{/* <h2 className={styles.heading}>Discover Your</h2> */}
<h2 className={styles.subheading}>Sparkle & Shine Sale!</h2>
<p className={styles.text}>Enjoy 20% OFF on our entire collection for a limited time only!</p>
<button className={styles.btn1}>Shop Now</button>
       </div>

       </div>
       <div className={styles.containerflower}>
        <div className={styles.flower}>
        <hr className={styles.line1}></hr>
       <img src="/assets/flower.svg" alt="Logo" className={styles.mainImg_1} />
       <hr className={styles.line2}></hr>
       </div>
       <span className={styles.font1}>What Our clients says</span>
       <span className={styles.font2}>Know us more by our customers</span>
       </div>
    </div>
  )
}

export default Sparkle