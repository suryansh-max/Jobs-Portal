import React from 'react'
import { Outlet } from 'react-router-dom' // wrapper things comes from outlet
import Navbar from '../components/navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default MainLayout