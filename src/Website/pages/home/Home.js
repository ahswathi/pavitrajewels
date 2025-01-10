import React, { useState } from 'react';
import styles from "./home.module.css"
import Aboutuscom from '../../Components/Aboutuscon/Aboutuscom';
import AddSliders from '../../Components/Addsliders/AddSliders';
import Featured from '../../Components/Featured/Featured';
import Sparkle from '../../Components/Sparkle/Sparkle';

const Home = () => {

  return (
    <>
    <div className={styles.container}>
       <div className={styles.section}>
       <div className={styles.box}>
<h2 className={styles.heading}>Discover Your</h2>
<h2 className={styles.subheading}>Heirloom Jewels</h2>
{/* <p className={styles.text}>Discover the timeless beauty of handcrafted jewelry</p> */}
<button className={styles.btn1}>Shop Now</button>
       </div>

       </div>
       <div className={styles.containerflower}>
        <div className={styles.flower}>
        <hr className={styles.line1}></hr>
       <img src="/assets/flower.svg" alt="Logo" className={styles.mainImg_1} />
       <hr className={styles.line2}></hr>
       </div>
       <span className={styles.font1}>Popular categories</span>
       <span className={styles.font2}>Find all the trending category</span>
       </div>
    </div>
    <Aboutuscom/>
    <AddSliders/>
    <Featured/>
    <Sparkle/>
    </>
  )
}

export default Home