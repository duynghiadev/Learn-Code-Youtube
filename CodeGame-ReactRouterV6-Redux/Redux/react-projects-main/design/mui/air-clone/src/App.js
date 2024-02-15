import { CssBaseline } from "@mui/material";
import Header from "./components/NavBar/NavBar";
import FilterBar from "./components/FilterBar";
import TravelLocations from "./components/TravelLocations";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <FilterBar />
      <TravelLocations />
    </>
  );
}

export default App;
