import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="form-box">
            <h2>Đăng ký tài khoản</h2>
            <p className="page-subtitle">
              Tạo tài khoản mới để mua hàng nhanh hơn và theo dõi đơn hàng dễ hơn.
            </p>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập họ tên"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Nhập email"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Nhập mật khẩu"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Địa chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập địa chỉ"
                  />
                </div>
              </div>

              <button type="button" className="btn btn-product w-100 mt-4">
                Đăng ký
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