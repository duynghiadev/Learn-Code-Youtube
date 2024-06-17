import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  // load theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  // style
  const style = isLightTheme ? light : dark;

  // load context todo
  const { addTodo } = useContext(TodoContext);

  // for this component only
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo..."
        onChange={onTitleChange}
        value={title}
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
