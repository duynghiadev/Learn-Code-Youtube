import { useEffect, useState } from "react";
import Header from "./components/Header";

import AnonymuousContactPage from "./pages/AnonymuousContactPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import Loading from "./components/Loading";

function App() {
  const [indexPage, setIndexPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [visibleModel, setVisibleModel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className=" h-screen w-screen bg-light overflow-hidden">
      <Header setIndexPage={setIndexPage} setVisibleModel={setVisibleModel} />
      <div className="w-full h-full relative">
        <HomePage setIndexPage={setIndexPage} />
        <WorksPage
          setIndexPage={setIndexPage}
          indexPage={indexPage}
          visibleModel={visibleModel}
          setVisibleModel={setVisibleModel}
        />
        <AnonymuousContactPage
          setIndexPage={setIndexPage}
          indexPage={indexPage}
        />
      </div>
      {loading ? <Loading /> : <></>}
    </div>
  );
}

export default App;
