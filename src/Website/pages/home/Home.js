import React, { useState } from 'react';
import Testimonial from '../../components/testimonial/Testimonial';
import PopularCat from './popularCat/PopularCat';
import Aboutuscomp from './Aboutuscomp/Aboutuscomp';
import Counter from './counter/Counter';
import AddSliders from '../../components/Addsliders/AddSliders';
import Featured from '../../components/Featured/Featured';
import RecentlyViewed from './recentlyViewed/RecentlyViewed';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import Sparkle from './Sparkle/Sparkle';
import Hero from './Hero/Hero';
import Instafeed from './instafeed/Instafeed';
import Metrics from './Metrics/Metrics';


const Home = () => {
  return (
    <>

      <div style={{ background: "#FFFBFB" }}>
       {/*  <div style={{ position: 'absolute', bottom: '-70%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '30%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-220%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '150%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-370%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '300%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-520%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '450%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-670%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '600%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-820%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '750%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div> */}
        <Hero />
        <PopularCat />
        {/* <Aboutuscomp /> */}
        <AddSliders />
        <Featured />
        <Counter />
        <Sparkle /> 
        {/* <RecentlyViewed/> */}
        <Testimonial />
        <Metrics />
        <Instafeed/>
      </div>
    </>
  )
}

export default Home