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

<div class="container mt-4">
    <div class="row">
        <div class="col-md-5">
            <img src="https://via.placeholder.com/500x400" class="img-fluid rounded" alt="product">
        </div>
        <div class="col-md-7">
            <h2>Laptop Dell Inspiron</h2>
            <p class="text-danger fs-4 fw-bold">15.000.000 đ</p>
            <p>Mô tả sản phẩm chi tiết sẽ hiển thị ở đây.</p>
            <button class="btn btn-success">Thêm vào giỏ hàng</button>
        </div>
    </div>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>