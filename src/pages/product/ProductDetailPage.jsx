import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/productService";
import { addToCart } from "../../services/cartService";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Lỗi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      setMessage("");

      const token = localStorage.getItem("accessToken");
      if (!token) {
        setMessage("Vui lòng đăng nhập trước khi thêm vào giỏ hàng");
        setTimeout(() => navigate("/login"), 1200);
        return;
      }

      if (!product?.id) {
        setMessage("Không lấy được id sản phẩm");
        return;
      }

      const res = await addToCart(product.id, Number(quantity));
      setMessage(res?.message || "Thêm vào giỏ hàng thành công");
    } catch (error) {
      console.error("Lỗi thêm giỏ hàng:", error);
      setMessage(
        error.response?.data?.message || "Không thể thêm vào giỏ hàng"
      );
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="empty-box">Đang tải chi tiết sản phẩm...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="empty-box">Không tìm thấy sản phẩm.</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-5">
          <img
            src={
              product.images?.[0]?.imageUrl ||
              "https://via.placeholder.com/500x500?text=No+Image"
            }
            className="detail-image"
            alt={product.name}
          />
        </div>

        <div className="col-md-7">
          <div className="detail-box">
            <span className="badge-category">
              {product.category?.name || "Chưa có danh mục"}
            </span>

            <h1 className="detail-title">{product.name}</h1>

            <div className="mb-3">
              <span className="product-price">
                {(product.price || 0).toLocaleString("vi-VN")} đ
              </span>
            </div>

            <p className="text-muted fs-5">
              {product.description || "Chưa có mô tả sản phẩm."}
            </p>

            <ul className="list-group spec-list mb-4">
              <li className="list-group-item">Tồn kho: {product.stock ?? 0}</li>
              <li className="list-group-item">
                Trạng thái: {product.isActive ? "Đang bán" : "Ngừng bán"}
              </li>
              <li className="list-group-item">Mã sản phẩm: #{product.id}</li>
            </ul>

            {message && (
              <div className="alert alert-info py-2" role="alert">
                {message}
              </div>
            )}

            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label fw-bold">Số lượng</label>
                <input
                  type="number"
                  className="form-control"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="col-md-9 d-flex gap-3 flex-wrap">
                <button
                  className="btn btn-success btn-lg"
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ hàng
                </button>

                <Link to="/products" className="btn btn-outline-primary btn-lg">
                  Quay lại danh sách
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}