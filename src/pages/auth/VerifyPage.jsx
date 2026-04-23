import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, Result, Spin, Button } from "antd";
import api from "../../services/api";

export default function VerifyPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const rawToken = params.get("token");
  const token = rawToken ? decodeURIComponent(rawToken) : null;

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  const hasCalled = useRef(false); // 🔥 chống gọi 2 lần (React StrictMode)

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    const verify = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Token không hợp lệ hoặc thiếu.");
        return;
      }

      try {
        const res = await api.get(`/auth/verify?token=${token}`);

        if (res.data?.status) {
          setStatus("success");
          setMessage(res.data.message || "Xác thực thành công!");
        } else {
          setStatus("error");
          setMessage(res.data?.message || "Xác thực thất bại.");
        }
      } catch (err) {
        setStatus("error");

        // 🔥 lấy message từ BE nếu có
        const msg =
          err.response?.data?.message || err.message || "Đã có lỗi xảy ra";

        setMessage(msg);
      }
    };

    verify();
  }, [token]);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card style={{ width: 420, textAlign: "center" }}>
        {status === "loading" && <Spin size="large" />}

        {status === "success" && (
          <Result
            status="success"
            title="Xác thực thành công 🎉"
            subTitle={message}
            extra={
              <Button type="primary" onClick={() => navigate("/login")}>
                Đăng nhập ngay
              </Button>
            }
          />
        )}

        {status === "error" && (
          <Result
            status="error"
            title="Xác thực thất bại"
            subTitle={message}
            extra={
              <Button onClick={() => navigate("/login")}>
                Quay về đăng nhập
              </Button>
            }
          />
        )}
      </Card>
    </div>
  );
}
