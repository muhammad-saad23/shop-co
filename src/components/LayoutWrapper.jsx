import React from 'react';
import {Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, setData }) => {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavFooter && <Navbar setData={setData} />}
      <Outlet/>
      {!hideNavFooter && <Footer />}
    </>
  );
};

export default Layout;
