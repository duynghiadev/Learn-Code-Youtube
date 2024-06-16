const TodoItem = ({ todo }) => {
  const style = {
    background: "rgb(240, 240, 240)",
    color: "black",
  };

  return <li style={style}>{todo.title}</li>;
};

export default TodoItem;
