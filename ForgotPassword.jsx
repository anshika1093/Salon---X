import React, { useState } from 'react';
import './ForgotPassword.css';
import salonx from '../Salon-x.png'; 
import bg from '../Rectangle 34624655.png';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your password reset logic here
    console.log('Email:', email);
  };

  const handleGoBack = () => {
    navigate('/signin');
  };

  return (
    <div className="wrapper">
      <div className="salon">
        <a href="#"><img src={salonx} alt="Salon-X"></img> Salon-X</a>
        <a href="#" className="previous" onClick={handleGoBack}><IoArrowBackSharp /></a>
      </div>
      
      <div className="form-box-forgotpassword">
        <form onSubmit={handleSubmit}>
          <h2>Forgot Password?</h2>
          <p>Enter your email address and we'll send you a link to reset your password.</p><br></br>
          
          <div className="input-box">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">SEND LINK</button>
        </form>
      </div>

    </div>
  );
}

export default ForgotPassword;
