/**
 * UserContext.js: Tạo Context để chứa thông tin người dùng.
 */
/**
 * Trong ví dụ này, UserContext được sử dụng để chia sẻ thông tin người dùng giữa App, TaskList, và AddTask. useContext được sử dụng để đọc giá trị từ Context, và useState được sử dụng để quản lý trạng thái của biểu mẫu thêm công việc.
 */
// UserContext.js
import { createContext } from 'react'

const UserContext = createContext()

export default UserContext
