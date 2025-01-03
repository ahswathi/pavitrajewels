import React, { useState } from "react";
import styles from "./otp.module.css";
import Authheader from "../../smallcomponents/authheader/Authheader";
import LoginPopup from "../../smallcomponents/loginpopup/LoginPopup";

const Otp = () => {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault();
    // Mock OTP verification logic here
    // If OTP is correct, show the popup
    setIsLoginSuccessful(true);
  };

  return (
    <>
      <Authheader />
      <div className={styles.login_container}>
        <div className={styles.image_section}>
          <img src="./assets/images/babylogin.png" alt="Baby" />
        </div>
        <div className={styles.form_section}>
          <div className={styles.arrowback}>
            <img src="./assets/images/arrow-left.png" alt="arrow-left" />
            <span>Back</span>
          </div>
          <h2>Enter OTP</h2>
          <p>
            We have share a code of your registered phone number +91-9876543210
          </p>
          <div className={styles.form_container}>
            <div className={styles.number_boxes}>
              <div className={`${styles.box} ${styles.selected}`}>3</div>
              <div className={`${styles.box} ${styles.selected}`}>1</div>
              <div className={styles.box}></div>
              <div className={styles.box}></div>
              <div className={styles.box}></div>
            </div>
            <button type="submit" onClick={handleSignupClick}>
              Signup
            </button>

            <div className={styles.newuser}>
              <p>
                Didn't received OTP? &nbsp;{" "}
                <a href="/signup" className={styles.signup}>
                  Resend
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally render the LoginPopup based on the state */}
      {isLoginSuccessful && <LoginPopup message="Login Successful" />}
    </>
  );
};

export default Otp;
