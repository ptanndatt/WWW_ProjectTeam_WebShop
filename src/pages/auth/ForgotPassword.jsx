import { Form, Input, Button, message } from "antd";
import api from "../../services/api";

export default function ForgotPassword() {
  const onFinish = async (values) => {
    try {
      await api.post("/auth/forgot", { email: values.email });
      message.success("Vui lòng kiểm tra email!");
    } catch {
      message.error("Có lỗi xảy ra");
    }
  };

  return (
    <Form onFinish={onFinish} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Quên mật khẩu</h2>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Nhập email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Gửi yêu cầu
      </Button>
    </Form>
  );
}
