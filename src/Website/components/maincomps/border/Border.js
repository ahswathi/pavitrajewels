import React from 'react'
import styles from "./border.module.css"

export const Border = ({title, subtitle}) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.border}>
                    <svg width="243" height="2" viewBox="0 0 243 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H243" stroke="url(#paint0_linear_445_7903)" />
                        <defs>
                            <linearGradient id="paint0_linear_445_7903" x1="243" y1="0.999265" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#878585" />
                                <stop offset="1" stop-color="#FFF4E9" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <img src='assets/logodot.png' />

                    <svg width="243" height="2" viewBox="0 0 243 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H243" stroke="url(#paint0_linear_445_7905)" />
                        <defs>
                            <linearGradient id="paint0_linear_445_7905" x1="0" y1="1" x2="243" y2="1" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.titlesmain}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
        </>
    )
}
