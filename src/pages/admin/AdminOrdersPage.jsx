import { useEffect, useState } from "react";
import { getAdminOrders, updateOrderStatus } from "../../services/adminService";

const STATUS_OPTIONS = ["PENDING", "UNPAID", "PAID", "CANCELLED"];

const STATUS_LABELS = {
  PENDING: "Chờ xác nhận",
  UNPAID: "Chưa thanh toán",
  PAID: "Đã thanh toán",
  CANCELLED: "Đã hủy",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getAdminOrders();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Lỗi lấy danh sách đơn hàng:", error);
      setMessage(
        error.response?.data?.message || "Không lấy được danh sách đơn hàng"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setMessage("");
      const res = await updateOrderStatus(orderId, newStatus);
      setMessage(res?.message || "Cập nhật trạng thái thành công");
      await fetchOrders();
    } catch (error) {
      console.error("Lỗi cập nhật trạng thái:", error);
      setMessage(
        error.response?.data?.message || "Cập nhật trạng thái thất bại"
      );
    }
  };

  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý đơn hàng</h1>
      <p className="page-subtitle">
        Theo dõi và cập nhật trạng thái đơn hàng từ hệ thống backend.
      </p>

      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <div className="admin-table-wrap">
        {loading ? (
          <div className="empty-box">Đang tải danh sách đơn hàng...</div>
        ) : orders.length === 0 ? (
          <div className="empty-box">Chưa có đơn hàng nào.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Mã đơn</th>
                  <th>Ngày tạo</th>
                  <th>Tổng tiền</th>
                  <th>Giảm giá</th>
                  <th>Thành tiền</th>
                  <th>Mã KM</th>
                  <th>Trạng thái</th>
                  <th>Cập nhật</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleString("vi-VN")
                        : "Không rõ"}
                    </td>
                    <td>{(order.totalAmount || 0).toLocaleString("vi-VN")} đ</td>
                    <td>{(order.discountAmount || 0).toLocaleString("vi-VN")} đ</td>
                    <td>{(order.finalAmount || 0).toLocaleString("vi-VN")} đ</td>
                    <td>{order.promoCode || "Không có"}</td>
                    <td>
                      <span className="badge text-bg-secondary">
                        {STATUS_LABELS[order.status] || order.status}
                      </span>
                    </td>
                    <td style={{ minWidth: "220px" }}>
                      <div className="d-flex gap-2">
                        <select
                          className="form-select"
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(order.id, e.target.value)
                          }
                        >
                          {STATUS_OPTIONS.map((status) => (
                            <option key={status} value={status}>
                              {STATUS_LABELS[status]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}