import { mockProducts } from "../../data/mockProducts";

export default function AdminProductsPage() {
  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý sản phẩm</h1>
      <p className="page-subtitle">Thêm, sửa, xóa và theo dõi danh sách sản phẩm.</p>

      <div className="admin-page-actions">
        <button className="btn btn-success">+ Thêm sản phẩm</button>
        <button className="btn btn-outline-secondary">Xuất danh sách</button>
      </div>

      <div className="admin-table-wrap">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.slice(0, 6).map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price.toLocaleString("vi-VN")} đ</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-primary">Sửa</button>
                      <button className="btn btn-sm btn-danger">Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}