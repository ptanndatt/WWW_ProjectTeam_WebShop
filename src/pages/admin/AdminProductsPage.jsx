import { useEffect, useState } from "react";
import {
  getAllProducts,
  getAllCategories,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/adminService";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    files: null,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [productData, categoryData] = await Promise.all([
        getAllProducts(),
        getAllCategories(),
      ]);

      setProducts(Array.isArray(productData) ? productData : []);
      setCategories(Array.isArray(categoryData) ? categoryData : []);
    } catch (error) {
      console.error("Lỗi tải dữ liệu sản phẩm:", error);
      setMessage(
        error.response?.data?.message || "Không lấy được dữ liệu sản phẩm"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      categoryId: "",
      files: null,
    });

    const fileInput = document.getElementById("productFiles");
    if (fileInput) fileInput.value = "";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "files") {
      setFormData((prev) => ({
        ...prev,
        files,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildMultipartForm = () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("categoryId", formData.categoryId);

    if (formData.files && formData.files.length > 0) {
      for (let i = 0; i < formData.files.length; i++) {
        data.append("files", formData.files[i]);
      }
    }

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (
      !formData.name.trim() ||
      !formData.description.trim() ||
      !formData.price ||
      !formData.stock ||
      !formData.categoryId
    ) {
      setMessage("Vui lòng nhập đầy đủ thông tin sản phẩm");
      return;
    }

    try {
      const multipartData = buildMultipartForm();

      if (editingId) {
        const res = await updateProduct(editingId, multipartData);
        setMessage(res?.message || "Cập nhật sản phẩm thành công");
      } else {
        if (!formData.files || formData.files.length === 0) {
          setMessage("Vui lòng chọn ít nhất 1 ảnh sản phẩm");
          return;
        }

        const res = await createProduct(multipartData);
        setMessage(res?.message || "Thêm sản phẩm thành công");
      }

      resetForm();
      await fetchData();
    } catch (error) {
      console.error("Lỗi lưu sản phẩm:", error);
      setMessage(
        error.response?.data?.message || "Thao tác sản phẩm thất bại"
      );
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      stock: product.stock || "",
      categoryId: product.category?.id || "",
      files: null,
    });
    setMessage("");

    const fileInput = document.getElementById("productFiles");
    if (fileInput) fileInput.value = "";
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (!confirmDelete) return;

    try {
      const res = await deleteProduct(id);
      setMessage(res?.message || "Xóa sản phẩm thành công");
      if (editingId === id) {
        resetForm();
      }
      await fetchData();
    } catch (error) {
      console.error("Lỗi xóa sản phẩm:", error);
      setMessage(
        error.response?.data?.message || "Xóa sản phẩm thất bại"
      );
    }
  };

  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý sản phẩm</h1>
      <p className="page-subtitle">
        Thêm, sửa, xóa sản phẩm và đồng bộ trực tiếp với backend.
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
              {editingId ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nhập tên sản phẩm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  placeholder="Nhập mô tả"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Giá</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Nhập giá"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Tồn kho</label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    placeholder="Nhập tồn kho"
                    value={formData.stock}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Danh mục</label>
                <select
                  name="categoryId"
                  className="form-select"
                  value={formData.categoryId}
                  onChange={handleChange}
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3">
                <label className="form-label">Ảnh sản phẩm</label>
                <input
                  id="productFiles"
                  type="file"
                  name="files"
                  className="form-control"
                  multiple
                  accept="image/*"
                  onChange={handleChange}
                />
                {editingId && (
                  <small className="text-muted">
                    Nếu không chọn ảnh mới, backend có thể giữ ảnh cũ hoặc yêu cầu upload lại tùy logic BE.
                  </small>
                )}
              </div>

              <div className="d-flex gap-2 mt-4">
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
              <div className="empty-box">Đang tải sản phẩm...</div>
            ) : products.length === 0 ? (
              <div className="empty-box">Chưa có sản phẩm nào.</div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Ảnh</th>
                      <th>Tên</th>
                      <th>Danh mục</th>
                      <th>Giá</th>
                      <th>Tồn kho</th>
                      <th style={{ width: "180px" }}>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                          <img
                            src={
                              product.images?.[0]?.imageUrl ||
                              "https://via.placeholder.com/60x60?text=No+Image"
                            }
                            alt={product.name}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.category?.name || "Không có"}</td>
                        <td>{(product.price || 0).toLocaleString("vi-VN")} đ</td>
                        <td>{product.stock}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => handleEdit(product)}
                            >
                              Sửa
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(product.id)}
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