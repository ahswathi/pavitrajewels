import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Aboutus from './Website/pages/aboutus/Aboutus';
import './App.css';
import Product from './Website/pages/product/Product';
import ProdDescription from './Website/pages/prodDescription/ProdDescription';
import Navbar from './Website/components/maincomps/navbar/Navbar';
import Home from './Website/pages/home/Home';
import Footer from './Website/components/maincomps/footer/Footer';
import Wishlist from './Website/pages/wishlist/Wishlist';
import CartPage from './Website/pages/cartpage/CartPage';
import Emptywishlist from './Website/pages/emptywishlist/Emptywishlist';
import Emptycart from './Website/pages/emptycart/Emptycart';
import Offer from './Website/pages/Offer/Offer';
import Checkout from './Website/pages/checkout/Checkout';
import FAQ from './Website/pages/faq/FAQ';
import PaymentFailed from './Website/components/paymentfailed/PaymentFailed';
import CouponPopup from './Website/components/couponpopup/CouponPopup';
import Welcome from './Website/emailtemplates/wlecome/Welcome';
import ThankyouPopup from './Website/components/thankyoupopup/ThankyouPopup';
import Thankyou from './Website/emailtemplates/thankyou/Thankyou';
import Contact from './Website/pages/contact/Contact';
import ErrorPage from './Website/pages/errorpage/ErrorPage';
import TermsCondition from './Website/pages/terms-policy/TermsCondition';
import PrivacyPolicy from './Website/pages/terms-policy/PrivacyPolicy';
import ReturnRefund from './Website/pages/terms-policy/ReturnRefund';
import ShippingPolicy from './Website/pages/terms-policy/ShippingPolicy';
import Goldrate from './Website/components/Goldrate/Goldrate';
import Breadcrumbs from './Website/components/maincomps/breadcrumbs/Breadcrumbs';
import Verification from './Website/emailtemplates/verification/Verification';

const App = () => {
  const location = useLocation();
  const excludedPaths = ["/", "/aboutus"];

  return (
    <>
      <Navbar />
      {!excludedPaths.includes(location.pathname) && <Breadcrumbs />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/product" element={<Product />} />
        <Route path="/prodDescription" element={<ProdDescription />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/emptywishlist" element={<Emptywishlist />} />
        <Route path="/emptycart" element={<Emptycart />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/thankyouPopup" element={<ThankyouPopup />} />
        <Route path="/paymentFailed" element={<PaymentFailed />} />
        <Route path="/couponPopup" element={<CouponPopup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/errorPage" element={<ErrorPage />} />
        <Route path="/termsCondition" element={<TermsCondition />} />
        <Route path="/returnRefund" element={<ReturnRefund />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/shippingPolicy" element={<ShippingPolicy />} />
        <Route path="/goldrate" element={<Goldrate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
