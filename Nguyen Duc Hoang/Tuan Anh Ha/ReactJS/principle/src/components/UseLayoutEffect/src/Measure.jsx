import React, { useRef, useLayoutEffect, useState } from 'react'

const Measure = () => {
  const [lorem, setLorem] = useState('')
  const [dom, setDom] = useState({})
  const divRef = useRef()

  useLayoutEffect(() => {
    setDom(divRef.current.getBoundingClientRect())
  }, [lorem])

  const addLorem = () => {
    setLorem(lorem + 'Lorem Ipsum ')
  }

  return (
    <>
      <button onClick={addLorem}>add Lorem</button>
      <div ref={divRef} style={{ border: '1px solid #FFF' }}>
        {lorem}
      </div>
      <div>
        Lorem width: {dom.width} Height: {dom.height}
      </div>
    </>
  )
}

export default Measure
