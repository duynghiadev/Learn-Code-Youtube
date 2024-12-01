import { connect } from "react-redux";
import PropsType from "prop-types";

const Navbar = ({ todos }) => {
  const length = todos.length;

  return (
    <div className="navbar">
      <h1>My Redux App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos: {length}</li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  todos: PropsType.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {})(Navbar);
