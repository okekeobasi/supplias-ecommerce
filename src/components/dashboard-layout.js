import React from 'react';
import NavBar from './navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="mx-10 lg:mx-20 my-5">
      <NavBar />
      <main className="my-9">{children}</main>
    </div>
  );
};

export default DashboardLayout;
