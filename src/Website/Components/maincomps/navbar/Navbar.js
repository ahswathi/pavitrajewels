import React, { useState } from 'react';
import styles from './navbar.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { Cart, Contact, Like, Search, Menubar } from '../../../../Svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

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
               {/*  <Menubar /> */}
                <HamburgerMenu/>
              </div>
              <a href='/'><img src="/assets/logo.png" alt="Logo" className={styles.mainImg_1} /></a>
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
              <div className={styles.dropdownTrigger}>HOME</div>
              <div className={styles.dropdownContainer}>
                {/* Trigger */}
                <div
                  className={styles.dropdownTrigger}
                  onClick={() => setIsBabyDropdownOpen(!isBabyDropdownOpen)}
                >
                 Gold<span><IoIosArrowDown className={styles.dropdownIcon} /></span>
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
              <div className={styles.dropdownContainer}>
                {/* Trigger */}
                <div
                  className={styles.dropdownTrigger}
                  onClick={() => setIsBabyDropdownOpen2(!isBabyDropdownOpen2)}
                >
                  Beaded jewels <span><IoIosArrowDown className={styles.dropdownIcon} /></span>
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
              <div className={styles.dropdownTrigger}>Polki</div>
              <div className={styles.dropdownTrigger}>Victorian</div>
              <div className={styles.dropdownTrigger}>Diamonds</div>
              <div className={styles.dropdownTrigger}>Offers</div>
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
              <span>Today’s Gold rate</span>
            </div>
          </div>
        </div>



        {/* Recent searches  */}
        {/* <div className={styles.recent}>
          <div style={{ display: "flex", flexDirection: "column", gap: '30px' }}>
            <div className={styles.recentsearch}>
              <span>Recent searches </span>
              <div className={styles.recentlist}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33337 5.33337L7.29301 7.29301C6.08422 8.49885 5.33337 10.1618 5.33337 12C5.33337 15.676 8.32404 18.6667 12 18.6667C15.676 18.6667 18.6667 15.676 18.6667 12C18.6667 8.32404 15.676 5.33337 12 5.33337V6.66671C14.9407 6.66671 17.3334 9.05937 17.3334 12C17.3334 14.9407 14.9407 17.3334 12 17.3334C9.05937 17.3334 6.66671 14.9407 6.66671 12C6.66671 10.5294 7.26703 9.19822 8.23311 8.23311L10 10V5.33337H5.33337Z" fill="#23263B" />
                  </svg>
                  <p>Jumka</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.13802 6.19531L6.19531 7.13802L11.0573 12L6.19531 16.862L7.13802 17.8047L12 12.9427L16.862 17.8047L17.8047 16.862L12.9427 12L17.8047 7.13802L16.862 6.19531L12 11.0573L7.13802 6.19531Z" fill="#23263B" />
                </svg>
              </div>
              <div className={styles.recentlist}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33337 5.33337L7.29301 7.29301C6.08422 8.49885 5.33337 10.1618 5.33337 12C5.33337 15.676 8.32404 18.6667 12 18.6667C15.676 18.6667 18.6667 15.676 18.6667 12C18.6667 8.32404 15.676 5.33337 12 5.33337V6.66671C14.9407 6.66671 17.3334 9.05937 17.3334 12C17.3334 14.9407 14.9407 17.3334 12 17.3334C9.05937 17.3334 6.66671 14.9407 6.66671 12C6.66671 10.5294 7.26703 9.19822 8.23311 8.23311L10 10V5.33337H5.33337Z" fill="#23263B" />
                  </svg>
                  <p>Jumka</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.13802 6.19531L6.19531 7.13802L11.0573 12L6.19531 16.862L7.13802 17.8047L12 12.9427L16.862 17.8047L17.8047 16.862L12.9427 12L17.8047 7.13802L16.862 6.19531L12 11.0573L7.13802 6.19531Z" fill="#23263B" />
                </svg>
              </div>
              <div className={styles.recentlist}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33337 5.33337L7.29301 7.29301C6.08422 8.49885 5.33337 10.1618 5.33337 12C5.33337 15.676 8.32404 18.6667 12 18.6667C15.676 18.6667 18.6667 15.676 18.6667 12C18.6667 8.32404 15.676 5.33337 12 5.33337V6.66671C14.9407 6.66671 17.3334 9.05937 17.3334 12C17.3334 14.9407 14.9407 17.3334 12 17.3334C9.05937 17.3334 6.66671 14.9407 6.66671 12C6.66671 10.5294 7.26703 9.19822 8.23311 8.23311L10 10V5.33337H5.33337Z" fill="#23263B" />
                  </svg>
                  <p>Jumka</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.13802 6.19531L6.19531 7.13802L11.0573 12L6.19531 16.862L7.13802 17.8047L12 12.9427L16.862 17.8047L17.8047 16.862L12.9427 12L17.8047 7.13802L16.862 6.19531L12 11.0573L7.13802 6.19531Z" fill="#23263B" />
                </svg>
              </div>
            </div>
            <div className={styles.popularsearch}>
              <span>Popular searches</span>
              <div className={styles.popularlist}>
                <p>Jumka</p>
                <p>Jumka</p>
                <p>Jumka</p>
              </div>
            </div>
          </div>
          <div className={styles.quicksearch}>
            <span>Quick access</span>
            <div className={styles.quicklist}>
              <div className={styles.quicklistitems}>
                <img src='/assets/necklace.png' />
                <div className={styles.overlap}>
                  <h2>Earings</h2>
                  <span>Gold</span>
                </div>
              </div>
              <div className={styles.quicklistitems}>
                <img src='/assets/necklace.png' />
                <div className={styles.overlap}>
                  <h2>Earings</h2>
                  <span>Gold</span>
                </div>
              </div>
              <div className={styles.quicklistitems}>
                <img src='/assets/necklace.png' />
                <div className={styles.overlap}>
                  <h2>Earings</h2>
                  <span>Gold</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
