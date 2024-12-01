// Required<T>

interface Todo {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
}

type OptionalTodo = Partial<Todo>;
type RequiredTodo = Required<Todo>;

// This is error, since miss field description

const myTodo: RequiredTodo = {
  id: 123,
  title: "Làm bài tập",
  description: "Bài tập toán",
  // isCompleted: false,
};

myTodo.description = "Learning English";
myTodo.id = 345;
