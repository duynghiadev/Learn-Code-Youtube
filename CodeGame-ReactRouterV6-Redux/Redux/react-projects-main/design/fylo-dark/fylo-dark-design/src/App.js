import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Features from "./components/features/Features";
import Introduction from "./components/intro/Introduction";
import NavBar from "./components/nav/NavBar";
import Productivity from "./components/productivity/Productivity";
import Reviews from "./components/reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Introduction />
      <Features />
      <Productivity />
      <Reviews />
    </BrowserRouter>
  );
}

export default App;
