import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='w-[700px] h-[700px] bg-red-300'>
        <Image
          src='https://i.pinimg.com/564x/ac/27/1d/ac271de883faa03617b212beeda73db3.jpg'
          alt='pexels'
          width={600}
          height={400}
          quality={100}
          className='w-[500px] h-[500px]'
          title='pexels'
        />
      </div>
    </main>
  )
}
