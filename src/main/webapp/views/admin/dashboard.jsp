<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container mt-4">
    <h2 class="mb-4">Trang quản trị</h2>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="card text-center p-4">
                <h5>Sản phẩm</h5>
                <a href="${pageContext.request.contextPath}/admin/products" class="btn btn-primary mt-3">Quản lý</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card text-center p-4">
                <h5>Danh mục</h5>
                <a href="${pageContext.request.contextPath}/admin/categories" class="btn btn-warning mt-3">Quản lý</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card text-center p-4">
                <h5>Đơn hàng</h5>
                <a href="${pageContext.request.contextPath}/admin/orders" class="btn btn-success mt-3">Quản lý</a>
            </div>
        </div>
    </div>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>