import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/reset", {
      token,
      newPass: password,
    });

    setMsg(res.data.message);
  };

  return (
    <div className="container py-5">
      <div className="form-box mx-auto" style={{ maxWidth: 400 }}>
        <h3>Đặt lại mật khẩu</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Mật khẩu mới"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-danger w-100">Reset</button>
        </form>

        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </div>
    </div>
  );
}
