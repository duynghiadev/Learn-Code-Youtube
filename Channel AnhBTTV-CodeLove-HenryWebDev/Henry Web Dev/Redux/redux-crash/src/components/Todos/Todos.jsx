import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import { markComplete } from "../../store/actions/todoActions";

const Todos = ({ todos, markComplete }) => {
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" onChange={markComplete} />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { markComplete })(Todos);
