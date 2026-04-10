<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Đăng ký</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Icon -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

    <!-- CSS hệ thống -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">

    <style>
        body {
            background: linear-gradient(135deg, #ee4d2d, #ff7a45);
            min-height: 100vh;
        }

        .card {
            border: none;
            border-radius: 18px;
            animation: fadeIn 0.8s ease;
            box-shadow: 0 10px 25px rgba(238, 77, 45, 0.15);
        }

        .form-control {
            border-radius: 10px;
            height: 48px;
            border: 1px solid #eee;
        }

        .form-control:focus {
            box-shadow: 0 0 6px rgba(238,77,45,0.4);
            border-color: #ee4d2d;
        }

        .btn-register {
            border-radius: 10px;
            font-weight: 700;
            padding: 10px;
            background: linear-gradient(90deg, #ee4d2d, #ff7337);
            border: none;
            color: #fff;
        }

        .btn-register:hover {
            background: linear-gradient(90deg, #dc4426, #ff6a2a);
        }

        .form-label i {
            margin-right: 6px;
            color: #ee4d2d;
        }

        .password-toggle {
            position: absolute;
            right: 15px;
            top: 38px;
            cursor: pointer;
            color: #888;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>

<jsp:include page="/common/navbar.jsp"/>

<div class="container d-flex justify-content-center align-items-center" style="min-height: 85vh;">
    <div style="width:100%; max-width: 600px;">
        <div class="card">
            <div class="card-body p-4">
                <h2 class="mb-4 text-center">📝 Đăng ký tài khoản</h2>

                <form action="register" method="post">

                    <!-- Họ tên -->
                    <div class="mb-3">
                        <label class="form-label">
                            <i class="fa fa-user"></i> Họ tên
                        </label>
                        <input type="text" name="fullname" class="form-control" placeholder="Nhập họ tên" required>
                    </div>

                    <!-- Email -->
                    <div class="mb-3">
                        <label class="form-label">
                            <i class="fa fa-envelope"></i> Email
                        </label>
                        <input type="email" name="email" class="form-control" placeholder="Nhập email" required>
                    </div>

                    <!-- Username -->
                    <div class="mb-3">
                        <label class="form-label">
                            <i class="fa fa-id-badge"></i> Tên đăng nhập
                        </label>
                        <input type="text" name="username" class="form-control" placeholder="Nhập username" required>
                    </div>

                    <!-- Password -->
                    <div class="mb-3 position-relative">
                        <label class="form-label">
                            <i class="fa fa-lock"></i> Mật khẩu
                        </label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="Nhập mật khẩu" required>
                        <i class="fa fa-eye password-toggle" onclick="togglePassword('password', this)"></i>
                    </div>

                    <!-- Confirm Password -->
                    <div class="mb-3 position-relative">
                        <label class="form-label">
                            <i class="fa fa-lock"></i> Xác nhận mật khẩu
                        </label>
                        <input type="password" name="confirmPassword" id="confirmPassword" class="form-control" placeholder="Nhập lại mật khẩu" required>
                        <i class="fa fa-eye password-toggle" onclick="togglePassword('confirmPassword', this)"></i>
                    </div>

                    <!-- Button -->
                    <button type="submit" class="btn btn-register w-100">
                        Đăng ký
                    </button>

                </form>

                <!-- Link login -->
                <div class="text-center mt-3">
                    <span>Đã có tài khoản?</span>
                    <a href="${pageContext.request.contextPath}/login" style="color:#ee4d2d; font-weight:700;">
                        Đăng nhập
                    </a>
                </div>

            </div>
        </div>
    </div>
</div>

<jsp:include page="/common/footer.jsp"/>

<script>
    function togglePassword(id, el) {
        const input = document.getElementById(id);
        if (input.type === "password") {
            input.type = "text";
            el.classList.remove("fa-eye");
            el.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            el.classList.remove("fa-eye-slash");
            el.classList.add("fa-eye");
        }
    }
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>