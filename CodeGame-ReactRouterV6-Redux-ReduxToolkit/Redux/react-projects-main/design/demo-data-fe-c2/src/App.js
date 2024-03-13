import './App.css'
import { Footer, Hero, IntroductionGrid, NavBar, NewsLetterFlex, PriceOptions } from './components'

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
  )
}

export default App
