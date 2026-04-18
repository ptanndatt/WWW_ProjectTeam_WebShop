import { Link } from "react-router-dom";
import { mockProducts } from "../../data/mockProducts";
import ProductCard from "../../components/common/ProductCard";

export default function HomePage() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="container py-4">
      <section className="hero-banner">
        <h1>Mua sắm online hiện đại, nhanh và tiện lợi</h1>
        <p>
          WebShop là website thương mại điện tử đa danh mục với giao diện hiện đại,
          hiển thị sản phẩm trực quan
        </p>
        <Link to="/products" className="btn btn-hero">
          Xem sản phẩm ngay
        </Link>
      </section>

      <section className="mt-5">
        <h2 className="section-title">Danh mục nổi bật</h2>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="category-box">
              <div className="category-icon">💻</div>
              <h4>Máy tính</h4>
              <p className="text-muted mb-0">
                Laptop, PC, phụ kiện công nghệ dành cho học tập và làm việc.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="category-box">
              <div className="category-icon">💄</div>
              <h4>Mỹ phẩm</h4>
              <p className="text-muted mb-0">
                Son môi, skincare, nước hoa với phong cách hiện đại.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="category-box">
              <div className="category-icon">👕</div>
              <h4>Thời trang</h4>
              <p className="text-muted mb-0">
                Áo quần, phụ kiện trẻ trung, phù hợp nhiều phong cách.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="category-box">
              <div className="category-icon">📚</div>
              <h4>Sách</h4>
              <p className="text-muted mb-0">
                Giáo trình, sách kỹ năng, sách công nghệ cho sinh viên.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
          <h2 className="section-title mb-0">Sản phẩm nổi bật</h2>
          <Link to="/products" className="btn btn-outline-primary">
            Xem tất cả
          </Link>
        </div>

        <div className="row g-4">
          {featuredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}