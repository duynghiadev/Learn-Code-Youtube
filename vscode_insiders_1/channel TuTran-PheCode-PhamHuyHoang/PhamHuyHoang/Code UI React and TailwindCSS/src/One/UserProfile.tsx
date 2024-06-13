export const UserProfile = () => {
  return (
    <div className='w-[36rem] rounded-lg bg-white p-12 flex gap-x-4'>
      <img
        src='https://placewaifu.com/image/200'
        className='w-32 rounded-full border-[11px] border-[#E6EFFA] self-start'
        alt=''
      />
      <div className='space-y-7 text-[#1C2862]'>
        <div>
          <h1 className='text-3xl font-bold font-popi'>David Grant</h1>
          <h2 className='mt-1'>3D Artist</h2>
        </div>

        <div className='space-y-4'>
          <p className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width={1.5}
              stroke='currentColor'
              className='mr-1 inline-block w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>
            4.7 Rating
          </p>

          <p className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mr-1 inline-block w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6'
              />
            </svg>
            4,447 Reviews
          </p>

          <p className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mr-1 inline-block w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>
            478 Students
          </p>
        </div>

        <p className='text-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptatem et nisi sed
          itaque libero consequuntur officia provident ex, earum natus quidem, nobis, quibusdam nam.
          Corporis commodi voluptas sit vero?
        </p>

        <button className='rounded-md border-2 border-[#C4CADF] p-2'>Show more</button>
      </div>
    </div>
  )
}
