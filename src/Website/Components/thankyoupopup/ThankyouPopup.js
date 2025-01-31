import React, { useEffect, useState } from "react";
import styles from "./thankyou.module.css";
import { Chip } from "@mui/material";

const ThankyouPopup = () => {

  return (
    <div className={styles.blur_background}>
      <div className={styles.popup_card}>
        <button className={styles.close_btn} >
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6953 22.75C6.76531 22.75 1.94531 17.93 1.94531 12C1.94531 6.07 6.76531 1.25 12.6953 1.25C18.6253 1.25 23.4453 6.07 23.4453 12C23.4453 17.93 18.6253 22.75 12.6953 22.75ZM12.6953 2.75C7.59531 2.75 3.44531 6.9 3.44531 12C3.44531 17.1 7.59531 21.25 12.6953 21.25C17.7953 21.25 21.9453 17.1 21.9453 12C21.9453 6.9 17.7953 2.75 12.6953 2.75Z" fill="#A4A4A4" />
            <path d="M9.86273 15.5794C9.67273 15.5794 9.48273 15.5094 9.33273 15.3594C9.04273 15.0694 9.04273 14.5894 9.33273 14.2994L14.9927 8.63938C15.2827 8.34938 15.7627 8.34938 16.0527 8.63938C16.3427 8.92937 16.3427 9.40937 16.0527 9.69937L10.3927 15.3594C10.2527 15.5094 10.0527 15.5794 9.86273 15.5794Z" fill="#A4A4A4" />
            <path d="M15.5227 15.5794C15.3327 15.5794 15.1427 15.5094 14.9927 15.3594L9.33273 9.69937C9.04273 9.40937 9.04273 8.92937 9.33273 8.63938C9.62273 8.34938 10.1027 8.34938 10.3927 8.63938L16.0527 14.2994C16.3427 14.5894 16.3427 15.0694 16.0527 15.3594C15.9027 15.5094 15.7127 15.5794 15.5227 15.5794Z" fill="#A4A4A4" />
          </svg>

        </button>
        <div className={styles.icon}>
          <svg width="109" height="108" viewBox="0 0 109 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="54.5" cy="54" r="54" fill="#65D596" fill-opacity="0.1" />
            <circle cx="54.5" cy="54" r="43" fill="#65D596" fill-opacity="0.2" />
            <circle cx="54.5" cy="54" r="32" fill="#65D596" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.0006 77.4167C67.6572 77.4167 77.9173 67.1566 77.9173 54.5C77.9173 41.8435 67.6572 31.5834 55.0006 31.5834C42.3441 31.5834 32.084 41.8435 32.084 54.5C32.084 67.1566 42.3441 77.4167 55.0006 77.4167ZM65.524 48.6803C66.1068 47.931 65.9718 46.8512 65.2225 46.2684C64.4733 45.6856 63.3934 45.8206 62.8106 46.5699L53.6279 58.3763C53.4237 58.6388 53.0396 58.6729 52.7924 58.4504L46.9838 53.2226C46.2782 52.5876 45.1915 52.6448 44.5565 53.3503C43.9215 54.0559 43.9787 55.1426 44.6842 55.7777L50.4929 61.0054C52.2234 62.5629 54.912 62.3244 56.3413 60.4867L65.524 48.6803Z" fill="white" />
          </svg>

        </div>
        <h2>Thank you for your purchase!</h2>
        <p>Transaction is sucessful, we’ll process your order soon</p>
        <div className={styles.addMoreItems}>
          <button className={styles.more}>
            Shop More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPopup;
