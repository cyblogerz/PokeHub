import React from 'react'
import NavBar from '../components/UI/NavBar';
import Footer from '../components/UI/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root