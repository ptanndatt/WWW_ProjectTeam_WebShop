import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout as logoutApi } from "../../services/authService";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutApi(); // gọi BE
    } catch (e) {
      console.log("Logout lỗi (bỏ qua)");
    }

    logout(); // clear context + localStorage
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="logo-box">W</div>
          <span className="brand-text">WebShop</span>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          {/* LEFT MENU */}
          <ul className="navbar-nav me-auto ms-lg-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Trang chủ
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Sản phẩm
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Giỏ hàng
              </NavLink>
            </li>

            {/* USER */}
            {user && user.role === "USER" && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Tài khoản
                </NavLink>
              </li>
            )}

            {/* ADMIN */}
            {user && user.role === "ADMIN" && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/orders">
                  Quản lý
                </NavLink>
              </li>
            )}
          </ul>

          {/* RIGHT */}
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            {!user ? (
              <>
                <Link className="btn nav-btn-login" to="/login">
                  Đăng nhập
                </Link>
                <Link className="btn nav-btn-register" to="/register">
                  Đăng ký
                </Link>
              </>
            ) : (
              <>
                <span className="d-flex align-items-center text-white me-2">
                  {user.role}
                </span>

                <button className="btn nav-btn-login" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
