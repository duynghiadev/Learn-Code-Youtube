// Exclude<UnionType, Union

type T0 = 'a' | 'b' | 'c'
type T1 = Exclude<T0, 'a'>

interface Todo {
  id: number
  title: string
  description?: string
  isCompleted: boolean
}

type todoInfo = Exclude<keyof Todo, 'id'>