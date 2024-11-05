// Record<Keys, T>

interface Todo {
  id: number;
  title?: string;
  description?: string;
  isCompleted: boolean;
}

type TaskType = "school" | "home";

type Task = Record<TaskType, Todo>;

const myTodo: Task = {
  home: {
    id: 123,
    title: "bài tập về nhà",
    description: "bài tập văn",
    isCompleted: true,
  },
  school: {
    id: 123,
    title: "bài tập về nhà",
    description: "bài tập văn",
    isCompleted: true,
  },
};
console.log(myTodo);
