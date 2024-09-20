import { useState } from 'react'
import Chip from '@mui/material/Chip'

import './chip.css'

const ChipExample = () => {
  const [languages, setLanguages] = useState([
    { id: 1, label: 'English' },
    { id: 2, label: 'Spanish' },
    { id: 3, label: 'French' },
    { id: 4, label: 'German' },
    { id: 5, label: 'Italian' },
  ])

  const handleDelete = (languageToDelete) => {
    setLanguages((languages) =>
      languages.filter((language) => language.id !== languageToDelete.id)
    )
  }

  return (
    <div>
      <h1>Chip Component</h1>
      <div className='chip-container'>
        {languages.map((language) => (
          <Chip
            key={language.id}
            label={language.label}
            onDelete={() => {
              handleDelete(language)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ChipExample
