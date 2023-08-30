const Todo = (props) => {
  // properties
  // parent => child
  // top => bottom
  const { todos, title, deleteDataTodo } = props;

  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todos-container">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todos-child">
              {todo.title} &nbsp;
              <span onClick={() => handleDelete(todo.id)}>x</span>
            </li>
          </div>
        );
      })}

      <hr />
    </div>
  );
};

export default Todo;
