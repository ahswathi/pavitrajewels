import React, { useState } from 'react';
import styles from './hamburgerMenu.module.css';  
import styless from '../navbar/navbar.module.css'; 
import { IoIosArrowDown } from "react-icons/io";

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  const [isBabyDropdownOpen, setIsBabyDropdownOpen] = useState(false);
  const [isBabyDropdownOpen2, setIsBabyDropdownOpen2] = useState(false);
  const [isBabyDropdownOpen3, setIsBabyDropdownOpen3] = useState(false);
    return (
        <div className={styles.hamburgerContainer}>
            {/* Hamburger icon */}
            <div className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* Navigation menu */}
            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.section2}>
                    <div className={styles.container2}>
                        <div className={styles.menu}>
                            <div className={styless.dropdownTrigger}>HOME</div>
                            <div className={styless.dropdownContainer}>
                                {/* Trigger */}
                                <div
                                    className={styless.dropdownTrigger}
                                    onClick={() => setIsBabyDropdownOpen(!isBabyDropdownOpen)}
                                >
                                    Gold<span><IoIosArrowDown className={styless.dropdownIcon} /></span>
                                </div>

                                {/* Dropdown Menu */}
                                {isBabyDropdownOpen && (
                                    <div className={styless.dropdownMenu}>
                                        <div className={styless.dropdownItem}>Baby Clothes</div>
                                        <div className={styless.dropdownItem}>Baby Toys</div>
                                        <div className={styless.dropdownItem}>Baby Essentials</div>
                                    </div>
                                )}
                            </div>
                            <div className={styless.dropdownContainer}>
                                {/* Trigger */}
                                <div
                                    className={styless.dropdownTrigger}
                                    onClick={() => setIsBabyDropdownOpen2(!isBabyDropdownOpen2)}
                                >
                                    Beaded jewels <span><IoIosArrowDown className={styless.dropdownIcon} /></span>
                                </div>

                                {/* Dropdown Menu */}
                                {isBabyDropdownOpen2 && (
                                    <div className={styless.dropdownMenu}>
                                        <div className={styless.dropdownItem}>Baby Clothes</div>
                                        <div className={styless.dropdownItem}>Baby Toys</div>
                                        <div className={styless.dropdownItem}>Baby Essentials</div>
                                    </div>
                                )}
                            </div>
                            <div className={styless.dropdownTrigger}>Polki</div>
                            <div className={styless.dropdownTrigger}>Victorian</div>
                            <div className={styless.dropdownTrigger}>Diamonds</div>
                            <div className={styless.dropdownTrigger}>Offers</div>
                            <div className={styless.dropdownContainer}>
                                {/* Trigger */}
                                <div
                                    className={styless.dropdownTrigger}
                                    onClick={() => setIsBabyDropdownOpen3(!isBabyDropdownOpen3)}
                                >
                                    MORE <span><IoIosArrowDown className={styless.dropdownIcon} /></span>
                                </div>

                                {/* Dropdown Menu */}
                                {isBabyDropdownOpen3 && (
                                    <div className={styless.dropdownMenu}>
                                        <div className={styless.dropdownItem}>Baby Clothes</div>
                                        <div className={styless.dropdownItem}>Baby Toys</div>
                                        <div className={styless.dropdownItem}>Baby Essentials</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styless.timer} style={{marginTop:'20px'}}>
                            <span>Today’s Gold rate</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
