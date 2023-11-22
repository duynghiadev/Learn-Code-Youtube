import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import HomePage from "./controllers/HomePage/HomePage";
import UserManager from "./controllers/UserManager/UserManager";
import { MainContext } from "./utils/contexts/MainContext";
import MainLayout from "./components/Layouts/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContext><MainLayout /></MainContext>,
    // loader: rootLoader,
    children: [
      {
        path: "",
        element: <HomePage />,
        // loader: teamLoader,
      },
      // {
      //   path: "user-manager",
      //   element: <UserManager />,
      //   // loader: teamLoader,
      // },
    ],
  },
  {
    path: "/admin",
    element: <UserManager />,
    // loader: rootLoader,
  }
 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
