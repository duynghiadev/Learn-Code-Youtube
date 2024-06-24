import React, { useState } from 'react'

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState('Pedro')

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <div>
      <h1>useState hook</h1>
      <input placeholder='enter something...' onChange={onChange} />
      {inputValue}
      <hr />
    </div>
  )
}

export default StateTutorial
