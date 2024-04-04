import React, { useEffect, useState } from 'react'

export default function RuleOfHook() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary')

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name)
  })

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins')

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname
  })

  return (
    <div>
      <h1>Rule of hooks</h1> <br />
      <button onClick={() => setName('')}>Change name = ''</button>
    </div>
  )
}
