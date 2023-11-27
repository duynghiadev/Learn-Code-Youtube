import React from 'react'

type Props = {
  text: string | React.JSX.Element
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
  width?: number
}

function ButtonPrimary({ text, type, onClick, width }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-primary py-p10px px-p20px text-white font-bold ${
        width ? width.toString() : 'w-full'
      } rounded-md shadow-md hover:scale-110`}
    >
      {text}
    </button>
  )
}

export default ButtonPrimary
