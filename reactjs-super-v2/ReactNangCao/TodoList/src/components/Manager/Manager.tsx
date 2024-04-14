import './manager.css'
import { useState } from 'react'
import Confirm from '../Confirm'

const initialStudents = [
  {
    id: 1,
    name: 'John Smith'
  },
  {
    id: 2,
    name: 'James Smith'
  }
]

const Manager = () => {
  const [students, setStudents] = useState<typeof initialStudents>(initialStudents)
  const [idDelete, setIdDelete] = useState<null | number>(null)
  const visibleConfirm = idDelete !== null

  const showConfirm = (id: number) => {
    setIdDelete(id)
  }

  const hideConfirm = () => {
    setIdDelete(null)
  }

  const handleDelete = () => {
    setStudents((prevState) => prevState.filter((students) => students.id !== idDelete))
    hideConfirm()
  }

  return (
    <div className='manager'>
      <h1>Manager Student</h1>
      <div className='student-list'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => showConfirm(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Confirm visible={visibleConfirm} ok={handleDelete} cancel={hideConfirm} />
    </div>
  )
}

export default Manager
