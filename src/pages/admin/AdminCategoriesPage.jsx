import {useState} from "react";

export default function AdminCategoriesPage() {
  const categories = ["Máy tính", "Mỹ phẩm", "Thời trang", "Sách"];
    const [showForm, setShowForm] = useState(false);
    const [newCategory, setNewCategory] = useState("");
  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý danh mục</h1>
      <p className="page-subtitle">Quản lý các nhóm sản phẩm trong hệ thống.</p>

      <div className="admin-page-actions">
          <button
              className="btn btn-success"
              onClick={() => setShowForm(true)}
          >
              + Thêm danh mục
          </button>
      </div>

        {showForm && (
            <div className="card p-4 my-4">
                <h4>Thêm danh mục</h4>

                <input
                    className="form-control mb-2"
                    placeholder="Tên danh mục"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />

                <div className="d-flex gap-2">
                    <button
                        className="btn btn-primary"
                    >
                        Lưu
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => setShowForm(false)}
                    >
                        Hủy
                    </button>
                </div>
            </div>
        )}

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