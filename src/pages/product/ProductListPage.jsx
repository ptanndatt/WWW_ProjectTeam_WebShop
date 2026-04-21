import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import { getAllProducts, getAllCategories } from "../../services/productService";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productData, categoryData] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);
        setProducts(Array.isArray(productData) ? productData : []);
        setCategories(Array.isArray(categoryData) ? categoryData : []);
      } catch (error) {
        console.error("Lỗi lấy dữ liệu sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name?.toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter(
        (product) => String(product.category?.id) === category
      );
    }

    if (sort === "name-asc") {
      filtered.sort((a, b) => (a.name || "").localeCompare(b.name || "", "vi"));
    } else if (sort === "price-asc") {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return filtered;
  }, [products, search, category, sort]);

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="section-title mb-2">Danh sách sản phẩm</h2>
        <p className="text-muted mb-0">
          Khám phá các sản phẩm nổi bật với giao diện tìm kiếm, lọc và sắp xếp trực quan.
        </p>
      </div>

      <div className="filter-panel">
        <div className="row g-3">
          <div className="col-md-4">
            <label htmlFor="searchInput">Tìm kiếm sản phẩm</label>
            <input
              id="searchInput"
              type="text"
              className="form-control"
              placeholder="Nhập tên sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="categoryFilter">Danh mục</label>
            <select
              id="categoryFilter"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Tất cả</option>
              {categories.map((cat) => (
                <option key={cat.id} value={String(cat.id)}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="sortFilter">Sắp xếp</label>
            <select
              id="sortFilter"
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Mặc định</option>
              <option value="name-asc">Tên A-Z</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
            </select>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <p className="mb-0 text-muted">
          Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
        </p>
      </div>

      {loading ? (
        <div className="empty-box mt-4">
          <h4 className="mb-2">Đang tải sản phẩm...</h4>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="empty-box mt-4">
          <h4 className="mb-2">Không tìm thấy sản phẩm phù hợp</h4>
          <p className="mb-0">Hãy thử từ khóa khác hoặc chọn lại danh mục.</p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => (
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
          ))}
        </div>
      )}
    </div>
  );
}