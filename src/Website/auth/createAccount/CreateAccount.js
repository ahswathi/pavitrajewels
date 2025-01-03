import React from 'react';
import styles from "./createAccount.module.css"
 
const CreateAccount = () => {
    return (
        <>
      
        <div className={styles.login_container}>
            <div className={styles.image_section}>
                <img src="./assets/images/babylogin.png" alt="Baby" />
            </div>
            <div className={styles.form_section}>
                <h2>Welcome!</h2>
                <p>Please signup here</p>
                <div className={styles.form_container}>
                    <form>
                        <label htmlFor="name">FULL NAME</label>
                        <input type="text" id="name" name="name" placeholder="Enter name" />

                        <label htmlFor="phone">PHONE NUMBER</label>
                        <input type="text" id="phone" name="phone" placeholder="Enter number" />

                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="text" id="email" name="email" placeholder="Enter email" />

                        <div className={styles.terms_main}>
                            <div>
                            <input type="checkbox" id="terms" className={styles.checkbox}/>
                            </div>
                            <div className={styles.terms}>
                                <span> I agree to the 
                                    <a href="/terms&conditions" className={styles.terms_cond}>Terms & Conditions</a>
                                </span>
                            </div>
                        </div>

                        <button type="submit">Signup</button>
                    </form>
                    <div className={styles.newuser}>
                        <p>Already have an account? 
                           &nbsp; <a href="/signup" className={styles.signup}>Login</a>
                        </p>
                    </div>
                    <div className={styles.separator}>
                        <span>OR</span>
                    </div>
                    <button className={styles.login}>
                        <img src="./assets/images/google.png" alt="Google Icon" />
                        Signup with Google
                    </button>
                </div>

            </div>
        </div>
        </>
    );
};

export default CreateAccount;
