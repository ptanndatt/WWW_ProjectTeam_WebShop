import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="form-box">
            <h2>Đăng nhập</h2>
            <p className="page-subtitle">
              Đăng nhập để tiếp tục mua sắm và quản lý đơn hàng của bạn.
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <button type="button" className="btn btn-product w-100">
                Đăng nhập
              </button>
            </form>

            <p className="mt-3 mb-0 text-center">
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}