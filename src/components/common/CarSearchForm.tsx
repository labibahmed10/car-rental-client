/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CarOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Row, Select, Slider } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const { Option } = Select;
const { RangePicker } = DatePicker;

const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston"];
const features = ["Sunroof", " Leather Seats", "Navigation", "Bluetooth"];

export default function CarSearchForm() {
  const { pathname } = useLocation();
  const isBookingPage = pathname.split("/").includes("booking");

  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const onFinish = (values: any) => {
    console.log(values);
    setBookingDetails(values);
    setIsModalVisible(true);
  };

  return (
    <Form form={form} layout="vertical" name="carSearch" onFinish={onFinish} className="w-full">
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

        {isBookingPage ? (
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
        ) : (
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="priceRange" label="Price Range">
              <Slider
                range
                min={0}
                max={1000}
                className="w-full"
                onChange={(value) => {
                  form.setFieldsValue({ priceRange: value[1] });
                }}
              />
              <div className="flex justify-between">
                <span>${form.getFieldValue("priceRange")?.[0] || 0}</span>
                <span>${form.getFieldValue("priceRange")?.[1] || 1000}</span>
              </div>
            </Form.Item>
          </Col>
        )}

        {isBookingPage ? (
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="dates" label="Pick-up and Drop-off Dates">
              <RangePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        ) : (
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="features" label="Select Features">
              <Select className="w-full" placeholder="Select features">
                {features.map((feat) => (
                  <Option key={feat} value={feat}>
                    {feat}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        )}
      </Row>

      <Form.Item className="flex justify-end">
        <Button type="primary" icon={<CarOutlined />} htmlType="submit" size="large">
          Search Cars
        </Button>
      </Form.Item>
    </Form>
  );
}
