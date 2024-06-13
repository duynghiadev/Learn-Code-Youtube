import './App.css';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
        <TodoList/>
    </div>
  );
}

export default App;

// có 1 component root APP
// các componet con
// 1. Truyền data từ con lên cha
// 2. truyền data từ cha xuống con
