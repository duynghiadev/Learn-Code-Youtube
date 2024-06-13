import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Covid from "./views/Covid";
import { Countdown, NewCountdown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from "./views/Todo";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";
import YoutubeSearch from "./views/YoutubeSearch";

const App = () => {
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching TV", type: "DN" },
    { id: "todo2", title: "doing homework", type: "Basil" },
    { id: "todo3", title: "playing game", type: "DN" },
    { id: "todo4", title: "reading book", type: "Basil" },
  ]);

  // didmount
  useEffect(() => {
    // console.log(">>> run useEffect");
  }, [address]);

  useEffect(() => {
    // console.log(">>> run useEffect todos");
  }, [todos]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    // hook not merge state
    // ...spread syntax array js
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "DN",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const onTimesup = () => {
    // alert("Time up");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <Countdown onTimesup={onTimesup} />
            <span>--------------------------</span>
            <NewCountdown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={"All todo"}
              deleteDataTodo={deleteDataTodo}
            />
            <Todo
              todos={todos.filter((item) => item.type === "DN")}
              title={`DN's todo`}
              deleteDataTodo={deleteDataTodo}
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleOnchangeInput(event)}
            />
            <button type="button" onClick={(event) => handleEventClick(event)}>
              Click me
            </button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
          <Route path="/secret">
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
