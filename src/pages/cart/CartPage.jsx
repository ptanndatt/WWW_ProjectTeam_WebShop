import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCart,
  updateCart,
  removeCartItem,
  clearCart,
} from "../../services/cartService";

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchCart = async () => {
    try {
      setLoading(true);
      setMessage("");
      const data = await getCart();
      console.log("CART RESPONSE:", data);
      setCart(data);
    } catch (error) {
      console.error("Lỗi lấy giỏ hàng:", error);
      setMessage(error.response?.data?.message || "Không lấy được giỏ hàng");
      setCart(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const items = useMemo(() => {
    if (!cart) return [];

    if (Array.isArray(cart)) return cart;
    if (Array.isArray(cart.items)) return cart.items;
    if (Array.isArray(cart.cartItems)) return cart.cartItems;
    if (Array.isArray(cart.data)) return cart.data;

    return [];
  }, [cart]);

  const getProductFromItem = (item) => {
    if (item?.product) return item.product;
    return item;
  };

  const getQuantityFromItem = (item) => {
    return item?.quantity ?? item?.qty ?? 1;
  };

  const getPriceFromItem = (item) => {
    const product = getProductFromItem(item);
    return product?.price ?? item?.price ?? 0;
  };

  const getItemId = (item) => {
    return item?.id;
  };

  const subTotal = items.reduce((sum, item) => {
    return sum + getPriceFromItem(item) * getQuantityFromItem(item);
  }, 0);

  const shippingFee = items.length > 0 ? 30000 : 0;
  const grandTotal = subTotal + shippingFee;

  const handleUpdateQty = async (itemId, quantity) => {
    try {
      await updateCart(itemId, Number(quantity));
      await fetchCart();
    } catch (error) {
      console.error("Lỗi cập nhật giỏ hàng:", error);
      setMessage(
        error.response?.data?.message || "Không cập nhật được giỏ hàng"
      );
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeCartItem(itemId);
      await fetchCart();
    } catch (error) {
      console.error("Lỗi xóa sản phẩm:", error);
      setMessage(error.response?.data?.message || "Không xóa được sản phẩm");
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart();
      await fetchCart();
    } catch (error) {
      console.error("Lỗi xóa toàn bộ giỏ hàng:", error);
      setMessage(error.response?.data?.message || "Không xóa được giỏ hàng");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="page-title">Giỏ hàng</h1>
      <p className="page-subtitle">
        Kiểm tra sản phẩm trước khi tiến hành thanh toán.
      </p>

      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <div className="row g-4 align-items-start">
        <div className="col-lg-8">
          <div className="cart-box">
            {loading ? (
              <div className="empty-box">Đang tải giỏ hàng...</div>
            ) : items.length === 0 ? (
              <div className="empty-box">Giỏ hàng của bạn đang trống.</div>
            ) : (
              <>
                {items.map((item, index) => {
                  const product = getProductFromItem(item);
                  const quantity = getQuantityFromItem(item);
                  const itemId = getItemId(item);
                  const image =
                    product?.images?.[0]?.imageUrl ||
                    product?.image ||
                    "https://via.placeholder.com/100x100?text=No+Image";

                  return (
                    <div
                      className="cart-item-row"
                      key={itemId || product?.id || index}
                    >
                      <div className="cart-item-image">
                        <img src={image} alt={product?.name || "product"} />
                      </div>

                      <div className="cart-item-info">
                        <h5 className="mb-1">{product?.name || "Không có tên"}</h5>
                        <p className="text-muted mb-2">
                          {product?.category?.name ||
                            product?.category ||
                            "Chưa có danh mục"}
                        </p>
                        <div className="product-price">
                          {(getPriceFromItem(item) * quantity).toLocaleString("vi-VN")} đ
                        </div>
                      </div>

                      <div className="cart-item-qty">
                        <label className="form-label fw-bold">Số lượng</label>
                        <input
                          type="number"
                          className="form-control"
                          min="1"
                          value={quantity}
                          onChange={(e) =>
                            handleUpdateQty(itemId, e.target.value)
                          }
                        />
                      </div>

                      <div className="cart-item-action">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleRemoveItem(itemId)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-3 text-end">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={handleClearCart}
                  >
                    Xóa toàn bộ giỏ hàng
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="summary-box">
            <h4 className="mb-3">Tóm tắt đơn hàng</h4>

            <div className="d-flex justify-content-between mb-2">
              <span>Tạm tính</span>
              <strong>{subTotal.toLocaleString("vi-VN")} đ</strong>
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