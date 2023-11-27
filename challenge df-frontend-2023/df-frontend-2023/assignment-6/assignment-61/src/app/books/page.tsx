'use client'

import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import AuthRequire from '../AuthRequire'

export default function Home() {
  return (
    <AuthRequire>
      <div className="flex flex-col justify-between min-h-screen dark:bg-slate-800">
        <MainLayout />
      </div>
    </AuthRequire>
  )
}
