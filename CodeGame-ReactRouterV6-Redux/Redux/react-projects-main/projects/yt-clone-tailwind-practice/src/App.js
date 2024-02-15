import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./views/Feed";
import SearchResults from "./views/SearchResults";
import VideoDetail from "./views/VideoDetail";

function App() {
  return (
    <div className="bg-black h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/searchResults/:searchTerm" element={<SearchResults />} />
        <Route path="/videoDetail/:videoId" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
