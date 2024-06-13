import React from 'react'
import { useBookContext } from '../contexts/bookContext'

function Toast(): JSX.Element {
  const { toastMessage, closeToast } = useBookContext()
  return (
    // Semantic check
    <button
      className="fixed block w-full h-full top-0 left-0 right-0 bottom-0 cursor-pointer"
      onClick={closeToast}
    >
      <div className="m-auto bg-white dark:bg-slate-800 p-5 border rounded-md w-96 shadow-2xl">
        <div className="flex flex-row justify-between">
          <h2 className="text-gray-800 dark:text-white font-bold text-2xl">
            Success!
          </h2>
        </div>
        <div className="flex flex-col align-middle justify-center text-center m-3">
          <p className="text-center dark:text-slate-200">{toastMessage}</p>
        </div>
        <div className="loaderSlice relative w-full h-1 bg-gray-300">
          <div className="progressBar absolute h-full bg-[#55d244] animate-progressBar" />
        </div>
      </div>
    </button>
  )
}

export default Toast
