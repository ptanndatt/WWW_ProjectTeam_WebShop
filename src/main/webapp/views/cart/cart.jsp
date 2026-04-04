<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Giỏ hàng</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container mt-4">
    <h2 class="mb-4">Giỏ hàng</h2>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Laptop Dell</td>
            <td>15.000.000 đ</td>
            <td>1</td>
            <td>15.000.000 đ</td>
        </tr>
        </tbody>
    </table>

    <div class="text-end">
        <h4>Tổng tiền: <span class="text-danger">15.000.000 đ</span></h4>
        <a href="${pageContext.request.contextPath}/checkout" class="btn btn-success">Thanh toán</a>
    </div>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>