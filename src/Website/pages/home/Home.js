import React, { useState } from 'react';
import SignIn from '../../auth/signin/SignIn';
import Otp from '../../auth/otp/Otp';
import CreateAccount from '../../auth/createAccount/CreateAccount';
import { Success } from '../../auth/success/Success';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handlers for opening and closing the popup
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <h1>Welcome to the Login Page</h1>
   {/*    <button onClick={openPopup}>Sign In</button>
      <button onClick={openPopup}>Otp</button>  */}
      <button onClick={openPopup}>CreateAccount</button> 
      
      {/* SignIn Popup */}
      {/* <SignIn isOpen={isPopupOpen} onClose={closePopup} />
      <Otp isOpen={isPopupOpen} onClose={closePopup} /> */}
      <Success isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  )
}

export default Home