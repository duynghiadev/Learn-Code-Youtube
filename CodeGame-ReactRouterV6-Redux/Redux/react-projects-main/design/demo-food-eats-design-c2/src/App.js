import "./App.css";
import NavBar from "./components/NavBar";
import { AppContextProvider } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import SomeOtherView from "./views/SomeOtherView";

function App() {
  return (
    <AppContextProvider>
      <div className="max-w-[1240px] mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/some" element={<SomeOtherView />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
