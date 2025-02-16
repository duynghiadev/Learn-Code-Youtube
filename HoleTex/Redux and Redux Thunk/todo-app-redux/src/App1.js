import { Divider, Typography } from "antd";
import "./App.css";
import Filters from "./react-redux-toolkit/components/Filters";
import TodoList from "./react-redux-toolkit/components/TodoList";

const { Title } = Typography;

function App1() {
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
      <Title style={{ textAlign: "center" }}>TODO APP1 with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App1;
