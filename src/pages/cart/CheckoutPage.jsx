export default function CheckoutPage() {
  return (
    <div className="container py-5">
      <h1 className="page-title">Thanh toán</h1>
      <p className="page-subtitle">
        Nhập thông tin nhận hàng và phương thức thanh toán.
      </p>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="form-box">
            <h2>Thông tin giao hàng</h2>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Họ và tên</label>
                  <input type="text" className="form-control" placeholder="Nguyễn Văn A" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Số điện thoại</label>
                  <input type="text" className="form-control" placeholder="09xxxxxxxx" />
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="example@gmail.com" />
                </div>

                <div className="col-12">
                  <label className="form-label">Địa chỉ nhận hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập địa chỉ cụ thể" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phương thức thanh toán</label>
                  <select className="form-select">
                    <option>Thanh toán khi nhận hàng</option>
                    <option>Chuyển khoản ngân hàng</option>
                    <option>Ví điện tử</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ghi chú</label>
                  <input type="text" className="form-control" placeholder="Giao giờ hành chính..." />
                </div>
              </div>

              <button type="button" className="btn btn-product w-100 mt-4">
                Xác nhận đặt hàng
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="summary-box">
            <h4 className="mb-3">Thông tin đơn hàng</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>3 sản phẩm</span>
              <strong>44.350.000 đ</strong>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Phí vận chuyển</span>
              <strong>30.000 đ</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Tổng thanh toán</span>
              <strong className="product-price">44.380.000 đ</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}