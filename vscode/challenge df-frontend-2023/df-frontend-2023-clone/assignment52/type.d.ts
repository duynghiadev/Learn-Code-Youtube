interface IBook {
  id?: string
  name: string
  author: string
  topic: string
}
interface ICreateBook {
  name: string
  author: string
  topic: string
}
type ThemeType = 'light' | 'dark'

interface IUser {
  email: string
}
