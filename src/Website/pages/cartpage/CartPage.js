import React, { useEffect, useState } from "react";
import styles from "./cartPage.module.css";
import { Chip } from "@mui/material";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/assets/necklace.png`,
      altText: "Necklace",
      productName: "Necklace",
      quantity: 1,
      price: 19.0,
      total: 19.0,
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/necklace.png`,
      altText: "Necklace",
      productName: "Necklace",
      quantity: 1,
      price: 19.0,
      total: 19.0,
    },
  ]);

  // Functions to handle quantity changes
  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const baseTotal = cartItems.reduce(
    (acc, item) => acc + (item.basePrice || 0) * item.quantity,
    0
  );

  const saleTotal = cartItems.reduce(
    (acc, item) => acc + (item.salePrice || 0) * item.quantity,
    0
  );

  return (
    <>
      <div className={styles.Container}>

        <h2>Cart</h2>
        <div className={styles.cartContainer}>
          {/* Left Side - Cart Items */}
          <div className={styles.cartItems}>
            <table className={styles.cartTable}>
              <thead>
                <tr>
                  <th className={styles.heading}>Product</th>
                  <th className={styles.heading}>Price</th>
                  <th className={styles.heading}>Quantity</th>
                  <th className={styles.heading}>Subtotal</th>
                  <th className={styles.heading}></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className={styles.productDetailes}>
                    <td>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img
                          src={item.image}
                          alt={item.altText}
                          className={styles.productImage}
                        />
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: 'column' }}>
                          {item.productName}
                          <div style={{
                            backgroundColor: '#F6F6F6',
                            color: '#000',
                            borderRadius: '0px',
                            fontSize: '10px',
                            padding: '4px'
                          }}>Made to order</div></div>
                      </div>
                    </td>

                    <td className={styles.head}>${item.price.toFixed(2)}</td>

                    <td className={styles.head}>
                      <div className={styles.quantityControls}>
                        <div className={styles.Controls}>
                          <button
                            className={styles.opreter}
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span className={styles.num}>{item.quantity}</span>
                          <button
                            className={styles.opreter}
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className={styles.head}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    <td>
                      <div style={{ display: 'flex', gap: '10px', }}>
                        <button
                          className={styles.removeButton}
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z" stroke="#CCCCCC" stroke-miterlimit="10" />
                            <path d="M16 8.5L8 16.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 16.5L8 8.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </button>
                        <button
                          className={styles.removeButton}
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1083_14225)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5747 7.39823C15.3968 7.39823 16.2003 7.64282 16.8838 8.10108C17.5673 8.55934 18.1 9.21068 18.4146 9.97274C18.7292 10.7348 18.8115 11.5733 18.6511 12.3823C18.4908 13.1913 18.0949 13.9344 17.5137 14.5177C16.9324 15.1009 16.1918 15.4981 15.3856 15.6591C14.5793 15.82 13.7437 15.7374 12.9842 15.4217C12.2248 15.1061 11.5756 14.5715 11.1189 13.8857C10.6622 13.1999 10.4185 12.3936 10.4185 11.5687C10.4185 10.4626 10.8564 9.40185 11.6358 8.61974C12.4153 7.83762 13.4724 7.39823 14.5747 7.39823ZM10.1201 3.5365L9.42117 4.27192L8.72228 3.58459C7.57653 2.45198 6.71064 1.59865 4.93094 1.57538L4.70983 1.58624C3.75346 1.60487 2.83574 1.96837 2.12454 2.61024C1.77512 2.94 1.49717 3.33846 1.30802 3.78078C1.11888 4.22311 1.02259 4.69979 1.02518 5.18111V5.39367C1.13187 8.38344 3.9831 10.9915 6.34728 13.1513C6.81115 13.5686 7.241 13.9689 7.66003 14.3739L9.40262 16.0573L10.3164 15.1465C10.4216 15.2706 10.5314 15.3917 10.6458 15.5065C10.7726 15.6352 10.9071 15.7563 11.0463 15.8726L9.4088 17.5017L6.95804 15.1186C6.57303 14.7478 6.12772 14.3428 5.66385 13.9162C3.14969 11.6215 0.125276 8.85511 3.19628e-05 5.42935V5.16869C-0.00229962 4.54775 0.122954 3.933 0.367973 3.3628C0.612992 2.7926 0.972517 2.2792 1.4241 1.85465C2.315 1.04205 3.46759 0.578335 4.67117 0.548269H4.94795C7.11266 0.576197 8.10998 1.53193 9.40107 2.80573C10.4618 1.67002 11.3478 0.740658 13.1429 0.532754C14.1532 0.421436 15.174 0.607416 16.0808 1.06803C16.8438 1.4502 17.5064 2.00722 18.0151 2.69402C18.5305 3.38215 18.8559 4.19456 18.9583 5.04923C19.0567 5.94298 18.9035 6.84654 18.5161 7.65733L18.4898 7.62941C18.2458 7.38444 17.9797 7.16267 17.695 6.96691C17.9211 6.39586 18.0045 5.77795 17.9378 5.16714C17.8559 4.49154 17.5984 3.84944 17.1909 3.30532C16.7782 2.74887 16.2412 2.29721 15.6231 1.98653C14.8949 1.61797 14.0758 1.46922 13.2651 1.55831C11.824 1.72432 11.0555 2.54352 10.1201 3.5365ZM13.9609 9.80929C13.961 9.72875 13.9773 9.64906 14.0088 9.57501V9.5657C14.0391 9.49447 14.0827 9.4297 14.1372 9.37487C14.2516 9.26096 14.4058 9.19638 14.567 9.19489C14.647 9.19594 14.7262 9.21172 14.8005 9.24143C14.8747 9.27298 14.9424 9.31824 15 9.37487C15.0565 9.43158 15.1012 9.49911 15.1314 9.57346V9.58432C15.1632 9.65535 15.1821 9.73155 15.187 9.80929V11.0505H16.4132C16.4933 11.0507 16.5726 11.0665 16.6467 11.0971C16.7213 11.1278 16.7891 11.1732 16.8461 11.2305C16.9023 11.2875 16.947 11.355 16.9776 11.4291V11.4384C17.0045 11.5066 17.0192 11.5791 17.0209 11.6525V11.6711C17.02 11.7479 17.0042 11.8238 16.9745 11.8945C16.9436 11.9693 16.8984 12.0373 16.8415 12.0947C16.7854 12.1513 16.7187 12.1961 16.6451 12.2266H16.6343C16.5637 12.2538 16.4889 12.2685 16.4132 12.27H15.1762V13.5004C15.176 13.5807 15.1603 13.6603 15.1298 13.7346C15.0986 13.8092 15.0534 13.8771 14.9969 13.9348L14.9845 13.9456C14.9307 13.9972 14.8677 14.0382 14.7989 14.0667H14.7881C14.7175 14.094 14.6427 14.1087 14.567 14.1101C14.4869 14.1099 14.4076 14.0941 14.3335 14.0636C14.2589 14.0328 14.1911 13.9874 14.1341 13.9301C14.0772 13.8743 14.0324 13.8072 14.0026 13.7331C13.9721 13.6593 13.9558 13.5803 13.9547 13.5004V12.2762H12.7363C12.656 12.2761 12.5766 12.2598 12.5028 12.2281H12.4935C12.4225 12.1977 12.358 12.154 12.3033 12.0993C12.2467 12.0426 12.202 11.9751 12.1719 11.9007V11.8899C12.1436 11.8203 12.1273 11.7463 12.124 11.6711C12.1233 11.5907 12.1391 11.5109 12.1704 11.4368C12.2152 11.3238 12.2924 11.2267 12.3924 11.1579C12.4923 11.0891 12.6104 11.0517 12.7316 11.0505H13.9686V9.80929H13.9609Z" fill="#666666" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1083_14225">
                                <rect width="19" height="17" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.addMoreItems}>
              <button className={styles.more}>
                Continue Shopping
              </button>
            </div>
          </div>


          <div className={styles.orderSummarymain}>
            <div className={styles.orderSummary}>
              <div className={styles.Order}>Coupons</div>

              <div style={{ display: 'flex', flexDirection: 'column', }}>


                <div className={styles.summaryItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5459 3.57029C11.9641 3.15205 12.5498 2.9466 13.1377 3.01192L21 3L20.9881 10.8623C21.0534 11.4502 20.848 12.0359 20.4297 12.4541L11.4541 21.4297C10.6937 22.1901 9.46093 22.1901 8.70056 21.4297L2.57027 15.2994C1.80991 14.5391 1.80991 13.3063 2.57027 12.5459L11.5459 3.57029ZM13 5L3.94704 13.9227L10.0773 20.053L19 11V5H13ZM14 8L16 10L14 12L12 10L14 8Z" fill="#7E84A3" />
                  </svg>
                  <span className={styles.priceSummary}>Apply coupons</span>
                </div>
                <button className={styles.checkoutButton}>APPLY</button>
              </div>
            </div>

            <div className={styles.orderSummary}>
              <div className={styles.Order}>Order Summary</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className={styles.summaryItem}>
                  <span>Price</span>
                  <span>Rs {baseTotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span>Discount</span>
                  <span>Rs {(baseTotal - saleTotal).toFixed(2)}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.priceSummary}>Coupon discount</span>
                  <span className={styles.coupon}>Apply coupon</span>
                </div>
                <div className={styles.summaryItem} style={{ borderBottom: '1px solid #D1D1D8', paddingBottom: '20px' }}>
                  <span className={styles.priceSummary}>Shipping</span>
                  <span className={styles.FreeSummary}>Free</span>
                </div>
                <div className={styles.summaryTotal}>
                  <span>Total</span>
                  <span>Rs {saleTotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.priceSummary}>Estimated Delivery by</span>
                  <span className={styles.bold}> 01 Jun, 2024</span>
                </div>
              </div>
              <button className={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobilecontainer}>
        <h2 className={styles.mobileheading}>Add More Items</h2>

        <div className={styles.mobilecontant1}>
          <div className={styles.mobilecontant}>
            <div className={styles.mobilebox1}>
              <img
                src="/assets/necklace.png"
                alt="Product Name"
                className={styles.productImage}
              />
              <div className={styles.rast}>

                <div><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1596_2604)">
                    <path d="M18.975 3.7184H15.8533V1.9304C15.8533 1.14144 15.1534 0.5 14.2925 0.5H6.48831C5.62741 0.5 4.92747 1.14144 4.92747 1.9304V3.7184H1.80581C1.37414 3.7184 1.02539 4.038 1.02539 4.4336V5.1488C1.02539 5.24714 1.11319 5.3276 1.22049 5.3276H2.69353L3.29592 17.0166C3.33494 17.7788 4.02268 18.38 4.85431 18.38H15.9265C16.7605 18.38 17.4458 17.781 17.4849 17.0166L18.0872 5.3276H19.5603C19.6676 5.3276 19.7554 5.24714 19.7554 5.1488V4.4336C19.7554 4.038 19.4066 3.7184 18.975 3.7184ZM14.0974 3.7184H6.68341V2.1092H14.0974V3.7184Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1596_2604">
                      <rect width="20" height="18" fill="white" transform="translate(0.214844 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                </div>

                <div style={{
                  backgroundColor: '#F6F6F6',
                  color: '#000',
                  borderRadius: '0px',
                  fontSize: '10px',
                  padding: '4px'
                }}> <p>Made to order</p>
                </div>
              </div>
            </div>
            <div className={styles.head}>
              Necklace
            </div>
            <div className={styles.mobilebox}>
              <p className={styles.heading}>Price</p>
              <p className={styles.head}>₹1000.00</p>
            </div>
            <div className={styles.mobilebox}>
              <p className={styles.heading}>Quantity</p>
              <div className={styles.quantityControls}>
                <div className={styles.Controls}>
                  <button className={styles.opreter}>-</button>
                  <span className={styles.num}>1</span>
                  <button className={styles.opreter}>+</button>
                </div>
              </div>
            </div>
            <div className={styles.mobilebox}>
              <p className={styles.heading}>Total</p>
              <p className={styles.head}>₹1000.00</p>
            </div>
            {/* <button className={styles.cartbutton}>Add to Cart</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
