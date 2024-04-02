import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Error from './components/Error'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import VideoPageContainer from './components/VideoPageContainer'
import store from './utils/store'

function App() {
  return (
    <div className=''>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <VideoPageContainer />
      }
    ]
  }
])

export default App
