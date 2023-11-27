'use client'

import React from 'react'
import Header from '../component/Header'

function layout(props: { main: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className=" bg-bgColor dark:bg-bgColorDark w-screen h-screen">
      <Header />
      {props.main}
      {props.modal}
    </div>
  )
}

export default layout
