import React, { useState } from "react";
import styles from "./couponpopup.module.css";

const CouponPopup = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [couponCode, setCouponCode] = useState("");

  const coupons = [
    {
      id: 1,
      code: "Diwali offer",
      description: "10% off on minimum purchase of Rs. 1499",
      expiresOn: "19th January 2025, 11:59PM",
      isValid: true,
    },
    {
      id: 2,
      code: "Diwali offer",
      description: "10% off on minimum purchase of Rs. 1499",
      expiresOn: "15th January 2025, 11:59PM",
      isValid: false,
    },
  ];

  const handleApply = () => {
    alert(`Applied coupon: ${selectedCoupon}`);
  };

  return (
    <div className={styles.blur_background}>
      <div className={styles.popup_card}>
        <div style={{ display: "flex", alignItems:'flex-start', justifyContent:'space-between'}}>
          <h2 className={styles.title}>Apply Coupon</h2>
          <button className={styles.close_btn} >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6953 22.75C6.76531 22.75 1.94531 17.93 1.94531 12C1.94531 6.07 6.76531 1.25 12.6953 1.25C18.6253 1.25 23.4453 6.07 23.4453 12C23.4453 17.93 18.6253 22.75 12.6953 22.75ZM12.6953 2.75C7.59531 2.75 3.44531 6.9 3.44531 12C3.44531 17.1 7.59531 21.25 12.6953 21.25C17.7953 21.25 21.9453 17.1 21.9453 12C21.9453 6.9 17.7953 2.75 12.6953 2.75Z" fill="#A4A4A4" />
              <path d="M9.86273 15.5794C9.67273 15.5794 9.48273 15.5094 9.33273 15.3594C9.04273 15.0694 9.04273 14.5894 9.33273 14.2994L14.9927 8.63938C15.2827 8.34938 15.7627 8.34938 16.0527 8.63938C16.3427 8.92937 16.3427 9.40937 16.0527 9.69937L10.3927 15.3594C10.2527 15.5094 10.0527 15.5794 9.86273 15.5794Z" fill="#A4A4A4" />
              <path d="M15.5227 15.5794C15.3327 15.5794 15.1427 15.5094 14.9927 15.3594L9.33273 9.69937C9.04273 9.40937 9.04273 8.92937 9.33273 8.63938C9.62273 8.34938 10.1027 8.34938 10.3927 8.63938L16.0527 14.2994C16.3427 14.5894 16.3427 15.0694 16.0527 15.3594C15.9027 15.5094 15.7127 15.5794 15.5227 15.5794Z" fill="#A4A4A4" />
            </svg>

          </button>
        </div>
        {/* Coupon Input */}
        <div className={styles.couponInput}>
          <input
            type="text"
            placeholder="Enter Coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className={styles.input}
          />
          <button className={styles.checkButton}>CHECK</button>
        </div>

        {/* Coupon List */}
        <div className={styles.couponList}>
          {coupons.map((coupon) => (
            <label
              key={coupon.id}
              className={`${styles.couponItem} ${coupon.isValid ? styles.valid : styles.expired
                }`}
            >
              <input
                type="radio"
                name="coupon"
                value={coupon.code}
                onChange={() => setSelectedCoupon(coupon.code)}
                disabled={!coupon.isValid}
              />
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="6" fill="#027A48" />
                <g clip-path="url(#clip0_1645_7172)">
                  <path d="M26 10H25.87C25.4225 10.0043 24.989 10.157 24.6377 10.4343C24.2864 10.7116 24.0371 11.0977 23.929 11.532C23.8132 11.9548 23.5617 12.3279 23.2132 12.5939C22.8647 12.8598 22.4384 13.0038 22 13.0038C21.5616 13.0038 21.1353 12.8598 20.7868 12.5939C20.4383 12.3279 20.1868 11.9548 20.071 11.532C19.9629 11.0977 19.7136 10.7116 19.3623 10.4343C19.011 10.157 18.5775 10.0043 18.13 10H18C16.6744 10.0016 15.4036 10.5289 14.4662 11.4662C13.5289 12.4036 13.0016 13.6744 13 15V31C13 31.7956 13.3161 32.5587 13.8787 33.1213C14.4413 33.6839 15.2044 34 16 34H18.13C18.5775 33.9957 19.011 33.843 19.3623 33.5657C19.7136 33.2884 19.9629 32.9023 20.071 32.468C20.1868 32.0452 20.4383 31.6721 20.7868 31.4061C21.1353 31.1402 21.5616 30.9962 22 30.9962C22.4384 30.9962 22.8647 31.1402 23.2132 31.4061C23.5617 31.6721 23.8132 32.0452 23.929 32.468C24.0371 32.9023 24.2864 33.2884 24.6377 33.5657C24.989 33.843 25.4225 33.9957 25.87 34H28C28.7956 34 29.5587 33.6839 30.1213 33.1213C30.6839 32.5587 31 31.7956 31 31V15C30.9984 13.6744 30.4711 12.4036 29.5338 11.4662C28.5964 10.5289 27.3256 10.0016 26 10V10ZM28 32L25.857 31.937C25.6221 31.0884 25.1138 30.341 24.4109 29.8108C23.708 29.2805 22.8498 28.997 21.9693 29.0042C21.0889 29.0113 20.2354 29.3088 19.5412 29.8505C18.8471 30.3921 18.351 31.1477 18.13 32H16C15.7348 32 15.4804 31.8946 15.2929 31.7071C15.1054 31.5196 15 31.2652 15 31V27H17C17.2652 27 17.5196 26.8946 17.7071 26.7071C17.8946 26.5196 18 26.2652 18 26C18 25.7348 17.8946 25.4804 17.7071 25.2929C17.5196 25.1054 17.2652 25 17 25H15V15C15 14.2044 15.3161 13.4413 15.8787 12.8787C16.4413 12.3161 17.2044 12 18 12L18.143 12.063C18.3772 12.9064 18.881 13.65 19.5774 14.1804C20.2738 14.7107 21.1247 14.9985 22 15C22.8872 14.9925 23.7476 14.6953 24.4503 14.1538C25.153 13.6122 25.6596 12.8559 25.893 12H26C26.7956 12 27.5587 12.3161 28.1213 12.8787C28.6839 13.4413 29 14.2044 29 15V25H27C26.7348 25 26.4804 25.1054 26.2929 25.2929C26.1054 25.4804 26 25.7348 26 26C26 26.2652 26.1054 26.5196 26.2929 26.7071C26.4804 26.8946 26.7348 27 27 27H29V31C29 31.2652 28.8946 31.5196 28.7071 31.7071C28.5196 31.8946 28.2652 32 28 32Z" fill="#FCFCFD" />
                  <path d="M23 25H21C20.7348 25 20.4804 25.1054 20.2929 25.2929C20.1054 25.4804 20 25.7348 20 26C20 26.2652 20.1054 26.5196 20.2929 26.7071C20.4804 26.8947 20.7348 27 21 27H23C23.2652 27 23.5196 26.8947 23.7071 26.7071C23.8946 26.5196 24 26.2652 24 26C24 25.7348 23.8946 25.4804 23.7071 25.2929C23.5196 25.1054 23.2652 25 23 25Z" fill="#FCFCFD" />
                </g>
                <defs>
                  <clipPath id="clip0_1645_7172">
                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                  </clipPath>
                </defs>
              </svg>


              <div className={styles.couponContent}>

                <div className={styles.couponsticker}>Diwa123</div>
                <span className={styles.couponCode}>{coupon.code}</span>
                <p className={styles.description}>{coupon.description}</p>
                <span
                  className={
                    coupon.isValid ? styles.expires : styles.expiredText
                  }
                >
                  {coupon.isValid
                    ? `Expires on: ${coupon.expiresOn}`
                    : `Expired on: ${coupon.expiresOn}`}
                </span>
              </div>
            </label>
          ))}
        </div>

        {/* Footer Section */}
        <div className={styles.footer}>
          <span className={styles.savings}>
            Maximum Savings: Rs. {selectedCoupon ? "150" : "0"}
          </span>
          <button
            className={styles.applyButton}
            onClick={handleApply}
            disabled={!selectedCoupon}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponPopup;
