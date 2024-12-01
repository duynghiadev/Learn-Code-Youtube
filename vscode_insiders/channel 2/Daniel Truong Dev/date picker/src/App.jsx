import DateContainer from "./components/DateContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="date-container">
        <DateContainer />
      </div>
    </div>
  );
}

export default App;
