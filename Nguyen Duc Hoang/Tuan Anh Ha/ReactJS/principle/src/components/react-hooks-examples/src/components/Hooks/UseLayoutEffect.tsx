import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'

const UseLayoutEffect = () => {
  const [width1, setWidth1] = useState(0)
  const [height1, setHeight1] = useState(0)
  const [width2, setWidth2] = useState(0)
  const [height2, setHeight2] = useState(0)
  const el1 = useRef<any>()
  const el2 = useRef<any>()

  useLayoutEffect(() => {
    setWidth1(el1.current.clientWidth)
    setHeight1(el1.current.clientHeight)
  })

  useEffect(() => {
    setWidth2(el2.current.clientWidth)
    setHeight2(el2.current.clientHeight)
  })

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width1}px</h2>
      <h2>textarea height: {height1}px</h2>
      <textarea ref={el1} onClick={() => setWidth1(0)} defaultValue='useLayoutEffect'></textarea>
      <h2>textarea width: {width2}px</h2>
      <h2>textarea height: {height2}px</h2>
      <textarea ref={el2} onClick={() => setWidth2(0)} defaultValue='useEffect'></textarea>
    </div>
  )
}

export default UseLayoutEffect
