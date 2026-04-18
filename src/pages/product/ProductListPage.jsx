import { useMemo, useState } from "react";
import { mockProducts } from "../../data/mockProducts";
import ProductCard from "../../components/common/ProductCard";

export default function ProductListPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (sort === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    } else if (sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, category, sort]);

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
              <option value="Máy tính">Máy tính</option>
              <option value="Mỹ phẩm">Mỹ phẩm</option>
              <option value="Thời trang">Thời trang</option>
              <option value="Sách">Sách</option>
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

      {filteredProducts.length === 0 ? (
        <div className="empty-box mt-4">
          <h4 className="mb-2">Không tìm thấy sản phẩm phù hợp</h4>
          <p className="mb-0">
            Hãy thử từ khóa khác hoặc chọn lại danh mục.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}