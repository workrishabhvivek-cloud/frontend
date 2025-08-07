import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authToken = localStorage.getItem("auth");

  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
