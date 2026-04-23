export default function AdminDashboardPage() {
  return (
    <div>
      <h2 style={{ marginBottom: 5 }}>Dashboard</h2>
      <p style={{ color: "#888", marginBottom: 20 }}>
        Tổng quan hệ thống quản trị WebShop
      </p>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        <StatCard title="Tổng sản phẩm" value="128" color="#3b82f6" />
        <StatCard title="Danh mục" value="34" color="#10b981" />
        <StatCard title="Đơn hàng mới" value="56" color="#f59e0b" />
        <StatCard title="Người dùng" value="245" color="#ef4444" />
      </div>

      {/* BOX */}
      <div
        style={{
          marginTop: 30,
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h4>Tình hình hoạt động</h4>
        <p style={{ color: "#666" }}>
          Dashboard giúp quản trị viên theo dõi nhanh hệ thống.
        </p>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#888", marginBottom: 5 }}>{title}</p>
      <h2 style={{ color, margin: 0 }}>{value}</h2>
    </div>
  );
}
