import React from 'react'
import styles from "./popularCat.module.css"
import { Border } from '../../../components/maincomps/border/Border'

const PopularCat = () => {
    return (
        <>
            <Border title='Popular categories' subtitle='Phasellus lorem malesuada ligula pulvinar commodo maecenas' />

            <div className={styles.gallery}>
                <div className={styles.col}>
                    <img src="assets/prodcat1.png" alt="Jewelry Image 1" />
                    <div className={styles.imagetitle}>
                        <h2>Gold</h2>
                        <p>Mesmerising jewellery collection</p>
                        <a href=''>Shop Now</a>
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.row1}>
                        <img src="assets/prodcat2.png" alt="Jewelry Image 1" />
                        <div className={styles.imagetitle}>
                            <h2>Beaded jewel</h2>
                            <p>Mesmerising jewellery collection</p>
                            <a href=''>Shop Now</a>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src="assets/prodcat3.png" alt="Jewelry Image 1" />
                        <div className={styles.imagetitle}>
                            <h2>Polki</h2>
                            <p>Mesmerising jewellery collection</p>
                            <a href=''>Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.row}>
                        <img src="assets/prodcat3.png" alt="Jewelry Image 1" />
                        <div className={styles.imagetitle}>
                            <h2>Victorian</h2>
                            <p>Mesmerising jewellery collection</p>
                            <a href=''>Shop Now</a>
                        </div>
                    </div>
                    <div className={styles.row1}>
                        <img src="assets/prodcat2.png" alt="Jewelry Image 1" />
                        <div className={styles.imagetitle}>
                            <h2>Diamond</h2>
                            <p>Mesmerising jewellery collection</p>
                            <a href=''>Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PopularCat