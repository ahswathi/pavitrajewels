import React, { useEffect, useState } from "react";
import styles from "./emptywishlist.module.css";
import { Chip } from "@mui/material";

const Emptycart = () => {

  return (
    <div className={styles.Container}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.694 32.31C28.0342 30.1174 29.9219 28.5 32.1408 28.5H68.7708C71.0185 28.5 72.9215 30.1585 73.2286 32.3851L79.5734 78.3851C79.9464 81.0892 77.8453 83.5 75.1156 83.5H25.0028C22.2425 83.5 20.1328 81.0377 20.5561 78.31L27.694 32.31Z" stroke="#101223" stroke-width="3" />
        <circle cx="40.5" cy="39.5" r="2.5" stroke="#101223" />
        <circle cx="58.5" cy="39.5" r="2.5" stroke="#101223" />
        <path d="M38 23C37.4477 23 36.9974 22.5519 37.0244 22.0002C37.214 18.1216 38.5017 14.4504 40.6612 11.6863C43.0054 8.68571 46.1848 7 49.5 7C52.8152 7 55.9946 8.68571 58.3388 11.6863C60.4983 14.4504 61.786 18.1216 61.9756 22.0002C62.0026 22.5519 61.5523 23 61 23L60.3484 23C59.7962 23 59.3517 22.5518 59.3175 22.0006C59.1325 19.023 58.1259 16.2136 56.4639 14.0862C54.617 11.7221 52.112 10.394 49.5 10.394C46.888 10.394 44.383 11.7221 42.5361 14.0862C40.8741 16.2136 39.8675 19.023 39.6825 22.0006C39.6483 22.5518 39.2038 23 38.6516 23H38Z" fill="#101223" />
        <path d="M85.2436 90.6402L76.5077 83.9955L67.7718 90.6402C66.6506 91.5029 65 90.7158 65 89.3233V68.3299C65 66.4833 66.5416 65 68.4258 65H84.574C86.4738 65 87.9999 66.4985 87.9999 68.3299V89.3233C88.0155 90.7158 86.3804 91.5029 85.2436 90.6402Z" fill="#FFC350" />
      </svg>

      <h2>Your cart is empty and sad :(</h2>
      <p>Add something to make it happy!</p>
      
      <div className={styles.addMoreItems}>
        <button className={styles.more}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Emptycart;
