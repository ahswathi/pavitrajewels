import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "/assets/offer.png",
            title: "Discover Your",
            subtitle: "Heirloom Jewels",
            description: "Discover the timeless beauty of handcrafted jewelry",
        },
        {
            id: 2,
            image: "/assets/homebackground.png",
            title: "Offers",
            subtitle: "50% off on purchase",
            description: "Discover the timeless beauty of handcrafted jewelry",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slides.length]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };


    return (
        <div className={styles.sliderContainer}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : styles.hidden
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.subtitle}
                        className={styles.slideImage}
                    />
                    <div className={styles.textOverlay}>
                        <h3 className={styles.heading}>{slide.title}</h3>
                        <h1 className={styles.subheading}>{slide.subtitle}</h1>
                        <p className={styles.text}>{slide.description}</p>
                        <button className={styles.shopNowButton}>Shop Now</button>
                    </div>
                </div>
            ))}

            {/* <div className={styles.navigationControls}>
                <button className={styles.prevButton} onClick={handlePrev}>
                    {"<"}
                </button>
                <button className={styles.nextButton} onClick={handleNext}>
                    {">"}
                </button>
            </div> */}
        </div>
    );
};

export default Hero;
