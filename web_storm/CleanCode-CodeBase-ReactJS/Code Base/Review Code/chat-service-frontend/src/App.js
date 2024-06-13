import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/auths/Login";
import HomePage from "./controllers/HomePage";
import ChatPage from "./controllers/ChatPage";
import OneToOne from "./components/chat-rooms/OneToOne";
import AuthProvider from "./contexts/AuthProvider";
// import AppProvider from './Context/AppProvider';
// import AddRoomModal from './components/Modals/AddRoomModal';
// import InviteMemberModal from './components/Modals/InviteMemberModal';

function App() {

  
  return (
    <BrowserRouter><AuthProvider>
      
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<ChatPage />} />
            <Route path="/chat" element={<OneToOne />} />
            
            <Route element={<Login />} path="signin" />
          </Route>
        </Routes>
      
    </AuthProvider></BrowserRouter>
  );
}

export default App;
