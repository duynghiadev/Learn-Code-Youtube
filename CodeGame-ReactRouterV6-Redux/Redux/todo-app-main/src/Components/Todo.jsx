import { TodoInput } from "./TodoInput";
import Todolist from "./Todolist";
import { useState } from "react";
import { nanoid } from "nanoid";

function Todo() {
  let todoArr = JSON.parse(localStorage.getItem("todos")) || [];

  
    if (todoArr.length === 0) {
      todoArr = [
        {
          title: "Hey, welcome to the todo list application",
          status: false,
          id: nanoid(4),
        },
        {
          title: "I am completed todo",
          status: true,
          id: nanoid(4),
        },
        {
          title: "You can also delet todo from list by clicking delet button",
          status: false,
          id: nanoid(4),
        },
      ];
      console.log("Hey....sets the array");
    } else {
      console.log("Hey....");
    }
  

  const [todos, setTodos] = useState(todoArr);

  const [page, setPage] = useState(1);
  const [show, setShow] = useState(true);

  const getTodo = (todo) => {
    const newtodo = {
      title: todo,
      status: false,
      id: nanoid(4),
    };

    setTodos([...todos, newtodo]);
  };

  const handleStatus = (id) => {
    //find the todo with id
    // cahnge the status
    // set the new todos
    setTodos(todos.map((e) => (e.id === id ? { ...e, status: !e.status } : e)));
  };

  const handleDelet = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  localStorage.setItem("todos", JSON.stringify(todos));
  // console.log(page);

  return (
    <div>
      <div className="todoContainer">
        <div className="navbar"><h1 style={{fontSize:"55px" }}>Todos List </h1></div>
       <div className="boxmain">
        <TodoInput getTodo={getTodo} />
        {show ? (
          <div >
            <Todolist
              todos={todos.slice(5 * (page - 1), 5 * page)}
              handleStatus={handleStatus}
              handleDelet={handleDelet}
            />
            <button
              className="addTodoBtn"
              onClick={() => {
                page !== 1 ? setPage(page - 1) : setPage(page);
              }}
            >
              Prev
            </button>
            <button
              className="addTodoBtn"
              onClick={() => {
                page !== Math.ceil(todos.length / 5)
                  ? setPage(page + 1)
                  : setPage(page);
              }}
            >
              Next
            </button>
          </div>
          
        ) : null}
        </div>
      </div>
      <button
        style={{
          display: "block",
          margin: "10px auto",
        }}
        className="addTodoBtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show Completed Todo's" : "Show All Todo's"}
      </button>

      {show ? null : (
        <Todolist
          
          todos={todos.filter((todo) => todo.status === true)}
          handleStatus={handleStatus}
          handleDelet={handleDelet}
        />
      )}
    </div>
  );
}

export { Todo };
