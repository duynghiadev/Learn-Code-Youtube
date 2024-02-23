import "./App.css";
import {
  Hero,
  NavBar,
  IntroductionFlex,
  IntroductionGrid,
  NewsLetterFlex,
  NewsLetterGrid,
  PriceOptions,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <IntroductionFlex /> */}
      <IntroductionGrid />
      <NewsLetterFlex />
      {/* <NewsLetterGrid /> */}
      <PriceOptions />
      <Footer />
    </div>
  );
}

export default App;
