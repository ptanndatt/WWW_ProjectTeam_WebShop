export default function AdminOrdersPage() {
  const orders = [
    { id: "DH001", customer: "Nguyễn Văn A", total: 15500000, status: "Chờ xác nhận" },
    { id: "DH002", customer: "Trần Thị B", total: 28500000, status: "Đang giao" },
    { id: "DH003", customer: "Lê Văn C", total: 530000, status: "Hoàn tất" },
  ];

  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý đơn hàng</h1>
      <p className="page-subtitle">Theo dõi, cập nhật và xử lý trạng thái đơn hàng.</p>

      <div className="admin-table-wrap">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Khách hàng</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.total.toLocaleString("vi-VN")} đ</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Xem chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}