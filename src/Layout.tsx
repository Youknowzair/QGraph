import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './ui/Navbar';  // Import your Navbar

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="content" style={{ marginTop: '3rem' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;


  // Adjust the import path to your Navbar