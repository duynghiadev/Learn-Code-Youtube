import { useState } from 'react'

function Wrapping() {
  const [counter, setCounter] = useState(0)

  const formatClass = function () {
    let classCommon = 'badge p-3'
    if (counter === 0) {
      classCommon += 'badge-warning'
    } else {
      classCommon += 'badge-primary'
    }
    return classCommon
  }

  return (
    <div className='format'>
      <span className={formatClass()}>Primary</span>
    </div>
  )
}

export default Wrapping
