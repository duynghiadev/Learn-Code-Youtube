import React from "react";
// import List from "../con"
import {useSelector} from "react-redux"
import PropTypes from "prop-types";

const List = ( {todos, toggleTodo, remove } ) => {

    const todos1 = useSelector(state => state.todos)

    return (
        <div>
        <h1>To-Do List:</h1>
        <ul>
            {todos1.map((todo, index) => (
                <li
                    key={index}
                    onClick={() => toggleTodo(todo.title)}
                    style={{ textDecoration: todo.done ? "line-through" : "none"}}
                >
                    <span>{todo.title}</span>
                    <button onClick={() => remove(todo.title)}>usun</button>
                    {/*<button onClick={() => remove2s(todo.title)}>usun po 2s</button>*/}
                    <button>usun po 2s</button>
                </li>
            ))}


        </ul>
        </div>
    );
};



List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggleToggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default List;

