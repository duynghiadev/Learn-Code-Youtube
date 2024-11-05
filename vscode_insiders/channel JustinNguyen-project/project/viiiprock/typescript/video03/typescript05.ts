// Pick<T, Keys>

interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TodoInfo = Pick<Todo, "title" | "description">;

const myTodo: TodoInfo = {
  title: "bài tập về nhà",
  description: "bài tập toán",
};
console.log(myTodo);
