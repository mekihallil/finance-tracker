import { Navigate, Outlet } from "react-router";

export const ProtectedRouter = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
