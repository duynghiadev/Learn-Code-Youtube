// Readonly<T>

interface Todo {
  id: number
  title?: string
  description?: string
  isCompleted: boolean
}

type ReadonlyTodo = Readonly<Todo>

const myTodo: ReadonlyTodo = {
  id: 123,
  title: 'Làm bài tập',
  description: 'Bài tập toán',
  isCompleted: false
}

Object.freeze(myTodo)
// myTodo.description = 'Bài tập văn'