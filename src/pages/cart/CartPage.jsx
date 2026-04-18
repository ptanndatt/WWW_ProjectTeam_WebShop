import { Link } from "react-router-dom";
import { mockProducts } from "../../data/mockProducts";

export default function CartPage() {
  const cartItems = mockProducts.slice(0, 3);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shippingFee = 30000;
  const grandTotal = total + shippingFee;

  return (
    <div className="container py-5">
      <h1 className="page-title">Giỏ hàng</h1>
      <p className="page-subtitle">
        Kiểm tra sản phẩm trước khi tiến hành thanh toán.
      </p>

      <div className="row g-4 align-items-start">
        <div className="col-lg-8">
          <div className="cart-box">
            {cartItems.map((item) => (
              <div className="cart-item-row" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-info">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="text-muted mb-2">{item.category}</p>
                  <div className="product-price">
                    {item.price.toLocaleString("vi-VN")} đ
                  </div>
                </div>

                <div className="cart-item-qty">
                  <label className="form-label fw-bold">Số lượng</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    defaultValue="1"
                  />
                </div>

                <div className="cart-item-action">
                  <button className="btn btn-outline-danger">Xóa</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="summary-box">
            <h4 className="mb-3">Tóm tắt đơn hàng</h4>

            <div className="d-flex justify-content-between mb-2">
              <span>Tạm tính</span>
              <strong>{total.toLocaleString("vi-VN")} đ</strong>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Phí vận chuyển</span>
              <strong>{shippingFee.toLocaleString("vi-VN")} đ</strong>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-3">
              <span>Tổng cộng</span>
              <strong className="product-price">
                {grandTotal.toLocaleString("vi-VN")} đ
              </strong>
            </div>

            <Link to="/checkout" className="btn btn-product w-100">
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}