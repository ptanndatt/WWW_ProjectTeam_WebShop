import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import { getAllProducts, getAllCategories } from "../../services/productService";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [productData, categoryData] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);

        const products = Array.isArray(productData) ? productData : [];
        const categoryList = Array.isArray(categoryData) ? categoryData : [];

        setFeaturedProducts(products.slice(0, 4));
        setCategories(categoryList.slice(0, 4));
      } catch (error) {
        console.error("Lỗi lấy dữ liệu trang chủ:", error);
      }
    };

    fetchHomeData();
  }, []);

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
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div className="col-lg-3 col-md-6" key={category.id}>
                <div className="category-box">
                  <div className="category-icon">
                    {["💻", "💄", "👕", "📚"][index % 4]}
                  </div>
                  <h4>{category.name}</h4>
                  <p className="text-muted mb-0">
                    {category.description || "Danh mục sản phẩm nổi bật của cửa hàng."}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="empty-box">Chưa có danh mục nổi bật.</div>
            </div>
          )}
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
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.name,
                    category: product.category?.name || "Chưa có danh mục",
                    price: product.price,
                    desc: product.description,
                    image:
                      product.images?.[0]?.imageUrl ||
                      "https://via.placeholder.com/300x300?text=No+Image",
                  }}
                />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="empty-box">Chưa có sản phẩm nổi bật.</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}