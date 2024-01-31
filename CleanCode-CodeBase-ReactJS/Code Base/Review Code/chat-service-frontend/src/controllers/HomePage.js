import React, {  useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../components/sidebars/Sidebar';

const HomePage = () => {
  useEffect(() => {
    
  },[])
  return (
    <div>
        <div className="flex">
            <Sidebar/>
            <div className="container mx-auto mt-12">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default HomePage