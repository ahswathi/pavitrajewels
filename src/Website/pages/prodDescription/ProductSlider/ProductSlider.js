import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./prod.module.css";

const staticData = [
  {
    _id: "1",
    name: "Stylish Gold Earrings",
    featuredImage: "/images/earrings1.png",
    sale: true,
    averageRating: 4.5,
    stockQuantity: 10,
    salePrice: 1500,
    basePrice: 2000,
  },
  {
    _id: "2",
    name: "Elegant Silver Necklace",
    featuredImage: "/images/necklace1.png",
    sale: false,
    averageRating: 4.0,
    stockQuantity: 5,
    salePrice: 3000,
    basePrice: 3500,
  },
  {
    _id: "3",
    name: "Classic Diamond Ring",
    featuredImage: "/images/ring1.png",
    sale: true,
    averageRating: 5.0,
    stockQuantity: 2,
    salePrice: 5000,
    basePrice: 7000,
  },
  {
    _id: "4",
    name: "Charming Bracelet",
    featuredImage: "/images/bracelet1.png",
    sale: false,
    averageRating: 3.5,
    stockQuantity: 15,
    salePrice: 2500,
    basePrice: 3000,
  },
];

const ProductSlider = () => {
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className={styles.similarProductsContainer}>
      {staticData.length > 0 && (
        <div className={styles.similarProducts}>
          <div className={styles.navHeader}>
            <h4 className={styles.title}>Similar Products</h4>
          </div>
          <Slider {...sliderSettings}>
            {staticData.map((product) => (
              <div key={product._id} className={styles.productCard}>
                <img
                  src={product.featuredImage}
                  alt={product.name}
                  className={styles.productImage}
                />
                {product.sale && <span className={styles.saleBadge}>SALE</span>}
                <h5 className={styles.productName}>{product.name}</h5>
                <div className={styles.rating}>{`Rating: ${product.averageRating}★`}</div>
                <div className={styles.priceContainer}>
                  <span className={styles.salePrice}>{`₹${product.salePrice}`}</span>
                  {product.sale && (
                    <span className={styles.basePrice}>{`₹${product.basePrice}`}</span>
                  )}
                </div>
                {product.stockQuantity > 0 ? (
                  <button className={styles.addToCart}>Add to Cart</button>
                ) : (
                  <span className={styles.outOfStock}>Out of Stock</span>
                )}
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
