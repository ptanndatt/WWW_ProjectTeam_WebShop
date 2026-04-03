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
    <h2 class="mb-4">Danh sách sản phẩm</h2>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="card h-100">
                <img src="https://via.placeholder.com/300x220" class="card-img-top" alt="product">
                <div class="card-body">
                    <h5 class="card-title">Laptop Dell</h5>
                    <p class="text-danger fw-bold">15.000.000 đ</p>
                    <a href="${pageContext.request.contextPath}/product-detail" class="btn btn-primary">Xem chi tiết</a>
                </div>
            </div>
        </div>
    </div>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>