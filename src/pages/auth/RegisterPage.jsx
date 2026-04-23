import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Mật khẩu xác nhận không khớp");
      return;
    }
    if (formData.password.length < 6) {
      setMessage("Mật khẩu phải >= 6 ký tự");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phone: formData.phone,
      };

      const data = await register(payload);

      if (data?.status) {
        setMessage(
          "Đăng ký thành công, vui lòng kiểm tra email để xác thực tài khoản",
        );
        setTimeout(() => {
          navigate("/login");
        }, 2000);

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
        });
      } else {
        setMessage(data?.message || "Đăng ký thất bại");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="form-box">
            <h2>Đăng ký tài khoản</h2>
            <p className="page-subtitle">
              Tạo tài khoản mới để mua hàng nhanh hơn và theo dõi đơn hàng dễ
              hơn.
            </p>

            <form onSubmit={handleRegister}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Nhập họ tên"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Số điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Nhập lại mật khẩu"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Địa chỉ</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Nhập địa chỉ"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {message && (
                <div className="alert alert-info mt-3 py-2" role="alert">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-product w-100 mt-4"
                disabled={loading}
              >
                {loading ? "Đang đăng ký..." : "Đăng ký"}
              </button>
            </form>

            <p className="mt-3 mb-0 text-center">
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
