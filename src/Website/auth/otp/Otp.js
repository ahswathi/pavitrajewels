import React, { useState } from "react";
import styles from "./otp.module.css";

const Otp = ({ isOpen, onClose }) => {

  if (!isOpen) return null;
  return (
    <>
      <div className={styles.popupOverlay} >
        <div className={styles.login_container}>
          <div className={styles.image_section}>
            <img src="./assets/login.png" alt="login" />
          </div>
          <div className={styles.form_section}>
            <div className={styles.arrowback}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5304 3.54975C15.8232 3.84264 15.8232 4.31752 15.5304 4.61041L9.01036 11.1304C8.53325 11.6075 8.53325 12.3926 9.01036 12.8697L15.5304 19.3897C15.8232 19.6826 15.8232 20.1575 15.5304 20.4504C15.2375 20.7433 14.7626 20.7433 14.4697 20.4504L7.9497 13.9304C6.8868 12.8675 6.8868 11.1326 7.9497 10.0697L14.4697 3.54975C14.7626 3.25685 15.2375 3.25685 15.5304 3.54975Z" fill="#131118" />
              </svg>
              <span>Back</span>
            </div>
            <button className={styles.closeButton} onClick={onClose}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6841 8.31641L8.31633 23.6842" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" />
                <path d="M23.6833 23.6855L8.3156 8.3178" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <div >
              <img src="./assets/logo.png" alt="logo" />
            </div>
            <h2>OTP Verification</h2>
            <p>
              We have share a code of your registered email address <br /> <span>customer@gmail.com</span>
            </p>
            <div className={styles.form_container}>
              <div className={styles.number_boxes}>
                <div className={`${styles.box} ${styles.selected}`}>3</div>
                <div className={`${styles.box} ${styles.selected}`}>1</div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
              </div>
              <button type="submit" >
                Verify
              </button>

              <div className={styles.newuser}>
                <p>
                  Didn't received OTP? &nbsp;{" "}
                  <a href="/signup" className={styles.signup}>
                    Resend
                  </a>
                </p>
              </div>
              <span>(1:58)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
