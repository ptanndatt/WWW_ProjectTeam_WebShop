<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Quản lý danh mục</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Quản lý danh mục</h2>
        <button class="btn btn-primary">Thêm danh mục</button>
    </div>

    <table class="table table-bordered table-hover">
        <thead>
        <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
            <th>Hành động</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Máy tính</td>
            <td>Danh mục laptop, PC, phụ kiện</td>
            <td>
                <button class="btn btn-warning btn-sm">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
            </td>
        </tr>
        </tbody>
    </table>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>