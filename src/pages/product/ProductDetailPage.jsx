import { Link, useParams } from "react-router-dom";
import { mockProducts } from "../../data/mockProducts";
import ProductCard from "../../components/common/ProductCard";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="empty-box">Không tìm thấy sản phẩm.</div>
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mt-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-5">
          <img src={product.image} className="detail-image" alt={product.name} />
        </div>

        <div className="col-md-7">
          <div className="detail-box">
            <span className="badge-category">{product.category}</span>
            <h1 className="detail-title">{product.name}</h1>

            <div className="mb-3">
              <span className="product-price">
                {product.price.toLocaleString("vi-VN")} đ
              </span>
              {product.oldPrice && (
                <span className="old-price">
                  {product.oldPrice.toLocaleString("vi-VN")} đ
                </span>
              )}
            </div>

            <p className="text-muted fs-5">{product.description}</p>

            <ul className="list-group spec-list mb-4">
              {product.specs?.map((spec, index) => (
                <li className="list-group-item" key={index}>
                  {spec}
                </li>
              ))}
            </ul>

            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label fw-bold">Số lượng</label>
                <input type="number" className="form-control" defaultValue="1" min="1" />
              </div>
              <div className="col-md-9 d-flex gap-3">
                <button className="btn btn-success btn-lg">Thêm vào giỏ hàng</button>
                <Link to="/products" className="btn btn-outline-primary btn-lg">
                  Quay lại danh sách
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="section-title">Sản phẩm liên quan</h2>
        <div className="row g-4">
          {relatedProducts.map((item) => (
            <div className="col-md-3" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}