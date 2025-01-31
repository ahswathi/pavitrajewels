import React from 'react'
import styles from "./aboutus.module.css"
import { Border } from '../../components/maincomps/border/Border'
import Testimonial from '../../components/testimonial/Testimonial'
import Counter from '../home/counter/Counter'

const Aboutus = () => {
    return (
        <>
   <div style={{ position: 'absolute', bottom: '-70%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '30%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-220%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '150%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-370%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '300%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-520%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '450%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-670%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '600%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>
        <div style={{ position: 'absolute', bottom: '-820%' }}>
          <img src='/assets/Ellipse1.png' />
        </div>
        <div style={{ position: 'absolute', top: '750%', right: '0px', }}>
          <img src='/assets/Ellipse2.png' />
        </div>

            <div className={styles.image_section}>
                <img src="./assets/aboutus.png" alt="login" />
                <div className={styles.imagetitle}>
                    <p>About us: Pavitra <br />
                        Jewels Signature Collection</p>
                </div>
            </div>

            {/*  Image title */}
            <div className={styles.imgtitleCont}>
                <div className={styles.imgtitle1}>
                    <img src="assets/imgtitle1.png" alt="Jewelry Image 1" />
                    {/* <div className={styles.lgcircle}>
                        <img src="assets/lgcircle.png" alt="Jewelry Image 1" />
                    </div> */}
                </div>
                <div className={styles.imgtitle2}>
                    <img src="assets/imgtitle2.png" alt="Jewelry Image 1" />
                    <span>Dummy cotnet </span>
                </div>
                {/*  <div className={styles.smcircle}>
                    <img src="assets/smcircle.png" alt="Jewelry Image 1" />
                </div> */}
                <div className={styles.imgtitle3}>
                    <img src="assets/imgtitle3.png" alt="Jewelry Image 1" />
                    <span>Dummy cotnet </span>
                </div>
            </div>


            {/*  About us */}
            {/*     <div className={styles.aboutcontainer}> */}
            <div className={styles.aboutservice}>
                <div className={styles.aboutmainLeft}>
                    <h6>About us</h6>
                    <h2>Know us , write a title here on about us</h2>
                    <p>The timeless beauty of gold meets the captivating allure of precious stones. Each piece in this exquisite collection is a testament to superior craftsmanship and luxurious design, meticulously crafted to adorn you with a touch of opulence.</p>
                </div>
                <div className={styles.aboutmainRight}>
                    <img src="./assets/about.png" alt="login" />
                </div>
            </div>
            {/*    </div> */}

            <Counter />


            {/*  Video */}
            <div className={styles.videoContainer}>
                <video controls={false}
                    autoPlay
                    loop
                    muted
                    height='420px'
                    className={styles.video}>
                    <source src="/assets/video.webm" type="video/webm" />
                </video>
            </div>

            {/*  Our Team  */}
            <Border title='Our Team' subtitle='Dummy content as subtitle' />

            <div className={styles.teamContainer}>
                <div className={styles.teamcard}>
                    <img src="./assets/team.png" alt="login" />
                    <div className={styles.teamcontent}>
                        <div className={styles.teamtitles}>
                            <h2>Pavitra</h2>
                            <p>Founder</p>
                        </div>
                        <div className={styles.teamsm}>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_445_7848)">
                                    <path d="M23.4978 14.4887H25.141V11.6267C24.8575 11.5878 23.8825 11.5 22.747 11.5C20.3778 11.5 18.7548 12.9902 18.7548 15.7292V18.25H16.1403V21.4495H18.7548V29.5H21.9603V21.4503H24.469L24.8673 18.2508H21.9595V16.0465C21.9603 15.1217 22.2093 14.4887 23.4978 14.4887Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_445_7848">
                                        <rect width="18" height="18" fill="white" transform="translate(11.5 11.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_445_8826)">
                                    <path d="M29.5 14.9189C28.8306 15.2125 28.1174 15.4071 27.3737 15.5016C28.1387 15.0449 28.7226 14.3271 28.9971 13.462C28.2839 13.8873 27.4964 14.1876 26.6571 14.3553C25.9799 13.6341 25.0146 13.1875 23.9616 13.1875C21.9186 13.1875 20.2739 14.8458 20.2739 16.8786C20.2739 17.1711 20.2986 17.4524 20.3594 17.7201C17.2915 17.5705 14.5769 16.1001 12.7532 13.8603C12.4349 14.4126 12.2481 15.0449 12.2481 15.7255C12.2481 17.0035 12.9062 18.1364 13.8872 18.7923C13.2944 18.781 12.7127 18.6089 12.22 18.3378C12.22 18.349 12.22 18.3636 12.22 18.3783C12.22 20.1715 13.4991 21.661 15.1765 22.0041C14.8761 22.0863 14.5487 22.1256 14.209 22.1256C13.9727 22.1256 13.7342 22.1121 13.5104 22.0626C13.9885 23.524 15.3453 24.5984 16.9585 24.6333C15.703 25.6154 14.1089 26.2071 12.3831 26.2071C12.0805 26.2071 11.7902 26.1936 11.5 26.1565C13.1346 27.2106 15.0719 27.8125 17.161 27.8125C23.9515 27.8125 27.664 22.1875 27.664 17.3118C27.664 17.1486 27.6584 16.9911 27.6505 16.8348C28.3829 16.315 28.9982 15.6659 29.5 14.9189Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_445_8826">
                                        <rect width="18" height="18" fill="white" transform="translate(11.5 11.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_445_8827)">
                                    <path d="M29.4824 16.792C29.4402 15.8356 29.2855 15.1781 29.064 14.6084C28.8354 14.0036 28.4838 13.4621 28.0231 13.012C27.573 12.5549 27.028 12.1997 26.4302 11.9747C25.8571 11.7531 25.203 11.5985 24.2466 11.5563C23.2831 11.5106 22.9772 11.5 20.5334 11.5C18.0895 11.5 17.7836 11.5106 16.8237 11.5527C15.8672 11.5949 15.2097 11.7497 14.6401 11.9711C14.0352 12.1997 13.4937 12.5513 13.0436 13.012C12.5865 13.4621 12.2314 14.0072 12.0063 14.6049C11.7848 15.1781 11.6301 15.8321 11.5879 16.7885C11.5422 17.752 11.5316 18.0579 11.5316 20.5018C11.5316 22.9456 11.5422 23.2515 11.5844 24.2115C11.6265 25.1679 11.7813 25.8254 12.0029 26.3952C12.2314 26.9999 12.5865 27.5414 13.0436 27.9915C13.4937 28.4486 14.0388 28.8038 14.6365 29.0288C15.2097 29.2504 15.8637 29.405 16.8202 29.4472C17.7801 29.4895 18.0861 29.4999 20.5299 29.4999C22.9738 29.4999 23.2797 29.4895 24.2396 29.4472C25.196 29.405 25.8536 29.2504 26.4232 29.0288C27.6329 28.5611 28.5893 27.6047 29.057 26.3952C29.2784 25.822 29.4332 25.1679 29.4754 24.2115C29.5175 23.2515 29.5281 22.9456 29.5281 20.5018C29.5281 18.0579 29.5245 17.752 29.4824 16.792ZM27.8614 24.1411C27.8227 25.0202 27.675 25.4949 27.552 25.8114C27.2495 26.5956 26.6271 27.2179 25.843 27.5204C25.5265 27.6434 25.0484 27.7911 24.1727 27.8297C23.2233 27.872 22.9386 27.8824 20.5369 27.8824C18.1353 27.8824 17.847 27.872 16.901 27.8297C16.0219 27.7911 15.5472 27.6434 15.2307 27.5204C14.8405 27.3761 14.4853 27.1476 14.197 26.8487C13.8981 26.5568 13.6696 26.2052 13.5253 25.815C13.4023 25.4985 13.2546 25.0202 13.216 24.1447C13.1737 23.1953 13.1633 22.9104 13.1633 20.5088C13.1633 18.1071 13.1737 17.8188 13.216 16.873C13.2546 15.9939 13.4023 15.5192 13.5253 15.2027C13.6696 14.8123 13.8981 14.4573 14.2006 14.1688C14.4923 13.8699 14.8439 13.6414 15.2343 13.4973C15.5508 13.3742 16.0291 13.2266 16.9046 13.1878C17.854 13.1457 18.1388 13.1351 20.5404 13.1351C22.9456 13.1351 23.2303 13.1457 24.1763 13.1878C25.0554 13.2266 25.5301 13.3742 25.8466 13.4973C26.2368 13.6414 26.592 13.8699 26.8803 14.1688C27.1792 14.4607 27.4077 14.8123 27.552 15.2027C27.675 15.5192 27.8227 15.9973 27.8614 16.873C27.9036 17.8224 27.9142 18.1071 27.9142 20.5088C27.9142 22.9104 27.9036 23.1917 27.8614 24.1411Z" fill="black" />
                                    <path d="M20.5334 15.8777C17.9806 15.8777 15.9094 17.9487 15.9094 20.5016C15.9094 23.0545 17.9806 25.1256 20.5334 25.1256C23.0863 25.1256 25.1573 23.0545 25.1573 20.5016C25.1573 17.9487 23.0863 15.8777 20.5334 15.8777ZM20.5334 23.5011C18.8773 23.5011 17.5339 22.1579 17.5339 20.5016C17.5339 18.8454 18.8773 17.5022 20.5334 17.5022C22.1896 17.5022 23.5328 18.8454 23.5328 20.5016C23.5328 22.1579 22.1896 23.5011 20.5334 23.5011V23.5011Z" fill="black" />
                                    <path d="M26.4197 15.695C26.4197 16.2911 25.9364 16.7744 25.3401 16.7744C24.744 16.7744 24.2606 16.2911 24.2606 15.695C24.2606 15.0987 24.744 14.6155 25.3401 14.6155C25.9364 14.6155 26.4197 15.0987 26.4197 15.695V15.695Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_445_8827">
                                        <rect width="18" height="18" fill="white" transform="translate(11.5 11.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className={styles.teamcard}>
                    <img src="./assets/team.png" alt="login" />
                    <div className={styles.teamcontent}>
                        <div className={styles.teamtitles}>
                            <h2>Pavitra</h2>
                            <p>Founder</p>
                        </div>
                        <div className={styles.teamsm}>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_445_7848)">
                                    <path d="M23.4978 14.4887H25.141V11.6267C24.8575 11.5878 23.8825 11.5 22.747 11.5C20.3778 11.5 18.7548 12.9902 18.7548 15.7292V18.25H16.1403V21.4495H18.7548V29.5H21.9603V21.4503H24.469L24.8673 18.2508H21.9595V16.0465C21.9603 15.1217 22.2093 14.4887 23.4978 14.4887Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_445_7848">
                                        <rect width="18" height="18" fill="white" transform="translate(11.5 11.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_445_8826)">
                                    <path d="M29.5 14.9189C28.8306 15.2125 28.1174 15.4071 27.3737 15.5016C28.1387 15.0449 28.7226 14.3271 28.9971 13.462C28.2839 13.8873 27.4964 14.1876 26.6571 14.3553C25.9799 13.6341 25.0146 13.1875 23.9616 13.1875C21.9186 13.1875 20.2739 14.8458 20.2739 16.8786C20.2739 17.1711 20.2986 17.4524 20.3594 17.7201C17.2915 17.5705 14.5769 16.1001 12.7532 13.8603C12.4349 14.4126 12.2481 15.0449 12.2481 15.7255C12.2481 17.0035 12.9062 18.1364 13.8872 18.7923C13.2944 18.781 12.7127 18.6089 12.22 18.3378C12.22 18.349 12.22 18.3636 12.22 18.3783C12.22 20.1715 13.4991 21.661 15.1765 22.0041C14.8761 22.0863 14.5487 22.1256 14.209 22.1256C13.9727 22.1256 13.7342 22.1121 13.5104 22.0626C13.9885 23.524 15.3453 24.5984 16.9585 24.6333C15.703 25.6154 14.1089 26.2071 12.3831 26.2071C12.0805 26.2071 11.7902 26.1936 11.5 26.1565C13.1346 27.2106 15.0719 27.8125 17.161 27.8125C23.9515 27.8125 27.664 22.1875 27.664 17.3118C27.664 17.1486 27.6584 16.9911 27.6505 16.8348C28.3829 16.315 28.9982 15.6659 29.5 14.9189Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_445_8826">
                                        <rect width="18" height="18" fill="white" transform="translate(11.5 11.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_445_8827)">
                                    <path d="M29.4824 16.792C29.4402 15.8356 29.2855 15.1781 29.064 14.6084C28.8354 14.0036 28.4838 13.4621 28.0231 13.012C27.573 12.5549 27.028 12.1997 26.4302 11.9747C25.8571 11.7531 25.203 11.5985 24.2466 11.5563C23.2831 11.5106 22.9772 11.5 20.5334 11.5C18.0895 11.5 17.7836 11.5106 16.8237 11.5527C15.8672 11.5949 15.2097 11.7497 14.6401 11.9711C14.0352 12.1997 13.4937 12.5513 13.0436 13.012C12.5865 13.4621 12.2314 14.0072 12.0063 14.6049C11.7848 15.1781 11.6301 15.8321 11.5879 16.7885C11.5422 17.752 11.5316 18.0579 11.5316 20.5018C11.5316 22.9456 11.5422 23.2515 11.5844 24.2115C11.6265 25.1679 11.7813 25.8254 12.0029 26.3952C12.2314 26.9999 12.5865 27.5414 13.0436 27.9915C13.4937 28.4486 14.0388 28.8038 14.6365 29.0288C15.2097 29.2504 15.8637 29.405 16.8202 29.4472C17.7801 29.4895 18.0861 29.4999 20.5299 29.4999C22.9738 29.4999 23.2797 29.4895 24.2396 29.4472C25.196 29.405 25.8536 29.2504 26.4232 29.0288C27.6329 28.5611 28.5893 27.6047 29.057 26.3952C29.2784 25.822 29.4332 25.1679 29.4754 24.2115C29.5175 23.2515 29.5281 22.9456 29.5281 20.5018C29.5281 18.0579 29.5245 17.752 29.4824 16.792ZM27.8614 24.1411C27.8227 25.0202 27.675 25.4949 27.552 25.8114C27.2495 26.5956 26.6271 27.2179 25.843 27.5204C25.5265 27.6434 25.0484 27.7911 24.1727 27.8297C23.2233 27.872 22.9386 27.8824 20.5369 27.8824C18.1353 27.8824 17.847 27.872 16.901 27.8297C16.0219 27.7911 15.5472 27.6434 15.2307 27.5204C14.8405 27.3761 14.4853 27.1476 14.197 26.8487C13.8981 26.5568 13.6696 26.2052 13.5253 25.815C13.4023 25.4985 13.2546 25.0202 13.216 24.1447C13.1737 23.1953 13.1633 22.9104 13.1633 20.5088C13.1633 18.1071 13.1737 17.8188 13.216 16.873C13.2546 15.9939 13.4023 15.5192 13.5253 15.2027C13.6696 14.8123 13.8981 14.4573 14.2006 14.1688C14.4923 13.8699 14.8439 13.6414 15.2343 13.4973C15.5508 13.3742 16.0291 13.2266 16.9046 13.1878C17.854 13.1457 18.1388 13.1351 20.5404 13.1351C22.9456 13.1351 23.2303 13.1457 24.1763 13.1878C25.0554 13.2266 25.5301 13.3742 25.8466 13.4973C26.2368 13.6414 26.592 13.8699 26.8803 14.1688C27.1792 14.4607 27.4077 14.8123 27.552 15.2027C27.675 15.5192 27.8227 15.9973 27.8614 16.873C27.9036 17.8224 27.9142 18.1071 27.9142 20.5088C27.9142 22.9104 27.9036 23.1917 27.8614 24.1411Z" fill="black" />
                                    <path d="M20.5334 15.8777C17.9806 15.8777 15.9094 17.9487 15.9094 20.5016C15.9094 23.0545 17.9806 25.1256 20.5334 25.1256C23.0863 25.1256 25.1573 23.0545 25.1573 20.5016C25.1573 17.9487 23.0863 15.8777 20.5334 15.8777ZM20.5334 23.5011C18.8773 23.5011 17.5339 22.1579 17.5339 20.5016C17.5339 18.8454 18.8773 17.5022 20.5334 17.5022C22.1896 17.5022 23.5328 18.8454 23.5328 20.5016C23.5328 22.1579 22.1896 23.5011 20.5334 23.5011V23.5011Z" fill="black" />
                                    <path d="M26.4197 15.695C26.4197 16.2911 25.9364 16.7744 25.3401 16.7744C24.744 16.7744 24.2606 16.2911 24.2606 15.695C24.2606 15.0987 24.744 14.6155 25.3401 14.6155C25.9364 14.6155 26.4197 15.0987 26.4197 15.695V15.695Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_445_8827">
                                        <rect width="18" height="18" fill="white" transform="translate(11.5 11.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>

            </div>


            {/*  Image gallery  */}

            <Border title='Image Gallery' subtitle='Phasellus lorem malesuada ligula pulvinar commodo maecenas' />

            <div className={styles.gallery}>
                <div className={styles.col}>
                    <img src="assets/image1.png" alt="Jewelry Image 1" />
                </div>
                <div className={styles.col2}>
                    <div className={styles.row}>

                        <img src="assets/image2.png" alt="Jewelry Image 1" />
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.row1}>
                            <img src="assets/image3.png" alt="Jewelry Image 1" />
                        </div>
                        <div className={styles.row1}>
                            <img src="assets/image4.png" alt="Jewelry Image 1" />
                        </div>
                    </div>

                </div>
                <div className={styles.col}>
                    <img src="assets/image5.png" alt="Jewelry Image 1" />
                </div>
            </div>

<Testimonial/>

            <div className={styles.storesection}>
                <img src="./assets/store.png" alt="login" />
                <div className={styles.storeimagetitle}>
                    <h2>Kalyan Nagar</h2>
                    <p>Ground Floor Shop Number 1 East Ave Pillar - 391 Near Mulik Palace Kalyani Nagar, bangalore 566064.
                        <br /> Monday to Sunday 11:00 am - 19:00 pm</p>
                    <p><span>Phone :</span> +91-9876543210</p>
                </div>
            </div>

        </>
    )
}

export default Aboutus