import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

type Props = {
  name: string
  type: string
  setData: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  value?: string
}

function InputElm({ name, setData, type, value, error }: Props) {
  const [show, setShow] = useState<boolean>(false)
  function capitalizeFirstLetter(str: string) {
    // Kiểm tra xem chuỗi có ít nhất 1 ký tự không
    if (str.length === 0) return str

    // Biến đổi ký tự đầu tiên thành chữ hoa và sau đó nối với phần còn lại của chuỗi
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <div className="relative text-orange1">
      <input
        type={
          (type === 'password' && show) || type === 'text' ? 'text' : 'password'
        }
        id={name}
        className={` peer rounded-md px-p20px py-p13px h-10 w-full  border-2 focus:border-primary placeholder-transparent outline-none bg-white dark:bg-bgElm ${
          error && 'border-primary'
        }`}
        placeholder=" "
        onChange={setData}
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute inline-block px-p10px rounded-md bg-white dark:bg-bgElm left-[10px] top-2 select-none pointer-events-none transition-all"
      >
        {capitalizeFirstLetter(name)}
      </label>
      {type === 'password' && (
        <button
          type="button"
          onClick={() => {
            setShow(!show)
          }}
          className=" absolute right-[10px] top-[22%]"
        >
          {show ? (
            <AiFillEyeInvisible className=" text-fs2 fill-border dark:fill-white text-fs24" />
          ) : (
            <AiFillEye className=" text-fs2 fill-border dark:fill-white text-fs24" />
          )}
        </button>
      )}
    </div>
  )
}

export default InputElm
