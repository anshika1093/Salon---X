import React from 'react';
import './GetStarted.css'
import { useNavigate } from 'react-router-dom';
import salonx from '../Salon-x.png';
import cl from '../client.png';
import st from '../stylist.png';
import sl from '../salon.png';
import { IoArrowBackSharp } from "react-icons/io5";

function GetStarted() {
  const navigate = useNavigate();

  const handleClientClick = () => {
    navigate('/personal-info');
  };

  const handleStylistClick = () => {
    navigate('/stylist');
  };

  const handleSalonClick = () => {
    navigate('/salon');
  };

  const handleSigninClick = () => {
    navigate('/signin');
  };

  return (
    <div className='choice'>
      <div className='salon'>
        <a href='#'><img src={salonx}></img> Salon-X</a>
        <a href='#' className='previous' onClick={handleSigninClick }><IoArrowBackSharp /></a>
      </div>
      <div className='option'>
        <h2>How would you like to use continue?</h2><br></br>
        <button onClick={handleClientClick}><b>I'm a Client</b><p>Streamlining Your Salon Experience, <br/>One Click at a Time</p></button><br/>
        <button onClick={handleStylistClick}><b>I'm a Stylist</b><p>Empowering Stylists to Showcase Their <br/>Talent and Grow Their Business</p></button><br></br>
        <button onClick={handleSalonClick}><b>We're a Salon</b><p>Register Your Salon Today and Simplify <br/>Bookings for Your Clients</p></button><br></br>
        <div className='sign-in-link'>
          <p>Already have an account? <a href='/' onClick={handleSigninClick}>Sign in</a></p>
        </div>
      </div>
     
      <div className='line'>
        <br></br>
        <hr></hr>
        <p>  By proceeding, you agree to the Terms and Conditions and Privacy Policy<a href='#'>Help</a><a href='#'>Privacy</a><a href='#'>Terms</a></p>         
      </div>
    </div>
  );
}

export default GetStarted;
