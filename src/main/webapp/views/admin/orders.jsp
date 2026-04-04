<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Quản lý đơn hàng</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container mt-4">
    <h2 class="mb-3">Quản lý đơn hàng</h2>
    <table class="table table-bordered table-hover">
        <thead>
        <tr>
            <th>Mã đơn</th>
            <th>Khách hàng</th>
            <th>Ngày đặt</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1001</td>
            <td>Nguyễn Văn A</td>
            <td>05/04/2026</td>
            <td>15.000.000 đ</td>
            <td><span class="badge bg-warning text-dark">PENDING</span></td>
        </tr>
        </tbody>
    </table>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>