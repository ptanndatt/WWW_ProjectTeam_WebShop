# WWW_ProjectTeam_WebShop

## Công nghệ sử dụng
- Java 21
- Maven
- JSP / Servlet
- Bootstrap 5
- Tomcat
- MySQL

## Cách chạy project
1. Chạy `mvn clean package`
2. Copy file `target/WebShop.war` vào thư mục `webapps` của Tomcat
3. Start Tomcat
4. Truy cập `http://localhost:8080/WebShop/home`

## Cấu trúc hiện tại
- `home.jsp`: Trang chủ
- `product-list.jsp`: Danh sách sản phẩm
- `product-detail.jsp`: Chi tiết sản phẩm
- `auth/`: Đăng nhập, đăng ký
- `cart/`: Giỏ hàng, checkout
- `admin/`: Dashboard, quản lý sản phẩm, danh mục, đơn hàng

## Gợi ý phân công
- Người 1: Home + Product list + Product detail + layout chung
- Người 2: Login + Register + Cart + Checkout
- Người 3: Admin Dashboard + Admin Products + Admin Categories + Admin Orders