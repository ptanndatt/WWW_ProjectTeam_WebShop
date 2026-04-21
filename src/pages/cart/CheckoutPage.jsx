import { useEffect, useState } from "react";
import { getCart, checkoutCart } from "../../services/cartService";

export default function CheckoutPage() {
  const [cart, setCart] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    shippingAddress: "",
    paymentMethod: "COD",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data);
      } catch (error) {
        console.error("Lỗi lấy giỏ hàng checkout:", error);
        setMessage(error.response?.data?.message || "Không lấy được giỏ hàng");
      }
    };

    fetchCart();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await checkoutCart(formData);
      setMessage(res?.message || "Đặt hàng thành công");
    } catch (error) {
      console.error("Lỗi checkout:", error);
      setMessage(error.response?.data?.message || "Đặt hàng thất bại");
    }
  };

  const items = cart?.cartItems || cart?.items || [];
  const subTotal =
    cart?.totalAmount ||
    items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  const shippingFee = 30000;
  const total = subTotal + shippingFee;

  return (
    <div className="container py-5">
      <h1 className="page-title">Thanh toán</h1>
      <p className="page-subtitle">
        Nhập thông tin nhận hàng và phương thức thanh toán.
      </p>

      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="form-box">
            <h2>Thông tin giao hàng</h2>

            <form onSubmit={handleCheckout}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    name="customerName"
                    className="form-control"
                    placeholder="Nguyễn Văn A"
                    value={formData.customerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Số điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="09xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Địa chỉ nhận hàng</label>
                  <input
                    type="text"
                    name="shippingAddress"
                    className="form-control"
                    placeholder="Nhập địa chỉ cụ thể"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phương thức thanh toán</label>
                  <select
                    name="paymentMethod"
                    className="form-select"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option value="COD">Thanh toán khi nhận hàng</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-product w-100 mt-4">
                Xác nhận đặt hàng
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="summary-box">
            <h4 className="mb-3">Thông tin đơn hàng</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>{items.length} sản phẩm</span>
              <strong>{subTotal.toLocaleString("vi-VN")} đ</strong>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Phí vận chuyển</span>
              <strong>{shippingFee.toLocaleString("vi-VN")} đ</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Tổng thanh toán</span>
              <strong className="product-price">
                {total.toLocaleString("vi-VN")} đ
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}