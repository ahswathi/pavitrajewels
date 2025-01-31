import React from "react";
import styles from "./instafeed.module.css";
import { Border } from "../../../components/maincomps/border/Border";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Instafeed = () => {
    const images = [
        "/assets/pain2.png",
        "/assets/pain2.png",
        "/assets/pain2.png",
        "/assets/pain2.png",
        "/assets/pain2.png",
    ];

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.sliderContainer}>
            <Border title='Pavitra Jewels' subtitle='Know us more by our customers' />
            <div className={styles.imageSlidermain}>
                <div className={styles.imageSlider1}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {images.map((img, index) => (
                                <>
                                     <div className={styles.imageItem1} key={index}>
                                        <img src={img} alt={`Image ${index + 1}`} />
                                        <div className={styles.overlap}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_b_443_5165)">
                                                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1" />
                                                    <circle cx="24" cy="24" r="23.5" stroke="white" />
                                                </g>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 15C16.7909 15 15 16.7909 15 19V29C15 31.2091 16.7909 33 19 33H29C31.2091 33 33 31.2091 33 29V19C33 16.7909 31.2091 15 29 15H19ZM13 19C13 15.6863 15.6863 13 19 13H29C32.3137 13 35 15.6863 35 19V29C35 32.3137 32.3137 35 29 35H19C15.6863 35 13 32.3137 13 29V19Z" fill="white" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4835 20.989C23.8593 20.8964 23.2219 21.0031 22.6618 21.2937C22.1017 21.5843 21.6475 22.0441 21.3638 22.6078C21.0801 23.1714 20.9813 23.8102 21.0816 24.4332C21.1818 25.0562 21.476 25.6317 21.9221 26.0779C22.3683 26.5241 22.9439 26.8182 23.5669 26.9184C24.1898 27.0187 24.8286 26.9199 25.3922 26.6363C25.9559 26.3526 26.4157 25.8984 26.7063 25.3383C26.997 24.7782 27.1036 24.1407 27.011 23.5165C26.9166 22.8798 26.6199 22.2904 26.1648 21.8352C25.7097 21.3801 25.1202 21.0834 24.4835 20.989ZM21.7406 19.5184C22.6741 19.0341 23.7366 18.8564 24.7769 19.0106C25.838 19.168 26.8204 19.6625 27.579 20.421C28.3376 21.1796 28.832 22.162 28.9894 23.2231C29.1436 24.2634 28.966 25.3259 28.4816 26.2594C27.9972 27.1929 27.2308 27.9499 26.2914 28.4227C25.352 28.8955 24.2874 29.0601 23.2491 28.893C22.2108 28.726 21.2516 28.2357 20.5079 27.4921C19.7643 26.7484 19.274 25.7892 19.107 24.7509C18.9399 23.7126 19.1045 22.648 19.5773 21.7086C20.0501 20.7692 20.8071 20.0028 21.7406 19.5184Z" fill="white" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 18.5C28.5 17.9477 28.9477 17.5 29.5 17.5H29.51C30.0623 17.5 30.51 17.9477 30.51 18.5C30.51 19.0523 30.0623 19.5 29.51 19.5H29.5C28.9477 19.5 28.5 19.0523 28.5 18.5Z" fill="white" />
                                                <defs>
                                                    <filter id="filter0_b_443_5165" x="-6" y="-6" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_443_5165" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_443_5165" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>
                                    <div className={styles.imageItem2} key={index}>
                                        <img src={img} alt={`Image ${index + 1}`} />
                                    </div>
                                </>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className={styles.imageSlider2}>
                    {images.map((img, index) => (
                        <>
                            <div className={styles.imageItem1} key={index}>
                                <img src={img} alt={`Image ${index + 1}`} />
                            </div>
                            <div className={styles.imageItem2} key={index}>
                                <img src={img} alt={`Image ${index + 1}`} />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instafeed;
