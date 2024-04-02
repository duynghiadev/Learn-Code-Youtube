import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const VideoCard = ({ info }) => {
  console.log(info)
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div className='p-2 m-2 w-64 shadow-lg flex flex-col'>
      <div>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
      </div>
      <div className='flex justify-center'>
        <div className=''>
          <FaUserCircle />
        </div>
        <div className=''>
          <h6 className='text-base font-medium w-4/5'>{title}</h6>
          <p className='text-gray-dark text-xs w-4/5 h-[32px]'>{channelTitle}</p>
          <div className='flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start'>
            <div>{statistics.viewCount}</div>
            <div>•</div>
            <div>{snippet.publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
