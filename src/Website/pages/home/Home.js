import React, { useState } from 'react';
import styles from "./home.module.css"
/* import Sparkle from '../../components/Sparkle/Sparkle'; */
/* import AddSliders from '../../components/Addsliders/AddSliders';
import Aboutuscom from '../../components/Aboutuscon/Aboutuscom'; */
import { Border } from '../../components/maincomps/border/Border'
import Testimonial from '../../components/testimonial/Testimonial';
import Featured from '../../components/Featured/Featured';
import PopularCat from './popularCat/PopularCat';

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

      </div>

      <PopularCat/>
      {/*  <Border title='Popular categories' subtitle='Find all the trending category' /> */}

     <Testimonial/>
     {/*  <Aboutuscom />
      <AddSliders />
      <Featured />
      <Sparkle /> */}
    </>
  )
}

export default Home