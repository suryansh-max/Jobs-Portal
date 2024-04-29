import React from 'react'
import { Outlet } from 'react-router-dom' // wrapper things comes from outlet
import Navbar from '../components/navbar'
const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default MainLayout