import React from 'react';
import logo from '../assets/Logo.svg';

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-lightGray min-h-screen w-screen flex justify-center items-center">
      <div className="w-full max-w-md flex flex-col items-center p-4">
        <img src={logo} alt="Logo" className="mb-9" />
        <div className="shadow-md bg-white p-10 rounded-lg w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
