import React from 'react'
import styles from './thankyou.module.css';

const Thankyou = () => {
  const products = [
    { id: 1, name: 'Premium Hoodie', price: 56.0, quantity: 1, color: 'Pink', imageUrl: '/assets/necklace.png' },
    { id: 2, name: 'Premium Hoodie', price: 56.0, quantity: 1, color: 'Pink', imageUrl: '/assets/necklace.png' },
  ];
  return (
    <div>
      <div className={styles.welcomeMain}>
        <div className={styles.welocmeContent}>
          <img src='/assets/offer.png' />
          <div className={styles.welocmeHead}>
            Thank you for the order!
          </div>
          <div className={styles.welocmePara}>
            Hi Angela! Thanks for shopping with us. We've received your order No. 13428. We will notify you when we send it.
          </div>
        </div>

        <div className={styles.welocmeContent2}>
          <div className={styles.thankuHead}>
            <h3 className={styles.thankuHeadh3}>Order details</h3>
            <p className={styles.thankuHeadp}> <span>No. Invoice:</span>INV/20220403/NTL/75686059</p>
          </div>
          <div className={styles.hline}></div>
          <div className={styles.thankuOrderContainer}>
            <h3 className={styles.thankuorderTitle}>Product Ordered</h3>
            {products.map((product) => (
              <div key={product.id} className={styles.thankuproduct}>
                <img src={product.imageUrl} alt={product.name} className={styles.thankuproductImage} />
                <div className={styles.thankuproductDetails}>
                  <p className={styles.thankuproductName}>{product.name}</p>
                  <p className={styles.thankuproductPrice}>${product.price.toFixed(2)}</p>
                  <p className={styles.thankuproductInfo}>Quantity: {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.hline}></div>
          <div className={styles.paymentdatalist}>
            <div className={styles.paymentdata}>
              <div>Payment method  </div>
              <div> Mastercard - 0987</div>
            </div>
            <div className={styles.paymentdata}>
              <div>Subtotal</div>
              <div>$112.00</div></div>
            <div className={styles.paymentdata}>
              <div>Shipping </div>
              <div>$10</div>
            </div>
            <div className={styles.paymentdata}>
              <div>Tax</div>
              <div> $5</div>
            </div>
            <div className={styles.paymentTotal}>
              <div>Total</div>
              <div>$127.00</div>
            </div>

          </div>
          
          <div className={styles.hline}></div>

          <div className={styles.thankuHead}>
            <h3 className={styles.thankuHeadh3}>Shipping address</h3>
            <p className={styles.thankuHeadp}>Aero Engine Controls, 5000 Solihull Parkway, Birmingham Business Park, B37 7YP</p>
          </div>
          <div className={styles.getStartBtn}>
            <button className={styles.trackOrderBtn}>View Order</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Thankyou