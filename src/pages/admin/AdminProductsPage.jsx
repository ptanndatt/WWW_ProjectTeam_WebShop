import { mockProducts } from "../../data/mockProducts";
import { useState } from "react";

export default function AdminProductsPage() {
    const [showForm, setShowForm] = useState(false);

    const handleExport = () => {
        const headers = ["ID", "Tên", "Danh mục", "Giá"];

        const rows = mockProducts.map(p => [
            p.id,
            p.name,
            p.category,
            `"${p.price.toLocaleString("vi-VN")} đ"`
        ]);

        const csv = [
            headers.join(","),
            ...rows.map(row => row.join(","))
        ].join("\n");

        // 👇 THÊM BOM để fix tiếng Việt
        const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "products.csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className="container py-5">
      <h1 className="page-title">Quản lý sản phẩm</h1>
      <p className="page-subtitle">Thêm, sửa, xóa và theo dõi danh sách sản phẩm.</p>

      <div className="admin-page-actions">
          <button
              className="btn btn-success"
              onClick={() => setShowForm(true)}
          >
              + Thêm sản phẩm
          </button>
          <button
              className="btn btn-outline-secondary"
              onClick={handleExport}
          >
              Xuất danh sách
          </button>
      </div>
        {showForm && (
            <div className="card p-4 my-4">
                <h4>Thêm sản phẩm</h4>

                <input className="form-control mb-2" placeholder="Tên sản phẩm" />
                <input className="form-control mb-2" placeholder="Danh mục" />
                <input className="form-control mb-2" placeholder="Giá" />
                <input className="form-control mb-2" placeholder="Link ảnh" />

                <div className="d-flex gap-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowForm(false)} // giả lập lưu
                    >
                        Lưu
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => setShowForm(false)}
                    >
                        Hủy
                    </button>
                </div>
            </div>
        )}

      <div className="admin-table-wrap">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.slice(0, 6).map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price.toLocaleString("vi-VN")} đ</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-primary">Sửa</button>
                      <button className="btn btn-sm btn-danger">Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}