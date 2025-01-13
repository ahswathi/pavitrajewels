import React from 'react'
import styles from "./Aboutuscom.module.css"
const Aboutuscom = () => {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>About us</p>
        <p className={styles.subheding}> Know us , write a title here on about us</p>
        <p className={styles.head}>The timeless beauty of gold meets the captivating allure of precious stones. Each piece in this exquisite collection is a testament to superior craftsmanship and luxurious design, meticulously crafted to adorn you with a touch of opulence.</p>
        <button className={styles.btn1}>Shop Now</button>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <img src="/assets/Rect.png" alt="Logo" className={styles.mainImg_1} />
        </div>
      </div>

    </div>
  )
}

export default Aboutuscom