import React, { useState } from 'react';
import styles from "./signIn.module.css"

const SignIn = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.popupOverlay} >
                <div className={styles.login_container}>
                    <div className={styles.image_section}>
                        <img src="./assets/login.png" alt="login" />
                    </div>
                    <div className={styles.form_section}>
                        <button className={styles.closeButton} onClick={onClose}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.6841 8.31641L8.31633 23.6842" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" />
                                <path d="M23.6833 23.6855L8.3156 8.3178" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                        <div >
                            <img src="./assets/logo.png" alt="logo" />
                        </div>
                        <h2>Hello, Let's Sign In</h2>
                        <p>Please register or sign in.</p>
                        <div className={styles.form_container}>
                            <form>
                                <label htmlFor="phone">Email address*</label>
                                <input type="email" id="email" name="email" placeholder="Enter email address" />
                                <button type="submit">Sign In</button>
                            </form>
                            <div className={styles.newuser}>
                                <a href="/signup" className={styles.signup}>
                                    Create an Account
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="10.5" y="9.09375" width="0.802992" height="5.62095" transform="rotate(-45 10.5 9.09375)" fill="black" />
                                        <rect x="14.4756" y="11.9336" width="0.802992" height="5.62095" transform="rotate(45 14.4756 11.9336)" fill="black" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
