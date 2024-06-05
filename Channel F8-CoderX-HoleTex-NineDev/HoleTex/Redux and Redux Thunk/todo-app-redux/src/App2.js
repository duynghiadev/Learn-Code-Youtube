import { Divider, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Filters from "./redux-thunk/components/Filters";
import TodoList from "./redux-thunk/components/TodoList";
import { fetchTodos } from "./redux-thunk/components/TodoList/todosSlice";
import { setupServer } from "./redux-thunk/fakeApis";

if (process.env.NODE_ENV === "development") {
  setupServer();
}

const { Title } = Typography;

function App2() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX THUNK</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App2;
