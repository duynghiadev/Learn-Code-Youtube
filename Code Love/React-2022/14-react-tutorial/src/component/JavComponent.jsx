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

  if (jav.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Không có JAV để chọn</h2>
  }

  return (
    <main className='container'>
      <h2 style={{ textAlign: 'center' }}>Có {jav.length} diễn viên JAV để chọn</h2>
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
