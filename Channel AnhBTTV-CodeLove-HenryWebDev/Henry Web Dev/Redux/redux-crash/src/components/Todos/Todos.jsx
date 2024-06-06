import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import {
  deleteTodo,
  getTood,
  markComplete,
} from "../../store/actions/todoActions";
import { useEffect } from "react";

const Todos = ({ todos, markComplete, deleteTodo, getTood }) => {
  // get todos
  useEffect(() => {
    getTood();
  }, []);

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input type="checkbox" onChange={() => markComplete(todo.id)} />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { markComplete, deleteTodo, getTood })(
  Todos
);
