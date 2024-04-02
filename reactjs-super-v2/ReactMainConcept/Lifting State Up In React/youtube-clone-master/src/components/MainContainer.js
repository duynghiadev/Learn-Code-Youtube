import React from 'react'
import CategoriesButtonContainer from './CategoriesButtonContainer'
import VideosListContainer from './VideosListContainer'

const MainContainer = () => {
  return (
    <div className='w-[82%]'>
      <CategoriesButtonContainer />
      <VideosListContainer />
    </div>
  )
}

export default MainContainer
