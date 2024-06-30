import Counter from "./components/Counter";
import CounterAndAlert from "./components/CounterAndAlert";
import Tasks from "./components/Tasks";
import CounterBatchUpdate from "./components/CounterBatchUpdate";
import CounterMixUpdates from "./components/CounterMixUpdates";
import AddTask from "./components/AddTask";
import FriendTasks from "./components/FriendTasks";
import Form from "./components/Form";
import "./styles.css";

const App1 = () => {
  return (
    <div className="App">
      <Tasks />
      <hr />
      <Counter />
      <hr />
      <CounterAndAlert />
      <hr />
      <CounterBatchUpdate />
      <hr />
      <CounterMixUpdates />
      <hr />
      <Form />
      <hr />
      <AddTask />
      <hr />
      <FriendTasks />
    </div>
  );
};

export default App1;
