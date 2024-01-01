// hooks/useUserList.tsx
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { addUser, deleteUser, editUser } from '../store/userListSlice'

const useUserList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.userList.users)

  const addUserHandler = (name: string) => {
    dispatch(addUser(name))
  }

  const deleteUserHandler = (userId: number) => {
    dispatch(deleteUser(userId))
  }

  const editUserHandler = (userId: number, newName: string) => {
    dispatch(editUser({ userId, newName }))
  }

  return {
    users,
    addUser: addUserHandler,
    deleteUser: deleteUserHandler,
    editUser: editUserHandler
  }
}

export default useUserList
