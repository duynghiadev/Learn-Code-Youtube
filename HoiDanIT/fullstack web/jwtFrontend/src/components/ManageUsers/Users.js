import { fetchAllUser } from '../../services/userService'
import './Users.scss'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Users = (props) => {
  const [listUsers, setListUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentLimit, setCurrentLimit] = useState(3)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchUsers()
  }, [currentPage])

  const fetchUsers = async () => {
    let response = await fetchAllUser(currentPage, currentLimit)
    if (response && response.data && response.data.EC === 0) {
      setTotalPages(response.data.DT.totalPages)
      setListUsers(response.data.DT.users)
    }
  }

  const handlePageClick = async (event) => {
    setCurrentPage(+event.selected + 1)
  }

  return (
    <div className='container'>
      <div className='manage-users-container'>
        <div className='user-header'>
          <div>
            <h3>Table Users</h3>
            <div className='action'>
              <button className='btn btn-success'>Refresh</button>
              <button className='btn btn-primary'>Add new user</button>
            </div>
          </div>
          <div className='user-body'>
            <table className='table table-bordered table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Number Order</th>
                  <th scope='col'>Id</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Username</th>
                  <th scope='col'>Group</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listUsers && listUsers.length > 0 ? (
                  <>
                    {listUsers.map((item, index) => {
                      return (
                        <tr key={`row-${index}`}>
                          <td>{index + 1}</td>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>{item.Group ? item.Group.name : ''}</td>
                          <td>
                            <button className='btn btn-warning'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>
                      )
                    })}
                  </>
                ) : (
                  <>
                    <tr>
                      <td>Not found users</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 0 && (
            <div className='user-footer'>
              <ReactPaginate
                nextLabel='next >'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={4}
                pageCount={totalPages}
                previousLabel='< previous'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakLabel='...'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
                renderOnZeroPageCount={null}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Users
