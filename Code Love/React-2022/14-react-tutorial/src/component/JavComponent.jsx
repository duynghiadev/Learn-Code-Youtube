import { useState } from 'react'
import javList from '../service/jav.js'

function JavComponent() {
  const [jav, setJav] = useState(javList)

  return (
    <main className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Image</th>
            <th scope='col'>Handle</th>
          </tr>
        </thead>
        <tbody>
          {jav.map(function (javItem) {
            return (
              <tr>
                <th scope='row'>{javItem.id}</th>
                <td>{javItem.name}</td>
                <td>
                  <img src={javItem.image} style={{ width: 100 }} alt='image-jav' />
                </td>
                <td>
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  )
}

export default JavComponent
