import React, { useEffect, useRef, useState } from 'react'
import styles from './header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { Hamburger } from '../../../../Svg';

const Header = React.memo(() => {
    const menuRef = useRef(null);
    const [sidebar, setSidebar] = useState(false)
    const handlenav = () => {
        setSidebar(!sidebar)
    }

    console.log("menuRef", menuRef)

    const handleClickOutside = (event) => {
        console.log("clicked")
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setSidebar(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navigate = useNavigate()
    return (
        <div className={styles.container}>

            <div className={styles.mainHeader}>
                <Hamburger handlenav={handlenav} className={styles.hamburger} />
                <a href='/'><img src="/assets/images/logo.png" alt="logo" /></a>
                <span>
                    <div ref={menuRef} className={sidebar ? `${styles.opened} ${styles.rightNav}` : styles.rightNav}>
                        <NavLink className={styles.navmenu} onClick={handlenav} to='/'>Home</NavLink>
                        <NavLink className={styles.navmenu} onClick={handlenav} to='/about-us'>About us</NavLink>
                        <div className={`${styles.pages} ${styles.navmenu}`}>
                            <NavLink className={styles.navmenu} onClick={handlenav} to='service-listing'>
                                Services </NavLink><IoIosArrowDown className={styles.dropdown} />
                            <div className={styles.list}>
                                <NavLink className={styles.service} onClick={handlenav} to='/best-projector-screen-rental-in-bangalore'> Projector</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/premium-speaker-rentals-in-bangalore'> Speakers</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/led-tv-and-wall-rental-services-bangalore'> LED TV</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/decoration-lights-rental-service-in-bangalore'> Lighting</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/photography-and-videography-rental-services-in-bangalore'> photography-videography</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/shamiana-rental-services'> Shamiana</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/dj-packages-for-rent'> DJ Packages</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/wedding-packages'> Wedding Packages</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/live-streaming-webcasting-for-rent-in-bangalore'> Live Streaming</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/flower-and-balloon-decorations-for-rent-in-bangalore'>Flower and Balloon Decorations</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/professional-catering-services-in-bangalore'> Catering</NavLink>
                                <NavLink className={styles.service} onClick={handlenav} to='/services/emcee-services-corporate-events-bangalore'> Other Services</NavLink>

                                <NavLink className={styles.service} onClick={handlenav} to='/custom-t-shirts-and-corporate-gifts-providers-bangalore'> T-Shirts and Corporate Gifts</NavLink>

                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate('/contact-us')} className={styles.connect}>Contact us</button>
                </span>
            </div>
        </div>
    )
})

export default Header
