import React from 'react'
import Navbar from '../Navbars/Navbar'
import Header from '../Headers/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLayout