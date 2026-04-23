import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, roleRequired }) {
  const { user } = useAuth();

  // chưa login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // sai quyền
  if (roleRequired && user.role !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return children;
}
