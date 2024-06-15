import "./App.css";
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemeBtn from "./contexts/ToggleThemeButton";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <ToggleThemeBtn />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
