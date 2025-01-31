import React, { useEffect, useState } from "react";
import styles from "./emptywishlist.module.css";
import { Chip } from "@mui/material";

const Emptywishlist = () => {

  return (
    <div className={styles.Container}>
      <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="85" cy="85" r="85" fill="#FEF5EB" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M85.4787 63.4599C79.2557 56.2078 68.8785 54.2569 61.0815 60.8978C53.2845 67.5386 52.1868 78.6417 58.3098 86.4959C63.4007 93.0261 78.8074 106.799 83.8569 111.256C84.4218 111.755 84.7043 112.004 85.0338 112.102C85.3214 112.188 85.636 112.188 85.9236 112.102C86.2531 112.004 86.5355 111.755 87.1005 111.256C92.15 106.799 107.557 93.0261 112.648 86.4959C118.771 78.6417 117.807 67.4687 109.876 60.8978C101.945 54.3268 91.7017 56.2078 85.4787 63.4599Z" stroke="black" stroke-width="6.225" stroke-linecap="round" stroke-linejoin="round" />
      </svg>


      <h2>Your wishlist is empty and sad :(</h2>
      <p>Add something to make it happy!</p>

      <div className={styles.addMoreItems}>
        <button className={styles.more}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Emptywishlist;
