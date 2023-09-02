import logo from "./logo.svg";
import "./App.css";
import CountDown from "./CountDown";
function App() {
  let onTimesup = () => {
    alert(`Time's up!`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>--- A COUNTDOWN TIMMER WITH REACT ---</p>
        <div>
          <CountDown onTimesup={onTimesup} duration={60} />
        </div>
      </header>
    </div>
  );
}

export default App;
