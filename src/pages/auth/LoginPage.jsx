import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { login as loginApi } from "../../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = await loginApi(formData);

      if (data?.status) {
        login(data);

        // 🔥 FIX ROLE
        if (data.role === "ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="form-box mx-auto" style={{ maxWidth: 400 }}>
        <h3>Đăng nhập</h3>

        <form onSubmit={handleLogin}>
          <input
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={handleChange}
          />

          {message && <div className="alert alert-danger">{message}</div>}

          <button className="btn btn-primary w-100">
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="mt-3 text-center">
          <Link to="/forgot">Quên mật khẩu?</Link>
        </div>

        <p className="mt-2 text-center">
          Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
}
