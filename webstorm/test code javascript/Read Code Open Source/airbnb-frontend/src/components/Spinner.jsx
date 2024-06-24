import { useSelector } from 'react-redux'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import { ClipLoader } from 'react-spinners'

export default function Spinner() {
  const { isLoading } = useSelector((state) => state.spinnerSlice)
  return isLoading ? (
    <div className='w-screen h-screen bg-white flex justify-center items-center fixed top-0 left-0 z-50'>
      <RemoveScrollBar />
      <ClipLoader size={150} color='#FF5A5F' speedMultiplier={2} />
    </div>
  ) : (
    <></>
  )
}

// react spinners npm
