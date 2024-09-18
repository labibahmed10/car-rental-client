import { IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Form, Input, Row } from "antd";

export default function PersonalInfo() {
  return (
    <Card title="Personal Details">
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="nidPassport" label="NID/Passport Number" rules={[{ required: true }]}>
            <Input prefix={<IdcardOutlined />} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="drivingLicense" label="Driving License Number" rules={[{ required: true }]}>
            <Input prefix={<IdcardOutlined />} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}
