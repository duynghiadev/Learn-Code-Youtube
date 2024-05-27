// Partial<T>

interface Todo {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

type OptionalTodo = Partial<Todo>

const myTodo: Todo = {
  id: 123,
  title: 'Làm bài tập',
  description: 'Bài tập toán',
  isCompleted: false
}

function updateTodo(input: Todo, updateFields: OptionalTodo) {
  return { ...input, ...updateFields }
}

console.log(updateTodo(myTodo, { description: 'Bài tập văn' }))