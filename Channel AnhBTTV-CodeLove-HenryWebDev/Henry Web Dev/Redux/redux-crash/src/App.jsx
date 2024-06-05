import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;
