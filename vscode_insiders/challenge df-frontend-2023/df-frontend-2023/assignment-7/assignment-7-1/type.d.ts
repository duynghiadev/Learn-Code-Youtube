interface UserData {
  id: number
  fullName: string
  email: string
  avatar: string
}
interface IBook {
  id: string
  name: string
  author: string
  topic: ITopic
}
interface ICreateBook {
  name: string
  author: string
  topicID: number
}
type ThemeType = 'light' | 'dark'
interface MeData {
  id: number
  email: string
  avatar: string
  fullName: string
}
interface IUserCreate {
  avatar?: string
  email: string
  fullName: string
  password: string
}
interface ITopic {
  code: string
  id: number
  name: string
} // response
interface SuccessResponse<T> {
  data: T
  metadata?: IMetadata
}
interface ErrorResponse {
  code: string
  error: string
  message: string
  errors: Array<{ error: string; field: string }>
  traceId: string
}
interface Message {
  message: string
}
type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
interface IMetadata {
  hasNext: boolean
  page: number
  pageSize: number
  sort: number
  totalPages: number
  totalRecords: number
}
