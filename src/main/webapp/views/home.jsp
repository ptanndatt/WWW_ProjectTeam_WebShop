<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Trang chủ</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container">
    <div class="hero-banner">
        <h1>Mua sắm online hiện đại, nhanh và đẹp</h1>
        <p>
            WebShop là website thương mại điện tử đa danh mục với giao diện hiện đại,
            hiển thị sản phẩm trực quan, hỗ trợ tìm kiếm, lọc và sắp xếp như một website bán hàng thực tế.
        </p>
        <a href="${pageContext.request.contextPath}/products" class="btn btn-hero">Xem sản phẩm ngay</a>
    </div>

    <div class="mt-5">
        <h2 class="section-title">Danh mục nổi bật</h2>
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="category-box">
                    <div class="category-icon">💻</div>
                    <h4>Máy tính</h4>
                    <p class="text-muted mb-0">Laptop, PC, phụ kiện công nghệ</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="category-box">
                    <div class="category-icon">💄</div>
                    <h4>Mỹ phẩm</h4>
                    <p class="text-muted mb-0">Son môi, skincare, nước hoa</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="category-box">
                    <div class="category-icon">👕</div>
                    <h4>Thời trang</h4>
                    <p class="text-muted mb-0">Áo quần, giày dép, phụ kiện</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="category-box">
                    <div class="category-icon">📚</div>
                    <h4>Sách</h4>
                    <p class="text-muted mb-0">Kỹ năng, công nghệ, giáo trình</p>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <h2 class="section-title">Sản phẩm nổi bật</h2>
        <div class="row g-4">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product-card">
                    <div class="product-image-wrap">
                        <img src="${pageContext.request.contextPath}/assets/images/products/laptop-dell-inspiron-15.jpg" alt="Laptop Dell Inspiron 15">
                    </div>
                    <div class="card-body">
                        <span class="badge-category">Máy tính</span>
                        <h5 class="card-title">Laptop Dell Inspiron 15</h5>
                        <p class="product-desc">Laptop học tập, văn phòng, lập trình cơ bản.</p>
                        <div class="product-price">15.000.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product-card">
                    <div class="product-image-wrap">
                        <img src="${pageContext.request.contextPath}/assets/images/products/son-li-velvet.jpg" alt="Son lì Velvet">
                    </div>
                    <div class="card-body">
                        <span class="badge-category">Mỹ phẩm</span>
                        <h5 class="card-title">Son lì cao cấp Velvet</h5>
                        <p class="product-desc">Màu son đẹp, bền màu, tôn da và dễ dùng.</p>
                        <div class="product-price">350.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product-card">
                    <div class="product-image-wrap">
                        <img src="${pageContext.request.contextPath}/assets/images/products/ao-thun-basic-cotton.jpg" alt="Áo thun basic cotton">
                    </div>
                    <div class="card-body">
                        <span class="badge-category">Thời trang</span>
                        <h5 class="card-title">Áo thun nam basic cotton</h5>
                        <p class="product-desc">Thoải mái, trẻ trung, phù hợp mặc hằng ngày.</p>
                        <div class="product-price">250.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product-card">
                    <div class="product-image-wrap">
                        <img src="${pageContext.request.contextPath}/assets/images/products/sach-java-co-ban-den-nang-cao.jpg" alt="Sách Java">
                    </div>
                    <div class="card-body">
                        <span class="badge-category">Sách</span>
                        <h5 class="card-title">Lập trình Java từ cơ bản đến nâng cao</h5>
                        <p class="product-desc">Phù hợp cho sinh viên CNTT và người mới học.</p>
                        <div class="product-price">180.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footer-custom">
    © 2026 - WebShop
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>