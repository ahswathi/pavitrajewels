import React, { useState } from 'react';
import styles from './navbar.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { Cart, Contact, Like,  Search, Menubar } from '../../../../Svg';

const Navbar = () => {
  const [isBabyDropdownOpen, setIsBabyDropdownOpen] = useState(false);
  const [isBabyDropdownOpen2, setIsBabyDropdownOpen2] = useState(false);
  const [isBabyDropdownOpen3, setIsBabyDropdownOpen3] = useState(false);
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <div className={styles.menubar}>
                <Menubar />
              </div>
              <img src="/assets/logo.png" alt="Logo" className={styles.mainImg_1} />
            </div>
            <div className={styles.searchcontant}>
              <div className={styles.search}>
                <button>
                  <span role="img" aria-label="search"><Search /></span>
                </button>
                <input type="text" placeholder="Search here....." />
              </div>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon1}>
                <Search />
              </div>
              <div className={styles.icon2}>
                <Like />
              </div>
              <div className={styles.icon3}>
                <Cart />
              </div>
              <div className={styles.icon4}>
                <Contact />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.container2}>
            <div className={styles.menu}>
              <div className={styles.dropdownContainer}>
                {/* Trigger */}
                <div
                  className={styles.dropdownTrigger}
                  onClick={() => setIsBabyDropdownOpen(!isBabyDropdownOpen)}
                >
                  BEST SELLER<span><IoIosArrowDown className={styles.dropdownIcon} /></span>
                </div>

                {/* Dropdown Menu */}
                {isBabyDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownItem}>Baby Clothes</div>
                    <div className={styles.dropdownItem}>Baby Toys</div>
                    <div className={styles.dropdownItem}>Baby Essentials</div>
                  </div>
                )}
              </div>
              <div className={styles.dropdownTrigger}>HOME</div>
              <div className={styles.dropdownContainer}>
                {/* Trigger */}
                <div
                  className={styles.dropdownTrigger}
                  onClick={() => setIsBabyDropdownOpen2(!isBabyDropdownOpen2)}
                >
                  SHOP <span><IoIosArrowDown className={styles.dropdownIcon} /></span>
                </div>

                {/* Dropdown Menu */}
                {isBabyDropdownOpen2 && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownItem}>Baby Clothes</div>
                    <div className={styles.dropdownItem}>Baby Toys</div>
                    <div className={styles.dropdownItem}>Baby Essentials</div>
                  </div>
                )}
              </div>
              <div className={styles.dropdownTrigger}>EARLINGS</div>
              <div className={styles.dropdownTrigger}>NECKLACE</div>
              <div className={styles.dropdownContainer}>
                {/* Trigger */}
                <div
                  className={styles.dropdownTrigger}
                  onClick={() => setIsBabyDropdownOpen3(!isBabyDropdownOpen3)}
                >
                  MORE <span><IoIosArrowDown className={styles.dropdownIcon} /></span>
                </div>

                {/* Dropdown Menu */}
                {isBabyDropdownOpen3 && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownItem}>Baby Clothes</div>
                    <div className={styles.dropdownItem}>Baby Toys</div>
                    <div className={styles.dropdownItem}>Baby Essentials</div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.timer}>
              <span>MIDNIGHT SALES</span>
              <div className={styles.time}>
                <div className={styles.box}>51</div>
                <span>:</span>
                <div className={styles.box}>10</div>
                <span>:</span>
                <div className={styles.box}>22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
