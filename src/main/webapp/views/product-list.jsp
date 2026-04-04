<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Danh sách sản phẩm</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container mt-4">
    <h2 class="section-title">Danh sách sản phẩm</h2>

    <div class="filter-panel">
        <div class="row g-3">
            <div class="col-md-4">
                <label for="searchInput">Tìm kiếm</label>
                <input id="searchInput" type="text" class="form-control" placeholder="Nhập tên sản phẩm...">
            </div>
            <div class="col-md-4">
                <label for="categoryFilter">Danh mục</label>
                <select id="categoryFilter" class="form-select">
                    <option value="all">Tất cả</option>
                    <option value="Máy tính">Máy tính</option>
                    <option value="Mỹ phẩm">Mỹ phẩm</option>
                    <option value="Thời trang">Thời trang</option>
                    <option value="Sách">Sách</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="sortFilter">Sắp xếp</label>
                <select id="sortFilter" class="form-select">
                    <option value="default">Mặc định</option>
                    <option value="name-asc">Tên A-Z</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                </select>
            </div>
        </div>
    </div>

    <div class="row g-4" id="productList"></div>

    <div id="emptyState" class="empty-box d-none mt-4">
        Không tìm thấy sản phẩm phù hợp.
    </div>
</div>

<div class="footer-custom">
    © 2026 - WebShop
</div>

<script>
    const contextPath = "${pageContext.request.contextPath}";

    const products = [
        {
            id: 1,
            name: "Laptop Dell Inspiron 15",
            category: "Máy tính",
            price: 15000000,
            image: "laptop-dell-inspiron-15.jpg",
            desc: "Laptop học tập, văn phòng, lập trình cơ bản."
        },
        {
            id: 2,
            name: "MacBook Air M2 13 inch",
            category: "Máy tính",
            price: 28500000,
            image: "macbook-air-m2-13.jpg",
            desc: "Thiết kế mỏng nhẹ, hiệu năng mạnh mẽ."
        },
        {
            id: 3,
            name: "Son lì cao cấp Velvet",
            category: "Mỹ phẩm",
            price: 350000,
            image: "son-li-velvet.jpg",
            desc: "Chất son mịn, bền màu, tôn da."
        },
        {
            id: 4,
            name: "Nước hoa nữ Flora Bloom",
            category: "Mỹ phẩm",
            price: 1250000,
            image: "nuoc-hoa-flora-bloom.jpg",
            desc: "Mùi hương nữ tính, sang trọng."
        },
        {
            id: 5,
            name: "Áo thun nam basic cotton",
            category: "Thời trang",
            price: 250000,
            image: "ao-thun-basic-cotton.jpg",
            desc: "Thoải mái, dễ phối đồ."
        },
        {
            id: 6,
            name: "Giày sneaker trắng unisex",
            category: "Thời trang",
            price: 780000,
            image: "giay-sneaker-trang.jpg",
            desc: "Phong cách trẻ trung, năng động."
        },
        {
            id: 7,
            name: "Lập trình Java từ cơ bản đến nâng cao",
            category: "Sách",
            price: 180000,
            image: "sach-java-co-ban-den-nang-cao.jpg",
            desc: "Sách dành cho sinh viên CNTT."
        },
        {
            id: 8,
            name: "SQL thực chiến cho sinh viên CNTT",
            category: "Sách",
            price: 160000,
            image: "sach-sql-thuc-chien.jpg",
            desc: "Kiến thức SQL dễ hiểu, thực tế."
        },
        {
            id: 9,
            name: "Laptop HP Pavilion 14",
            category: "Máy tính",
            price: 19900000,
            image: "laptop-hp-pavilion-14.jpg",
            desc: "Máy đẹp, bền, hiệu năng ổn định."
        },
        {
            id: 10,
            name: "Lenovo IdeaPad Slim 5",
            category: "Máy tính",
            price: 18200000,
            image: "laptop-lenovo-ideapad-slim-5.jpg",
            desc: "Thiết kế thanh lịch, pin tốt."
        },
        {
            id: 11,
            name: "ASUS Vivobook 15",
            category: "Máy tính",
            price: 17600000,
            image: "asus-vivobook-15.jpg",
            desc: "Màn hình đẹp, phù hợp học tập."
        }
    ];

    const productList = document.getElementById("productList");
    const emptyState = document.getElementById("emptyState");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortFilter = document.getElementById("sortFilter");

    function formatPrice(price) {
        return new Intl.NumberFormat("vi-VN").format(price) + " đ";
    }

    function renderProducts(items) {
        if (items.length === 0) {
            productList.innerHTML = "";
            emptyState.classList.remove("d-none");
            return;
        }

        emptyState.classList.add("d-none");

        let html = "";

        for (let i = 0; i < items.length; i++) {
            const product = items[i];

            html += '<div class="col-lg-3 col-md-4 col-sm-6">';
            html += '  <div class="product-card">';
            html += '      <div class="product-image-wrap">';
            html += '          <img src="' + contextPath + '/assets/images/products/' + product.image + '" alt="' + product.name + '">';
            html += '      </div>';
            html += '      <div class="card-body">';
            html += '          <span class="badge-category">' + product.category + '</span>';
            html += '          <h5 class="card-title">' + product.name + '</h5>';
            html += '          <p class="product-desc">' + product.desc + '</p>';
            html += '          <div class="product-price">' + formatPrice(product.price) + '</div>';
            html += '          <a href="' + contextPath + '/product-detail" class="btn btn-product">Xem chi tiết</a>';
            html += '      </div>';
            html += '  </div>';
            html += '</div>';
        }

        productList.innerHTML = html;
    }

    function applyFilters() {
        let filtered = [...products];

        const keyword = searchInput.value.trim().toLowerCase();
        const category = categoryFilter.value;
        const sortValue = sortFilter.value;

        if (keyword) {
            filtered = filtered.filter(function(product) {
                return product.name.toLowerCase().includes(keyword);
            });
        }

        if (category !== "all") {
            filtered = filtered.filter(function(product) {
                return product.category === category;
            });
        }

        if (sortValue === "name-asc") {
            filtered.sort(function(a, b) {
                return a.name.localeCompare(b.name, "vi");
            });
        } else if (sortValue === "price-asc") {
            filtered.sort(function(a, b) {
                return a.price - b.price;
            });
        } else if (sortValue === "price-desc") {
            filtered.sort(function(a, b) {
                return b.price - a.price;
            });
        }

        renderProducts(filtered);
    }

    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
    sortFilter.addEventListener("change", applyFilters);

    renderProducts(products);
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>