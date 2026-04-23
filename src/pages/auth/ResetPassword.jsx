import { Form, Input, Button, message } from "antd";
import { useSearchParams } from "react-router-dom";
import api from "../../services/api";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get("token");

  const onFinish = async (values) => {
    try {
      await api.post("/auth/reset", {
        token,
        password: values.password,
      });

      message.success("Đổi mật khẩu thành công!");
    } catch {
      message.error("Token không hợp lệ");
    }
  };

  return (
    <Form onFinish={onFinish} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Đặt lại mật khẩu</h2>

      <Form.Item
        name="password"
        rules={[{ required: true, min: 6, message: ">=6 ký tự" }]}
      >
        <Input.Password placeholder="Mật khẩu mới" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Xác nhận
      </Button>
    </Form>
  );
}
