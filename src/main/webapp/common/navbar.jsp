<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<nav class="navbar navbar-expand-lg navbar-custom sticky-top">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="${pageContext.request.contextPath}/home">
            <div class="logo-box">W</div>
            <span class="brand-text">WebShop</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav me-auto ms-lg-4">
                <li class="nav-item">
                    <a class="nav-link" href="${pageContext.request.contextPath}/home">Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${pageContext.request.contextPath}/products">Sản phẩm</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${pageContext.request.contextPath}/cart">Giỏ hàng</a>
                </li>
            </ul>

            <div class="d-flex gap-2">
                <a class="btn nav-btn-login" href="${pageContext.request.contextPath}/login">Đăng nhập</a>
                <a class="btn nav-btn-register" href="${pageContext.request.contextPath}/register">Đăng ký</a>
            </div>
        </div>
    </div>
</nav>