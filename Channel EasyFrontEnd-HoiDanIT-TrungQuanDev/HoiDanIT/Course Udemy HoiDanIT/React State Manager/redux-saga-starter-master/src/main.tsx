import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux"
import { store } from './redux/store.ts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './screens/home.page.tsx';
import UserPage from './screens/user.page.tsx';
import LoginPage from './screens/login.page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: "user",
        element: <UserPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>,
)
