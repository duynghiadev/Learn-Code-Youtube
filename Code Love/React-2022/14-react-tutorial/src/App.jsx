import './App.css'
import Counter from './component/Counter'
import Counter1 from './component/Counter1'

function App() {
  const urlImage =
    'https://plus.unsplash.com/premium_photo-1683141316518-70595b251f01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className='App'>
      <img className='img_feature' src={urlImage} alt='photo' />
      {/* <Counter /> */}
      <Counter1 />
    </div>
  )
}

export default App

// reserve keyword
