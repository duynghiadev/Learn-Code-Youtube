import { useState } from 'react'
import javList from '../service/jav.js'

function JavComponent() {
  console.log('render begin')
  const [jav, setJav] = useState(javList)

  const handleDeleteJav = (id) => {
    const stateJavNew = jav.filter((javItem) => javItem.id !== id)
    // Sau khi thay đổi state thì khi cập nhật lại setState thì function sẽ render lại
    setJav(stateJavNew)
  }

  console.log('render end')

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
              <tr key={javItem.id}>
                <th scope='row'>{javItem.id}</th>
                <td>{javItem.name}</td>
                <td>
                  <img src={javItem.image} style={{ width: 100 }} alt='image-jav' />
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteJav(javItem.id)
                    }}
                    className='btn btn-danger btn-sm'
                  >
                    Delete
                  </button>
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
