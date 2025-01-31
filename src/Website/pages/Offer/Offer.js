import React, { useState } from "react";
import styles from "./offer.module.css";

const Offer = () => {
    const slides = [
        {
            id: 1,
            image: "/assets/offer.png",
            title: "Offers",
            subtitle: "50% off on purchase",
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
                        <h3 className={styles.offerText}>{slide.title}</h3>
                        <h1 className={styles.discountText}>{slide.subtitle}</h1>
                        <p className={styles.description}>{slide.description}</p>
                        <button className={styles.shopNowButton}>Shop Now</button>
                    </div>
                </div>
            ))}

            <div className={styles.navigationControls}>
                <button className={styles.prevButton} onClick={handlePrev}>
                    <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.624533 8.1242L5.37453 12.8742C5.67268 13.1723 6.07705 13.3398 6.4987 13.3398C6.92034 13.3398 7.32471 13.1723 7.62286 12.8742C7.92101 12.5761 8.08851 12.1717 8.08851 11.75C8.08851 11.3284 7.92101 10.924 7.62286 10.6259L5.56453 8.58337L30.2487 8.58337C30.6686 8.58337 31.0714 8.41655 31.3683 8.11962C31.6652 7.82269 31.832 7.41996 31.832 7.00003C31.832 6.58011 31.6652 6.17738 31.3683 5.88045C31.0714 5.58351 30.6686 5.4167 30.2487 5.4167L5.56453 5.4167L7.62286 3.3742C7.77127 3.22701 7.88906 3.05189 7.96944 2.85895C8.04983 2.666 8.09121 2.45905 8.09121 2.25003C8.09121 2.04101 8.04983 1.83406 7.96944 1.64112C7.88906 1.44818 7.77127 1.27306 7.62286 1.12587C7.47567 0.977463 7.30055 0.859673 7.10761 0.779289C6.91467 0.698905 6.70772 0.657519 6.4987 0.657519C6.28968 0.657519 6.08273 0.698905 5.88978 0.779289C5.69684 0.859673 5.52172 0.977463 5.37453 1.12587L0.624533 5.87587C0.47613 6.02306 0.358335 6.19818 0.27795 6.39112C0.197567 6.58406 0.156183 6.79101 0.156183 7.00003C0.156183 7.20905 0.197567 7.416 0.27795 7.60895C0.358335 7.80189 0.47613 7.97701 0.624533 8.1242Z" fill="white" />
                    </svg>

                </button>
                <button className={styles.nextButton} onClick={handleNext}>
                    <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3755 5.8758L26.6255 1.1258C26.3273 0.827654 25.9229 0.660156 25.5013 0.660156C25.0797 0.660156 24.6753 0.827654 24.3771 1.1258C24.079 1.42395 23.9115 1.82832 23.9115 2.24997C23.9115 2.67161 24.079 3.07599 24.3771 3.37413L26.4355 5.41663H1.7513C1.33138 5.41663 0.928649 5.58345 0.631716 5.88038C0.334784 6.17731 0.167969 6.58004 0.167969 6.99997C0.167969 7.41989 0.334784 7.82262 0.631716 8.11955C0.928649 8.41649 1.33138 8.5833 1.7513 8.5833H26.4355L24.3771 10.6258C24.2287 10.773 24.1109 10.9481 24.0306 11.1411C23.9502 11.334 23.9088 11.5409 23.9088 11.75C23.9088 11.959 23.9502 12.1659 24.0306 12.3589C24.1109 12.5518 24.2287 12.7269 24.3771 12.8741C24.5243 13.0225 24.6994 13.1403 24.8924 13.2207C25.0853 13.3011 25.2923 13.3425 25.5013 13.3425C25.7103 13.3425 25.9173 13.3011 26.1102 13.2207C26.3032 13.1403 26.4783 13.0225 26.6255 12.8741L31.3755 8.12413C31.5239 7.97694 31.6417 7.80182 31.722 7.60888C31.8024 7.41594 31.8438 7.20899 31.8438 6.99997C31.8438 6.79095 31.8024 6.584 31.722 6.39105C31.6417 6.19811 31.5239 6.02299 31.3755 5.8758Z" fill="white" />
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default Offer;
