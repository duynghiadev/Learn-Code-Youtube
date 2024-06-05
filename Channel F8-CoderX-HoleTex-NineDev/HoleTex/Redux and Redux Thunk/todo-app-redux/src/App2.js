import { Divider, Typography } from "antd";
import "./App.css";
import Filters from "./redux-thunk/components/Filters";
import TodoList from "./redux-thunk/components/TodoList";
import { setupServer } from "./redux-thunk/fakeApis";

setupServer();

const { Title } = Typography;

function App2() {
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
