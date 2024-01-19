/**
 * Ví dụ trên sử dụng react-query để quản lý trạng thái và caching của dữ liệu, react-router-dom để quản lý định tuyến, và fetch để tải dữ liệu từ API giả mạo (ở đây sử dụng JSONPlaceholder). Ngoài ra, cũng sử dụng useParams để lấy giá trị từ đường dẫn và useNavigate để thực hiện điều hướng.
 */
import { useQuery } from 'react-query'

export const useUser = (userId: string) => {
  const defineUser = ['user', userId]

  const functionUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return response.json()
  }

  const { data: user } = useQuery(defineUser, functionUser)

  return { user }
}
