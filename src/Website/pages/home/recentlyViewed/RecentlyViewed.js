import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./recentlyViewed.module.css";
import { LeftArrow, RightArrow } from "../../../../Svg";

const products = [
  {
    id: 1,
    name: "Ribbon Twist Gold Necklace",
    price: "₹27,200",
    originalPrice: "₹35,000",
    image: "/assets/pain2.png",
  },
  {
    id: 2,
    name: "Emerald Gold Necklace",
    price: "₹29,500",
    originalPrice: "₹40,000",
    image: "/assets/pain3.png",
  },
  {
    id: 3,
    name: "Royal Gold Necklace",
    price: "₹50,000",
    originalPrice: "₹65,000",
    image: "/assets/pain4.png",
  },
  {
    id: 4,
    name: "Elegant Pearl Necklace",
    price: "₹18,000",
    originalPrice: "₹25,000",
    image: "/assets/pain5.png",
  },
];

const CustomArrow = ({ className, onClick, arrowDirection }) => {
  return (
    <div
      className={`${className} ${styles.customArrow} ${
        arrowDirection === "left" ? styles.leftArrow : styles.rightArrow
      }`}
      onClick={onClick}
    >
      {arrowDirection === "left" ? <LeftArrow /> : <RightArrow />}
    </div>
  );
};

const RecentlyViewed = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow arrowDirection="left" />,
    nextArrow: <CustomArrow arrowDirection="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidermain}>
        {/* Title Section */}
        <div className={styles.sliderheading}>
          <h4 className={styles.title}>Your choice</h4>
          <h2 className={styles.subtitle}>Recently Viewed Products</h2>
        </div>

        {/* Slider Section */}
        <div className={styles.sliderCards}>
          <Slider {...settings} className={styles.slickSlider}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.price}>
                  <span className={styles.currentPrice}>{product.price}</span>
                  <span className={styles.originalPrice}>
                    {product.originalPrice}
                  </span>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
