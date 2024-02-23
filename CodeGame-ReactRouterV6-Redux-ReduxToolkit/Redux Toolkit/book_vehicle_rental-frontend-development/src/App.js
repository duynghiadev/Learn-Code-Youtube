import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Vehicles from './pages/Vehicles';
import ReserveForm from './pages/ReserveForm';
import Reservations from './pages/Reservations';
import AddVehicle from './pages/AddVehicle';
import RemoveVehicle from './pages/RemoveVehicle';
import VehicleDetails from './pages/VehicleDetails';
import VehicleReserve from './pages/VehicleReserve';

const App = () => (
  <div>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <ProtectedRoute>
              <Vehicles />
            </ProtectedRoute>
            )}
        />
        <Route path="/reservations" element={<Reservations />} />
        <Route
          path="/reservation/:car_id"
          element={<ReserveForm />}
        />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/remove-vehicle" element={<RemoveVehicle />} />
        <Route path="/details/:user_id" element={<VehicleDetails />} />
        <Route path="/reserve-vehicle" element={<VehicleReserve />} />
        <Route path="/register" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
