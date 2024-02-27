import { userServ } from '../api/api'
import { getAllUsers } from '../redux/userSlice'
export const renderUserPage = (index) => {
  userServ
    .getUsersPage(index ? index : userFrom)
    .then((result) => {
      setTotalUser(result.data.content.totalRow)
      dispatch(getAllUsers(result.data.content.data))
    })
    .catch((error) => {
      console.log(error)
    })
}
