import { useEffect, useState } from "react";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/adminService";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await getAllCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Lỗi lấy danh mục:", error);
      setMessage(
        error.response?.data?.message || "Không lấy được danh sách danh mục"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
    });
    setEditingId(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.name.trim()) {
      setMessage("Vui lòng nhập tên danh mục");
      return;
    }

    if (!formData.description.trim()) {
      setMessage("Vui lòng nhập mô tả danh mục");
      return;
    }

    try {
      if (editingId) {
        const res = await updateCategory(editingId, formData);
        setMessage(res?.message || "Cập nhật danh mục thành công");
      } else {
        const res = await createCategory(formData);
        setMessage(res?.message || "Thêm danh mục thành công");
      }

      resetForm();
      await fetchCategories();
    } catch (error) {
      console.error("Lỗi lưu danh mục:", error);
      setMessage(
        error.response?.data?.message || "Thao tác danh mục thất bại"
      );
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData({
      name: category.name || "",
      description: category.description || "",
    });
    setMessage("");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa danh mục này?");
    if (!confirmDelete) return;

    try {
      const res = await deleteCategory(id);
      setMessage(res?.message || "Xóa danh mục thành công");
      if (editingId === id) resetForm();
      await fetchCategories();
    } catch (error) {
      console.error("Lỗi xóa danh mục:", error);
      setMessage(
        error.response?.data?.message || "Xóa danh mục thất bại"
      );
    }
  };

  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý danh mục</h1>
      <p className="page-subtitle">
        Thêm, sửa và xóa danh mục sản phẩm từ hệ thống backend.
      </p>

      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="admin-box">
            <h4 className="mb-3">
              {editingId ? "Cập nhật danh mục" : "Thêm danh mục mới"}
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nhập tên danh mục"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="4"
                  placeholder="Nhập mô tả danh mục"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-product flex-fill">
                  {editingId ? "Cập nhật" : "Thêm mới"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetForm}
                  >
                    Hủy
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="admin-table-wrap">
            {loading ? (
              <div className="empty-box">Đang tải danh mục...</div>
            ) : categories.length === 0 ? (
              <div className="empty-box">Chưa có danh mục nào.</div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tên danh mục</th>
                      <th>Mô tả</th>
                      <th style={{ width: "180px" }}>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.description || "Không có mô tả"}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => handleEdit(category)}
                            >
                              Sửa
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(category.id)}
                            >
                              Xóa
                            </button>
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
      </div>
    </div>
  );
}