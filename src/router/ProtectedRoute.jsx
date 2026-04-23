import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  // ❌ chưa login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ❌ sai role
  if (
    roleRequired &&
    role !== roleRequired &&
    !(roleRequired === "USER" && role === "ADMIN")
  )
    return children;
}
