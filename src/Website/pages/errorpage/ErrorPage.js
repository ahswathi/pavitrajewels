import React from 'react'
import styles from "./errorpage.module.css";

const ErrorPage = () => {
    return (


        <div className={styles.contactCol2}>
            <img src='assets/error.png' />
            <h2>Oops! page not found</h2>
            <p>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.saveButton}>
                    Back to Home
                </button>
            </div>

        </div>
    )
}

export default ErrorPage