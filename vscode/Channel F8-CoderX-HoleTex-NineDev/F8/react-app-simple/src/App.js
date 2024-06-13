import Content from "./Content";
import { useState } from "react";
import styles from "./appStyle.module.css";
import ClockComponent from "./ClockComponent";
import AvatarComponent from "./AvatarComponent";
import FakeCommentsComponent from "./FakeCommentsComponent";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showClock, setShowClock] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [showFakeComments, setShowFakeComments] = useState(false);
  return (
    <div
      className="App"
      style={{
        padding: "32px",
      }}
    >
      <button
        className={styles.functionButton}
        onClick={() => setShowContent(!showContent)}
      >
        Toggle
      </button>

      <button
        className={styles.functionButton}
        onClick={() => setShowClock(!showClock)}
      >
        Show timer
      </button>

      <button
        className={styles.functionButton}
        onClick={() => setShowAvatar(!showAvatar)}
      >
        Show avatar
      </button>

      <button
        className={styles.functionButton}
        onClick={() => setShowFakeComments(!showFakeComments)}
      >
        Fake comments
      </button>
      {showAvatar && <AvatarComponent></AvatarComponent>}
      {showClock && <ClockComponent></ClockComponent>}
      {showContent && <Content></Content>}
      {showFakeComments && <FakeCommentsComponent></FakeCommentsComponent>}
    </div>
  );
}

export default App;
