import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CategoriesButtonContainer from './CategoriesButtonContainer'
import VideoContainer from './VideoContainer'
import VideosListContainer from './VideosListContainer'

const VideoPageContainer = () => {
  const [searchParams] = useSearchParams()

  console.log(searchParams.get('v'))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <div className='flex'>
      <VideoContainer />
      <div className='flex flex-col w-[30%]'>
        <CategoriesButtonContainer />
        <VideosListContainer />
      </div>
    </div>
  )
}

export default VideoPageContainer
