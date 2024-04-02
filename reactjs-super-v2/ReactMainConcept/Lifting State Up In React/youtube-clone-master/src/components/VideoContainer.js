import React from 'react'
import VideoDescription from './VideoDescription'
import VideoStream from './VideoStream'

const VideoContainer = () => {
  return (
    <div className='flex flex-col w-[70%]'>
      <VideoStream />
      <VideoDescription />
    </div>
  )
}

export default VideoContainer