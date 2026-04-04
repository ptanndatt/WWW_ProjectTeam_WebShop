<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Chi tiết sản phẩm</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container mt-5">
    <div class="row g-5 align-items-center">
        <div class="col-md-5">
            <img src="${pageContext.request.contextPath}/assets/images/products/laptop-dell-inspiron-15.jpg"
                 class="detail-image"
                 alt="Laptop Dell Inspiron 15">
        </div>
        <div class="col-md-7">
            <div class="detail-box">
                <span class="badge-category">Máy tính</span>
                <h1 class="detail-title">Laptop Dell Inspiron 15</h1>

                <div class="mb-3">
                    <span class="product-price">15.000.000 đ</span>
                    <span class="old-price">17.500.000 đ</span>
                </div>

                <p class="text-muted fs-5">
                    Laptop Dell Inspiron 15 phù hợp cho học tập, văn phòng và lập trình cơ bản.
                    Thiết kế hiện đại, hiệu năng ổn định, màn hình đẹp và thời lượng pin tốt.
                </p>

                <ul class="list-group spec-list mb-4">
                    <li class="list-group-item"><strong>Màn hình:</strong> 15.6 inch Full HD</li>
                    <li class="list-group-item"><strong>CPU:</strong> Intel Core i5</li>
                    <li class="list-group-item"><strong>RAM:</strong> 8GB</li>
                    <li class="list-group-item"><strong>SSD:</strong> 512GB</li>
                    <li class="list-group-item"><strong>Tình trạng:</strong> Còn hàng</li>
                </ul>

                <div class="row g-3 align-items-end">
                    <div class="col-md-3">
                        <label class="form-label fw-bold">Số lượng</label>
                        <input type="number" class="form-control" value="1" min="1">
                    </div>
                    <div class="col-md-9 d-flex gap-3">
                        <button class="btn btn-success btn-lg">Thêm vào giỏ hàng</button>
                        <a href="${pageContext.request.contextPath}/products" class="btn btn-outline-primary btn-lg">Quay lại danh sách</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <h2 class="section-title">Sản phẩm liên quan</h2>
        <div class="row g-4">
            <div class="col-md-3">
                <div class="product-card">
                    <img src="${pageContext.request.contextPath}/assets/images/products/macbook-air-m2-13.jpg" alt="MacBook Air M2">
                    <div class="card-body">
                        <span class="badge-category">Máy tính</span>
                        <h5 class="card-title">MacBook Air M2 13 inch</h5>
                        <p class="product-desc">Mỏng nhẹ, mạnh mẽ, cao cấp.</p>
                        <div class="product-price">28.500.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-primary btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-card">
                    <img src="${pageContext.request.contextPath}/assets/images/products/laptop-hp-pavilion-14.jpg" alt="HP Pavilion 14">
                    <div class="card-body">
                        <span class="badge-category">Máy tính</span>
                        <h5 class="card-title">Laptop HP Pavilion 14</h5>
                        <p class="product-desc">Thiết kế đẹp, hiệu năng tốt.</p>
                        <div class="product-price">19.900.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-primary btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-card">
                    <img src="${pageContext.request.contextPath}/assets/images/products/laptop-lenovo-ideapad-slim-5.jpg" alt="Lenovo Slim 5">
                    <div class="card-body">
                        <span class="badge-category">Máy tính</span>
                        <h5 class="card-title">Lenovo IdeaPad Slim 5</h5>
                        <p class="product-desc">Thanh lịch, pin bền, học tập tốt.</p>
                        <div class="product-price">18.200.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-primary btn-product">Xem chi tiết</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-card">
                    <img src="${pageContext.request.contextPath}/assets/images/products/asus-vivobook-15.jpg" alt="ASUS Vivobook 15">
                    <div class="card-body">
                        <span class="badge-category">Máy tính</span>
                        <h5 class="card-title">ASUS Vivobook 15</h5>
                        <p class="product-desc">Hiện đại, bền, phù hợp sinh viên.</p>
                        <div class="product-price">17.600.000 đ</div>
                        <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-primary btn-product">Xem chi tiết</a>
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