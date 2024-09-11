import React, { useState } from 'react';
import './ResetPassword.css';
import logo from '../logo.png'; 
import salonx from '../Salon-x.png'; 
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    setError('');
    setSuccessMessage('✅ Your Password has been successfully reset. Please login to your account.');
    
    setTimeout(() => {
      navigate('/signin');
    }, 5000); 
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
      
      <div className="form-box-resetpassword">
        <h2>Reset Password</h2>
        <p>Your new password must be different from the previous password.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="password"
              placeholder="Set new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
