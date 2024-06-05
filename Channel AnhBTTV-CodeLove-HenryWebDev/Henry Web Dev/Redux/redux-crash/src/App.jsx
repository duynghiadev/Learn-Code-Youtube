import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
