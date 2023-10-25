import { useEffect, useState } from 'react'
import { reviews as data } from '../data'

function UpperUserName({ name }) {
  useEffect(() => {
    let lastDate
    for (let i = 0; i < 5000000; i++) {
      const date = new Date()
      lastDate = date
    }
    console.log(
      `%c${name} said:`,
      'color: violet',
      `It's ${lastDate.toUTCString()}`
    )
  }, [name])

  return <span>{name}</span>
}

function App() {
  const [reviews, setReviews] = useState(data)

  const deleteByIndex = (index) => {
    const filteredReviews = reviews.filter((review, rIndex) => index !== rIndex)
    setReviews(filteredReviews)
  }

  return (
    <div className='container'>
      {reviews.map((data, index) => {
        return (
          <div key={data.id} className='user'>
            <span>{data.name}</span>
            <UpperUserName name={data.name} />
            <button
              className='btn-delete'
              onClick={() => {
                deleteByIndex(index)
              }}
            >
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default App
