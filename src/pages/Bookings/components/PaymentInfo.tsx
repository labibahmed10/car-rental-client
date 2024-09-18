import { CreditCardOutlined } from "@ant-design/icons";
import { Card, Col, DatePicker, Form, Input, Row } from "antd";

export default function PaymentInfo() {
  return (
    <Card title="Payment Information">
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item name="cardNumber" label="Card Number" rules={[{ required: true }]}>
            <Input prefix={<CreditCardOutlined />} />
          </Form.Item>
        </Col>
        <Col xs={24} md={6}>
          <Form.Item name="expiryDate" label="Expiry Date" rules={[{ required: true }]}>
            <DatePicker picker="month" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} md={6}>
          <Form.Item name="cvv" label="CVV" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}
