import React, { useState } from "react";
import styles from "./Testimonial.module.css";
import { Border } from "../maincomps/border/Border";
import { Leftcomma, Rightcomma, StarIcon } from "../../../Svg";

const testimonials = [
    {
        id: 1,
        text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vel Mi Rutrum, Lobortis Dolor Nec, Feugiat Sapien. Vivamus Dolor Nisl, Rurum, Pellentesque A Nulla.",
        name: "Preston Murphy",
        role: "National Branding Strategist",
    },
    {
        id: 2,
        text: "We are thrilled with the exceptional service from Shriram Visuals! Their expertise at our Bank inauguration event in Bangalore. The stage setup, clear sound from the speakers, and the balloon decoration made the event colourful.",
        name: "Anu",
        role: "Senior Manager",
    },
    {
        id: 3,
        text: "Another great testimonial text that shows the user's satisfaction and experience with the service or product.",
        name: "Jane Doe",
        role: "Product Manager",
    },
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const { text, name, role } = testimonials[currentIndex];

    return (
        <>
            <div className={styles.testimonialcont}>
                <Border title='What Our clients says' subtitle='Know us more by our customers' />
                <div className={styles.testimonialSlider}>
                    <div className={styles.quoteContainer}>
                        <div className={styles.content}>

                            <div className={styles.leftcomma}> <Leftcomma /></div>
                            <StarIcon />  <StarIcon /> <StarIcon /> <StarIcon />
                            <p className={styles.text}>&ldquo;{text}&rdquo;</p>
                            <div  className={styles.rightcomma}> <Rightcomma /></div>
                            <span className={styles.author}>{name}</span> <br />
                            <span className={styles.role}>{role}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.centered}>
                    <button
                        className={`${styles.arrow} ${styles.leftArrow}`}
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                    >
                        <svg
                            width="37"
                            height="26"
                            viewBox="0 0 37 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M36.5821 10.6958H7.78385L15.0596 3.01622L12.194 0L0 12.835L12.194 25.67L15.0596 22.6538L7.78385 14.9742H36.5821V10.6958Z"
                                fill="#4D1F08"
                            />
                        </svg>
                    </button>


                    <button
                        className={`${styles.arrow} ${styles.rightArrow}`}
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                    >
                        <svg
                            width="37"
                            height="26"
                            viewBox="0 0 37 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.417856 10.6958H29.2161L21.9404 3.01622L24.806 0L37 12.835L24.806 25.67L21.9404 22.6538L29.2161 14.9742H0.417856V10.6958Z"
                                fill="#4D1F08"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
