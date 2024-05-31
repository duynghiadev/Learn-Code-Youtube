// Define the Todo interface
interface Todo {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
}

const todo: Todo = {
  id: 1,
  title: "Complete assignment",
  description: "Finish the task by tomorrow",
  isCompleted: false,
};

// 7:54 NonNullable
const nonNullableTodo: NonNullable<Todo> = {
  id: 2,
  title: "Attend meeting",
  description: "Meeting with team at 10:00 AM",
  isCompleted: true,
};
console.log("Non-Nullable Todo:", nonNullableTodo);
console.log("--------------------------------------------------");

// 9:40 Parameters
function logTodoDetails(todo: Todo) {
  console.log("Logged Todo:", todo);
}

logTodoDetails(todo);
console.log("--------------------------------------------------");

// 11:40 ConstructorParameters
class TodoList {
  constructor(...todos: Todo[]) {
    console.log("Todos:", todos);
  }
}

new TodoList(todo, nonNullableTodo);
console.log("--------------------------------------------------");

// 12:48 ReturnType
function createTodo(): Todo {
  return {
    id: 3,
    title: "Buy groceries",
    isCompleted: false,
  };
}

const createdTodo = createTodo();
console.log("Created Todo:", createdTodo);
console.log("--------------------------------------------------");

// 13:37 InstanceType
class TodoManager {
  todo: Todo;
  constructor(todo: Todo) {
    this.todo = todo;
  }

  displayTodo() {
    console.log("Todo:", this.todo);
  }
}

const todoInstance = new TodoManager(todo);
todoInstance.displayTodo();
console.log("--------------------------------------------------");

// 14:17 ThisParameterType
function logTodoTitle(this: Todo) {
  console.log("Todo Title:", this.title);
}

const todoThisParameterType = logTodoTitle.bind(todo);
todoThisParameterType();
console.log("--------------------------------------------------");

// 15:25 OmitThisParameter
function logMessage() {
  console.log("A generic log message");
}

const todoWithoutThisParameter = logMessage;
todoWithoutThisParameter();
console.log("--------------------------------------------------");

// 16:05 ThisType
const todoThisType: ThisType<Todo> = {
  id: 4,
  title: "Walk the dog",
  isCompleted: false,
};
console.log("This Type Todo:", todoThisType);
console.log("--------------------------------------------------");
