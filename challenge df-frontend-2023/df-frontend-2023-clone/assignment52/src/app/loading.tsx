'use client'

import React from 'react'

function loading() {
  return (
    <div className="loading w-[100px] h-[100px] bg-transparent flex justify-center items-center mt-[130px] mx-auto">
      <div className="border-solid border-[5px] border-primary rounded-full border-l-transparent animate-spin text-transparent w-full h-full">
        loading
      </div>
    </div>
  )
}

export default loading
