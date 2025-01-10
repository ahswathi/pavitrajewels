import React from 'react'
import styles from "./success.module.css"

export const Success = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    return (
        <>

            <div className={styles.popupOverlay} >
                <div className={styles.login_container}>
                        <button className={styles.closeButton} onClick={onClose}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.6841 8.31641L8.31633 23.6842" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" />
                                <path d="M23.6833 23.6855L8.3156 8.3178" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="54" cy="54" r="54" fill="#65D596" fill-opacity="0.1" />
                        <circle cx="54" cy="54" r="43" fill="#65D596" fill-opacity="0.2" />
                        <circle cx="54" cy="54" r="32" fill="#65D596" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.5 77.4168C67.1565 77.4168 77.4167 67.1567 77.4167 54.5002C77.4167 41.8436 67.1565 31.5835 54.5 31.5835C41.8435 31.5835 31.5833 41.8436 31.5833 54.5002C31.5833 67.1567 41.8435 77.4168 54.5 77.4168ZM65.0234 48.6805C65.6062 47.9312 65.4712 46.8513 64.7219 46.2685C63.9726 45.6858 62.8927 45.8207 62.31 46.57L53.1273 58.3764C52.9231 58.6389 52.539 58.673 52.2918 58.4505L46.4831 53.2227C45.7776 52.5877 44.6908 52.6449 44.0558 53.3505C43.4208 54.056 43.478 55.1428 44.1836 55.7778L49.9922 61.0056C51.7227 62.563 54.4113 62.3245 55.8407 60.4868L65.0234 48.6805Z" fill="white" />
                    </svg>
                    <h1>Login Sucessful</h1>
                </div>
            </div>
        </>
    )
}
