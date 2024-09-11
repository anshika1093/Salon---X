import React, { useState } from 'react';
import './Pinfo.css';
import logo from '../logo.png';
import salonx from '../Salon-x.png'; 
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Pinfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log({ firstName, lastName, email, countryCode, number, password });
    // Redirect to OTP verification page
    navigate('/otpverification');
  };

  const handleGoBack = () => {
    navigate('/getstarted');
  };

  return (
    <div className="wrapper">
      <div className="salon">
        <a href="#">
          <img src={logo} alt="Logo" className="logo" />
          <img src={salonx} alt="Salon-X" className="salonx" />
        </a>
        <a href="#" className="previous" onClick={handleGoBack}>
          <IoArrowBackSharp />
        </a>
      </div>
      
      <div className="form-box-pinfo">
        <h2>Personal Information</h2>
        <p>Welcome to our platform! Please fill out the form below to create your account for client.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box-container">
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="input-box">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box-container">
            <div className="input-box country-code">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              >
                <option value="">Country Code</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                {/* Add more country codes with flags as needed */}
              </select>
            </div>
            <div className="input-box">
              <input
                type="tel"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>

    </div>
  );
}

export default Pinfo;
