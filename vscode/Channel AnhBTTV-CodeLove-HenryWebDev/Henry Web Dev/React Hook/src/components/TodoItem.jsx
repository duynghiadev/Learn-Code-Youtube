const TodoItem = ({ todo, deleteTodo }) => {
  const style = {
    background: "rgb(240, 240, 240)",
    color: "black",
  };

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
