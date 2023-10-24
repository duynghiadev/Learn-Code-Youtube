import { useContext } from "react";
import { StoreContext } from "./UseReducerWithContext";

function AddNewTodo() {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <button
      className="btn"
      onClick={() => {
        dispatch({ type: "ADD" });
      }}
    >
      Add new todo
    </button>
  );
}

export default AddNewTodo;
