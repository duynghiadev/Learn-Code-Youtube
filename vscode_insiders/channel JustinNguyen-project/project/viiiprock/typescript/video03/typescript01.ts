// Partial<T>

interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

type OptionalTodo = Partial<Todo>;

// if declera miss one of each value so it will error (we use type Todo)
const myTodo: Todo = {
  id: 123,
  title: "Làm bài tập",
  description: "Bài tập toán",
  isCompleted: false,
};

// so I using type OptionalTodo, then it will no error
const myTodo_1: OptionalTodo = {
  id: 345,
  title: "Learn English",
};

function updateTodo(input: Todo, updateFields: OptionalTodo) {
  return { ...input, ...updateFields };
}

function updateTodo_1(input: OptionalTodo, updateFields: OptionalTodo) {
  return { ...input, ...updateFields };
}

console.log(updateTodo(myTodo, { description: "Bài tập văn" }));
console.log("\n");
console.log(updateTodo_1(myTodo_1, { description: "Speaking Japanese" }));
