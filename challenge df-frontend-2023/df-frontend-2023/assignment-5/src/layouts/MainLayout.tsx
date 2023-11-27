'use client'

import React from 'react'
import MainBody from './MainBody'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

function MainLayout() {
  return (
    <div className="dark:bg-slate-800">
      <MainHeader />
      <MainBody />
      <MainFooter />
    </div>
  )
}

export default MainLayout
