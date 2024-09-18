/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { CarOutlined } from "@ant-design/icons";
import { Button, Card, Col, DatePicker, Form, Row, Select } from "antd";
import { useState } from "react";
const { Option } = Select;
const { RangePicker } = DatePicker;

const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston"];

export default function CarSearchForm() {
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const onFinish = (values: any) => {
    setBookingDetails(values);
    setIsModalVisible(true);
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6 w-full">
      <Card title="Search for Available Cars" className="mb-8">
        <Row gutter={20}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="carType" label="Car Type">
              <Select placeholder="Select car type">
                {carTypes.map((type) => (
                  <Option key={type} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="location" label="Location">
              <Select placeholder="Select location">
                {locations.map((location) => (
                  <Option key={location} value={location}>
                    {location}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="dates" label="Pick-up and Drop-off Dates">
              <RangePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" icon={<CarOutlined />} htmlType="submit" size="large">
            Search Cars
          </Button>
        </Form.Item>
      </Card>
    </Form>
  );
}
