'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import NotFoundImage from '../assets/404.svg'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Image
        src={NotFoundImage}
        alt="Notfoundimage"
        width={350}
        height={350}
        className="inline-block rounded-full ring-2 ring-white mr-3"
        priority
      />
      <button
        type="button"
        className="bg-green-300 text-center w-48 h-10 rounded mt-4 "
        onClick={() => router.push('/books')}
      >
        Back to home page
      </button>
    </div>
  )
}
