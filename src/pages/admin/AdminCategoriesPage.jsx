export default function AdminCategoriesPage() {
  const categories = ["Máy tính", "Mỹ phẩm", "Thời trang", "Sách"];

  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý danh mục</h1>
      <p className="page-subtitle">Quản lý các nhóm sản phẩm trong hệ thống.</p>

      <div className="admin-page-actions">
        <button className="btn btn-success">+ Thêm danh mục</button>
      </div>

      <div className="admin-table-wrap">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên danh mục</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category}>
                <td>{index + 1}</td>
                <td>{category}</td>
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
  );
}