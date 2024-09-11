import React from 'react';
import './Signin.css'
/*import { TbEyeX } from "react-icons/tb";*/
import logo from '../logo.png';
import salonx from '../Salon-x.png'; 
import bg from '../Rectangle 34624655.png';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function Signin() {
    const navigate = useNavigate();
  
    const handleSignIn = () => {
      navigate('/getstarted');
    };    

    const handleForgotPassword = () => {
        navigate('/forgotpassword');
    };
    
  return (
    <div className='wrapper'>
        <div className='salon'>
            <a href='#'><img src={salonx}></img> Salon-X</a>
            <a href='#' className='previous'><IoArrowBackSharp /></a>
            
        </div>
        
        <div className='form-box-signin'>
            <form action=''>
                <img src={logo} alt=''></img>
                <h2>Welcome back!</h2>
                <p>Get your campaign up and running in just minutes.</p><br></br>
                <div className='input-box'>
                    <input type='email' placeholder='Email Address' required />
                                   
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                                  
                </div>
                <div className="remember-forget">
                    <label><input type='checkbox' />Remember me</label> 
                    <a href='#' onClick={handleForgotPassword}>Forgot password?</a>               
                </div> 

                <button >SIGN IN</button>
                

                <div className='sign-up-link'>
                    <p>Don't have an account? <a href='#'type='submit' onClick={handleSignIn}>Sign up</a></p>
                </div>        
            </form>
        </div>
        <div className='line'>
            <br></br>
            <hr></hr>
            <p>  By proceeding, you agree to the Terms and Conditions and Privacy Policy<a href='#'>Help</a><a href='#'>Privacy</a><a href='#'>Terms</a></p>         
        </div>

    </div>
    
  );
}

export default Signin;