import React, { useState } from 'react';
import styles from "./featured.module.css";
import { Border } from '../maincomps/border/Border';

const Featured = () => {
  const [visibleItems, setVisibleItems] = useState(8); // Number of initially visible items
  const items = [
    {
      src: "/assets/pain2.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹21,200",
      actualPrice: "₹29,200",
    },
    {
      src: "/assets/pain3.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹21,200",
      actualPrice: "₹22,200",
    },
    {
      src: "/assets/pain4.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹29,200",
      actualPrice: "₹20,200",
    },
    {
      src: "/assets/pain5.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹12,200",
      actualPrice: "₹21,200",
    },
    {
      src: "/assets/pain5.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹12,200",
      actualPrice: "₹20,200",
    },
    {
      src: "/assets/pain4.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹12,200",
      actualPrice: "₹20,200",
    },
    {
      src: "/assets/pain3.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹23,200",
      actualPrice: "₹25,200",
    },
    {
      src: "/assets/pain2.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹42,200",
      actualPrice: "₹68,200",
    },
    {
      src: "/assets/pain2.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹62,200",
      actualPrice: "₹68,200",
    },
    {
      src: "/assets/pain3.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹52,200",
      actualPrice: "₹48,200",
    },
    {
      src: "/assets/pain4.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹52,200",
      actualPrice: "₹48,200",
    },
    {
      src: "/assets/pain5.png",
      name: "Ribbon Twist Gold Necklace",
      finalPrice: "₹42,200",
      actualPrice: "₹28,200",
    },
  ];

  const handleSeeMore = () => {
    setVisibleItems(items.length); // Show all items
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerflower}>
         <Border title='Featured Products' subtitle='Find all the trending category' />
      </div>
      <div className={styles.sectioncontainer}>
        <div className={styles.grid}>
          {items.slice(0, visibleItems).map((item, index) => (
            <div className={styles.item} key={index}>
              <img src={item.src} alt={item.name} className={styles.image} />
              <p className={styles.name}>{item.name}</p>
              <div className={styles.prices}>
                <p className={styles.finalprice}>{item.finalPrice}</p>
                <p className={styles.actualprice}>{item.actualPrice}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < items.length && (
          <button className={styles.seeMoreButton} onClick={handleSeeMore}>
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
