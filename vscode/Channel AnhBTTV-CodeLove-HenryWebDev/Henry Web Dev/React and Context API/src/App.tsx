import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import MovieContextProvider from "./contexts/MovieContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemeBtn from "./contexts/ToggleThemeButton";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <Movies />
              <ToggleThemeBtn />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
