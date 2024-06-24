import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import CityPage from "./pages/CityPage";
import UserPage from "./pages/UserPage";
import MainLayout from "./layouts/MainLayout";
import RoomDetailPage from "./pages/RoomDetailPage";
import LoginAdmin from "./pages/Admin/LoginAdmin/LoginAdmin";
import RegisterAdmin from "./pages/Admin/RegisterAdmin/RegisterAdmin";
import ForgetPassword from "./pages/Admin/ForgetPassword/ForgetPassword";
import AdminLayout from "./layouts/AdminLayout";
import UserAdminPage from "./pages/Admin/User/UserAdminPage";
import RoomAdminPage from "./pages/Admin/Room/RoomAdminPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ChartAdminPage from "./pages/Admin/Chart/ChartAdminPage";

function App() {
  return (
    <>
      <Spinner />
      <ScrollToTopButton />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* CLIENT PAGE */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/roombycity/:cityName" element={<CityPage />} />
          <Route
            path="/roomdetail/:roomId"
            element={
              <MainLayout>
                <RoomDetailPage />
              </MainLayout>
            }
          />
          <Route
            path="/personal-info"
            element={
              <MainLayout>
                <UserPage />
              </MainLayout>
            }
          />
          {/* ADMIN PAGE */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="user" element={<UserAdminPage />} />
            <Route path="room" element={<RoomAdminPage />} />
            <Route path="chart" element={<ChartAdminPage />} />
            <Route path="login" element={<LoginAdmin />} />
            <Route path="register" element={<RegisterAdmin />} />
            <Route path="forgot-password" element={<ForgetPassword />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
