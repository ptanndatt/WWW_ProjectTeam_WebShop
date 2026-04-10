<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Đăng nhập</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

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

        .card-body {
            padding: 2rem;
        }

        h2 {
            font-weight: 600;
            color: #333;
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

        .btn-primary {
            border-radius: 10px;
            font-weight: 700;
            padding: 10px;
            background: linear-gradient(90deg, #ee4d2d, #ff7337);
            border: none;
        }

        .btn-primary:hover {
            background: linear-gradient(90deg, #dc4426, #ff6a2a);
        }

        .form-label i {
            margin-right: 6px;
            color: #ee4d2d;
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

<div class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
    <div style="width:100%; max-width: 500px;">
    <div class="card ">
        <div class="card-body">
            <h2 class="mb-4 text-center">🔐 Đăng nhập</h2>

            <form>
                <div class="mb-3">
                    <label class="form-label">
                        <i class="fa fa-user"></i> Tên đăng nhập
                    </label>
                    <input type="text" class="form-control" placeholder="Nhập username">
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        <i class="fa fa-lock"></i> Mật khẩu
                    </label>
                    <input type="password" class="form-control" placeholder="Nhập password">
                </div>

                <button type="submit" class="btn btn-primary w-100">
                    Đăng nhập
                </button>
                <div class="text-center mt-3">
                    <a href="#" style="color:#ee4d2d; font-weight:600;">Quên mật khẩu?</a>
                </div>

                <div class="text-center mt-2">
                    <span>Chưa có tài khoản?</span>
                    <a href="${pageContext.request.contextPath}/register" style="color:#ee4d2d; font-weight:700;">
                        Đăng ký
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>

<jsp:include page="/common/footer.jsp"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>