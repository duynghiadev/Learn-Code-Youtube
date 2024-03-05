// Extract<UnionType, Union

type T0 = 'a' | 'b' | 'c'
type T1 = Extract<T0, 'a' | 'f' | 'c'>

interface Todo {
  id: number
  title: string
  description?: string
  isCompleted: boolean
}

interface HomeWork {
  title: string
  description?: string
  rate: 'high' | 'low'
}

type IntersectingKeys<T, U> = {
  [Key in Extract<keyof T, keyof U>]: T[Key]
}

type SharedKeys = IntersectingKeys<Todo, HomeWork>


const myTodo: SharedKeys = {
  title: 'Bài tập toán',
  description: 'Bài toán cộng'
}
console.log(myTodo)