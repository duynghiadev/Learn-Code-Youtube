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

  const isLoading = useSelector((state) => {
    return state.user.isLoading
  })
  const isError = useSelector((state) => {
    return state.user.isError
  })

  useEffect(() => {
    dispatch(fetchAllUser())
  }, [])

  const handleDeleteUser = (user) => {
    console.log(user)
  }

  if (isError === false && isLoading === true) {
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
            <>
              <div>Loading data...</div>
            </>
          </tbody>
        </Table>
      </Container>
    )
  }

  if (isError === false && isLoading === false) {
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
            <>
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
            </>
          </tbody>
        </Table>
      </Container>
    )
  }

  if (isError === true && isLoading === false) {
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
            <>
              <div>Something wrongs, please try again...</div>
            </>
          </tbody>
        </Table>
      </Container>
    )
  }

  // return (
  //   <Container>
  //     <hr />
  //     <Table striped bordered hover>
  //       <thead>
  //         <tr>
  //           <th>#</th>
  //           <th>Email</th>
  //           <th>Username</th>
  //           <th>Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {isError === true ? (
  //           <>
  //             <div>Something wrongs, please try again...</div>
  //           </>
  //         ) : (
  //           <>
  //             {isLoading === true ? (
  //               <>
  //                 <div>Loading data...</div>
  //               </>
  //             ) : (
  //               <>
  //                 {listUsers &&
  //                   listUsers.length > 0 &&
  //                   listUsers.map((item, index) => {
  //                     return (
  //                       <tr key={`users-${index}`}>
  //                         <td>{index + 1}</td>
  //                         <td>{item.email}</td>
  //                         <td>{item.username}</td>
  //                         <td>
  //                           <button
  //                             className='btn btn-danger'
  //                             onClick={() => handleDeleteUser(item)}
  //                           >
  //                             Delete
  //                           </button>
  //                         </td>
  //                       </tr>
  //                     )
  //                   })}
  //               </>
  //             )}
  //           </>
  //         )}
  //       </tbody>
  //     </Table>
  //   </Container>
  // )

  return <></>
}

export default TableUser
