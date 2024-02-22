import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUser } from '../action/actions'

const TableUser = (props) => {
  const dispatch = useDispatch()
  const listUsers = useSelector((state) => {
    return state.user.listUsers
  })

  useEffect(() => {
    dispatch(fetchAllUser())
  }, [])

  const handleDeleteUser = (user) => {
    console.log(user)
  }

  return (
    <Container>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => handleDeleteUser(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </Container>
  )
}

export default TableUser
