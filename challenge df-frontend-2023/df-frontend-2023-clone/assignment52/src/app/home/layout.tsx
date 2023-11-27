'use client'

import React from 'react'
import Header from '../component/Header'

function layout(props: { main: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      <Header />
      {props.main}
      {props.modal}
    </>
  )
}

export default layout
