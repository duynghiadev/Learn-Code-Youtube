import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Index from './components/Index';
import Login from './components/Login';
import Admin from './components/Admin';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <div className="App">
			<Routes>
				<Route path="/" element={<Index />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/admin" element={<Admin />}/>
				<Route path="/admin/user/create" element={<CreateUser />}/>
			</Routes>
        </div>
    );
}

export default App;
