import { useEffect, useState } from "react";
import { getMyProfile, updateMyProfile } from "../../services/userService";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();

        setFormData({
          fullName: data.fullName || "",
          phone: data.phone || "",
          address: data.address || "",
          email: data.email || "",
        });
      } catch (error) {
        console.error("Lỗi lấy thông tin user:", error);
        setMessage(
          error.response?.data?.message || "Không lấy được thông tin tài khoản"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
      };

      const res = await updateMyProfile(payload);
      setMessage(res?.message || "Cập nhật thông tin thành công");
    } catch (error) {
      console.error("Lỗi cập nhật user:", error);
      setMessage(
        error.response?.data?.message || "Cập nhật thông tin thất bại"
      );
    }
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="empty-box">Đang tải thông tin tài khoản...</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="page-title">Thông tin cá nhân</h1>
      <p className="page-subtitle">
        Xem và cập nhật thông tin tài khoản của bạn.
      </p>

      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <div className="form-box" style={{ maxWidth: "720px" }}>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Họ và tên</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nhập họ tên"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                disabled
              />
            </div>

            <div className="col-12">
              <label className="form-label">Địa chỉ</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-product mt-4">
            Cập nhật thông tin
          </button>
        </form>
      </div>
    </div>
  );
}