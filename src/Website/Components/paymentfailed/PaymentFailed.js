import React, { useEffect, useState } from "react";
import styles from "./paymentfailed.module.css";
import { Chip } from "@mui/material";

const PaymentFailed = () => {

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
          <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="40" r="40" fill="#DC3545" />
            <path d="M48.5 32L32.5 48M32.5001 32L48.5001 48" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
        <h2>Payment failed</h2>
        <p>Unable to complete your transaction due to technical issue.! Please try again later. If any amount deducted will be credited within 4 working days</p>
        <div className={styles.addMoreItems}>
          <button className={styles.more}>
          Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
