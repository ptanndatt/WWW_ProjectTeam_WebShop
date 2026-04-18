import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
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
          </ul>

          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Link className="btn nav-btn-login" to="/login">
              Đăng nhập
            </Link>
            <Link className="btn nav-btn-register" to="/register">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}