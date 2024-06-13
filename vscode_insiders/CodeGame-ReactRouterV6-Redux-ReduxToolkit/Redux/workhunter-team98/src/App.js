import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { login, logout, selectUser } from "./features/user/userSlice";
import Login from "./Login";
import Widgets from "./Widgets";
import { auth } from "./firebase";


function App() {
const dispatch = useDispatch()
  useEffect(()=> {
    auth.onAuthStateChanged( userAuth => {
      if(userAuth){
        // user logged in
        dispatch(login({
          email:userAuth.email,
          uid : userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL}))
      }
      else {
        dispatch(logout)

      }
    })

  },[])
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* Added Sidebar */}
          <Sidebar />
          <Feed/>
          <Widgets/>
         
        </div>
      )}

    </div>
  );
}

export default App;
