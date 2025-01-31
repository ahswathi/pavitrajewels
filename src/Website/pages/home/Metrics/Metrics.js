import styles from './metrics.module.css';

const Metrics = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.counterCol}>
                    <h5>15 </h5> <span>+</span>
                    <p>Years of experience</p>
                </div>
                <div className={styles.counterCol}>
                    <h5>460 </h5> <span>+</span>
                    <p>Clients</p>
                </div>
                <div className={styles.counterCol}>
                    <h5>20 </h5> <span>+</span>
                    <p>Expert Team</p>
                </div>
                <div className={styles.counterCol}>
                    <h5>2000 </h5> <span>+</span>
                    <p>Jewlery Collection</p>
                </div>
            </div>
        </>
    );
};

export default Metrics;
