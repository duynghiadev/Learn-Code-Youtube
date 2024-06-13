import { useSelector } from "react-redux";
import { todosSelector } from "../store/reducers/todoSlice";

const NavBar = () => {
  const todos = useSelector(todosSelector);

  return (
    <div className="navbar">
      <p>My Redux App Todos</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total Todos: {todos.length}</li>
      </ul>
    </div>
  );
};

export default NavBar;
