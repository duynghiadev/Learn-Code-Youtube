import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import MovieList from "./pages/MovieList";
import NotFound from "./pages/notFound";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/movies" >
            <Route index element={< MovieList title={"movies"} />} />
            <Route path=":id" element={< MovieDetails />} />
          </Route>
          <Route path="/series" >
            <Route index element={< MovieList title={"series"} />} />
            <Route path=":id" element={< MovieDetails />} />
          </Route>
          <Route path="/search" element={< MovieList title={"search"} />} />
          <Route path="/*" element={< NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}


export default App;
