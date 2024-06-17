import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  // load theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  // style
  const style = isLightTheme ? light : dark;

  // load data context
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li
      style={style}
      onClick={() => {
        deleteTodo(todo.id);
      }}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
