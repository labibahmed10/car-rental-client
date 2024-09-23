import { IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, DatePicker, Form, Input, Row } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";

export default function PersonalInfo() {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
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
          <Form.Item name="date" label="Booking Start Date and Time" rules={[{ required: true, type: "date" }]}>
            {/* <Input /> */}
            <DatePicker showHour showMinute showTime format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} className="w-full" />
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
