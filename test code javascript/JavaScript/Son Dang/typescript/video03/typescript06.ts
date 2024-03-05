// Omit<T, Keys>

interface Todo {
  id: number
  title: string
  description?: string
  isCompleted: boolean
}

type TodoInfo = Omit<Todo, 'title' | 'description'>

const myTodo: TodoInfo = {
  id: 123,
  isCompleted: false
}
console.log(myTodo)