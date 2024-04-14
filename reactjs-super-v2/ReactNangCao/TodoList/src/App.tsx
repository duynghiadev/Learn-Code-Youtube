import TodoList from './components/TodoList'
import Watch from './components/Watch'
import Slider from './components/Slider/Slider'
import Count from './components/Count'
import Counter from './components/Counter'
import WelcomeOld from './components/Welcome/Type Old No useContext/Welcome'
import WelcomeNew from './components/Welcome/Type New useContext/Welcome'
import AutoInput from './components/AutoInput'
import WelcomeUseDebugValue from './components/useDebugValue/Welcome'
import ProductList from './components/ProductList useDeferredValue'
import ProductListUseTransition from './components/ProductList useTransition'
import MainLayout from './layouts/MainLayout'
import Manager from './components/Manager/Manager'

function App() {
  return (
    <div>
      {/*<TodoList />*/}
      {/*<Watch />*/}
      {/*<Slider />*/}
      {/* <Count /> */}
      {/* <Counter /> */}
      {/* <WelcomeOld /> */}
      {/*<WelcomeNew />*/}
      {/*<AutoInput />*/}
      {/*<WelcomeUseDebugValue />*/}
      {/*<ProductList />*/}
      {/*<ProductListUseTransition />*/}
      <MainLayout>
        <Manager />
      </MainLayout>
    </div>
  )
}

export default App
