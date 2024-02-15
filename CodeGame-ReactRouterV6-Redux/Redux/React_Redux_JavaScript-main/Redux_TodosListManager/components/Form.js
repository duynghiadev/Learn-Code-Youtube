import React from "react"
import {useState} from "react";
// import Form from "../containers/Form"
import {combineReducers} from "../redux/reducer";

const Form = ({ addTodo }) => {
    const [todoName, setTodoName] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoName);
    setTodoName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="todoName"
                name="todoName"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
            />

            <button type="submit">Dodaj</button>


        </form>
    );
}

// Form.propTypes = {
//   addToDo: PropTypes.func
// }
//
export default Form;
