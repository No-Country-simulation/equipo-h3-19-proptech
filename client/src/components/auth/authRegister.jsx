import React, { useState } from 'react';
import RegisterForm from './Register';
import VerifyOtpForm from './VerifyEmail';


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const [userEmail, setUserEmail] = useState('');
  //const [isOtpSent, setIsOtpSent] = useState(false);

  const handleRegisterSuccess = (email) => {
    setUserEmail(email); // Guardar el correo para verificarlo después
    //setIsOtpSent(true);   // Mostrar el formulario de verificación del OTP
  };

  console.log(userEmail)

  return (
    <Routes>
    <Route path="/" element={<RegisterForm onRegisterSuccess={handleRegisterSuccess} />} />
    <Route path="/verifyCount" element={<VerifyOtpForm email={userEmail} />} />
  </Routes>
  );
};

export default App;
