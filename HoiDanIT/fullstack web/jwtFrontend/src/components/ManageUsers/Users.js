import { deleteUser, fetchAllUser } from '../../services/userService'
import './Users.scss'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { toast } from 'react-toastify'
import ModalDelete from './ModalDelete'
import ModalUser from './ModalUser'

const Users = (props) => {
  const [listUsers, setListUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentLimit, setCurrentLimit] = useState(3)
  const [totalPages, setTotalPages] = useState(0)

  // modal delete user
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const [dataModal, setDataModal] = useState({})

  // modal update/create user
  const [isShowModalUser, setIsShowModalUser] = useState(false)
  const [actionModalUser, setActionModalUser] = useState('CREATE')
  const [dataModalUser, setDataModalUser] = useState({})

  useEffect(() => {
    fetchUsers()
  }, [currentPage])

  const fetchUsers = async () => {
    let response = await fetchAllUser(currentPage, currentLimit)
    if (response && response.EC === 0) {
      setTotalPages(response.DT.totalPages)
      setListUsers(response.DT.users)
    }
  }

  const handlePageClick = async (event) => {
    setCurrentPage(+event.selected + 1)
  }

  const handleDeleteUser = async (user) => {
    setDataModal(user)
    setIsShowModalDelete(true)
  }

  const handleClose = () => {
    setIsShowModalDelete(false)
    setDataModal({})
  }

  const confirmDeleteUser = async () => {
    let response = await deleteUser(dataModal)
    if (response && response.EC === 0) {
      toast.success(response.EM)
      await fetchUsers()
      setIsShowModalDelete(false)
    } else {
      toast.error(response.EM)
    }
  }

  const onHideModalUser = async () => {
    setIsShowModalUser(false)
    setDataModalUser({})
    await fetchUsers()
  }

  const handleEditUser = (user) => {
    setActionModalUser('UPDATE')
    setDataModalUser(user)
    setIsShowModalUser(true)
  }

  const handleRefresh = async () => {
    await fetchUsers()
  }

  return (
    <>
      <div className='container'>
        <div className='manage-users-container'>
          <div className='user-header'>
            <div>
              <div className='title mt-3'>
                <h3>Manage Users</h3>
              </div>
              <div className='action my-3'>
                <button className='btn btn-success refresh' onClick={() => handleRefresh()}>
                  <i className='fa fa-refresh'></i>
                  Refresh
                </button>
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    setIsShowModalUser(true)
                    setActionModalUser('CREATE')
                  }}
                >
                  <i className='fa fa-plus-circle'></i>
                  Add new user
                </button>
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
                            <td>{(currentPage - 1) * currentLimit + index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.Group ? item.Group.name : ''}</td>
                            <td>
                              <span
                                title='Edit'
                                className='edit'
                                onClick={() => handleEditUser(item)}
                              >
                                <i className='fa fa-pencil'></i>
                              </span>
                              <span
                                title='Delete'
                                className='delete'
                                onClick={() => handleDeleteUser(item)}
                              >
                                <i className='fa fa-trash-o'></i>
                              </span>
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

      <ModalDelete
        show={isShowModalDelete}
        handleClose={handleClose}
        confirmDeleteUser={confirmDeleteUser}
        dataModal={dataModal}
      />

      <ModalUser
        onHide={onHideModalUser}
        show={isShowModalUser}
        action={actionModalUser}
        dataModalUser={dataModalUser}
      />
    </>
  )
}

export default Users
