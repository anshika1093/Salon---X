import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Assets/Signin/Signin';
import GetStarted from './components/Assets/Signin/GetStarted';
import Pinfo from './components/Assets/client/Pinfo';
import Home from './components/Homepage/Home';
import ForgotPassword from './components/Assets/Signin/ForgotPassword';
import ResetPassword from './components/Assets/Signin/ResetPassword';
import OTPverification from './components/Assets/client/OTPverification';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/getstarted" element={<GetStarted/>} />
        <Route path="/personal-info" element={<Pinfo/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/otpverification" element={<OTPverification/>} />
      </Routes>
    </Router>
  );
}

export default App;
