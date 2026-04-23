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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const data = await loginApi(formData);

      if (data?.status) {
        login(data); // 🔥 context

        if (data.role === "ROLE_ADMIN") {
          navigate("/admin/orders");
        } else {
          navigate("/");
        }
      } else {
        setMessage(data?.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="form-box">
            <h2>Đăng nhập</h2>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              {message && <div className="alert alert-info">{message}</div>}

              <button className="btn btn-primary w-100">
                {loading ? "Loading..." : "Login"}
              </button>
            </form>

            <p className="mt-3">
              Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
