import { useState, useEffect } from "react";

function Splash({ tileClicked, tileValue }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <div>
      <h1>You clicked tile {tileClicked}!</h1>
      <h2>The number behind the tile was {tileValue}.</h2>
    </div>
  ) : null;
}

export default Splash;
