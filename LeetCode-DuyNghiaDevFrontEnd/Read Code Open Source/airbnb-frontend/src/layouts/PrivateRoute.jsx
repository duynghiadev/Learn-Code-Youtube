import { userAdminLocalStorage } from "../api/localService";

const PrivateRoute = ({ children }) => {
  // điều hướng nếu không đăng nhập
  const userAdmin = userAdminLocalStorage.get();
  if (userAdmin?.id) {
    return children;
  }
  window.location.href = "/admin/login";
};

export default PrivateRoute;
