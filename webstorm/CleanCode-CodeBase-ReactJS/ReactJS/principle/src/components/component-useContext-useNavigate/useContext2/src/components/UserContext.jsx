/**
 * Bạn cần tạo một Context bằng cách sử dụng createContext từ React và sau đó export nó. UserContext sẽ được sử dụng để truyền thông tin người dùng qua các thành phần trong ứng dụng.
 */
// UserContext.js
import { createContext } from 'react'

const UserContext = createContext()

export default UserContext
