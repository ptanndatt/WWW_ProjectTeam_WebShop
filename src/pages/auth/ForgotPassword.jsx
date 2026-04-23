import { useState } from "react";
import api from "../../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/forgot", { email });
    setMsg(res.data.message);
  };

  return (
    <div className="container py-5">
      <div className="form-box mx-auto" style={{ maxWidth: 400 }}>
        <h3>Quên mật khẩu</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-warning w-100">Gửi email</button>
        </form>

        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </div>
    </div>
  );
}
