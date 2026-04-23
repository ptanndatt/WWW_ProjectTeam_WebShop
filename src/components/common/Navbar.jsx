import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout as logoutApi } from "../../services/authService";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutApi();
    } catch (e) {}

    logout();
    navigate("/login");
  };

  const isAdmin = user?.role === "ADMIN";

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="logo-box">W</div>
          <span className="brand-text">
            {isAdmin ? "Admin Panel" : "WebShop"}
          </span>
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
            {/* ===== ADMIN MENU ===== */}
            {isAdmin ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/dashboard">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/products">
                    Sản phẩm
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/categories">
                    Danh mục
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/orders">
                    Đơn hàng
                  </NavLink>
                </li>
              </>
            ) : (
              /* ===== USER MENU ===== */
              <>
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

                {user?.role === "USER" && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                      Tài khoản
                    </NavLink>
                  </li>
                )}
              </>
            )}
          </ul>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
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
                {/* NAME */}
                <span className="text-white fw-semibold">
                  👤 {user.fullName || user.email}
                </span>

                {/* ROLE */}
                <span className="badge bg-light text-dark">
                  {isAdmin ? "ADMIN" : "USER"}
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
