import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./similarProducts.module.css";
import { LeftArrow, RightArrow } from "../../../Svg";

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
  {
    id: 5,
    name: "Modern Diamond Necklace",
    price: "₹75,000",
    originalPrice: "₹95,000",
    image: "/assets/pain2.png",
  },
];

const CustomArrow = ({ className, onClick, arrowDirection }) => {
  return (
    <div
      className={`${className} ${styles.customArrow} ${arrowDirection === "left" ? styles.leftArrow : styles.rightArrow
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
    slidesToShow: 4, // Display 4 products per slide
    slidesToScroll: 1,

    prevArrow: <CustomArrow arrowDirection="left" />,
    nextArrow: <CustomArrow arrowDirection="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.heading}>Recently viewed</h2>
      <Slider {...settings} className={styles.slickSlider} style={{ gap: "16px" }}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productmain}>
              <div className={styles.productimgcont}>
                <div key={product.id} className={styles.productImage}>
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>
                  <span className={styles.currentPrice}>{product.price}</span>
                  <span className={styles.originalPrice}>
                    {product.originalPrice}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyViewed;
