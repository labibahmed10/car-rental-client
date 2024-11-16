import React from "react";
import { Form, Input, DatePicker, message, FormInstance } from "antd";
import { ExclamationCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import MyButton from "../../../components/common/MyButton";

const CarBookingForm: React.FC = () => {
  const onFinish = (values: FormInstance) => {
    message.success({
      content: "Thank you! Form submitted successfully.",
      icon: <CheckCircleOutlined style={{ color: "#4CAF50" }} />,
    });
  };

  const onFinishFailed = () => {
    message.error({
      content: "Please Login for Submit Form.",
      icon: <ExclamationCircleOutlined style={{ color: "#FF0000" }} />,
    });
  };

  return (
    <section className="rounded-full mx-auto px-4">
      <Form
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="flex sm:flex-row flex-col items-center justify-between sm:gap-5 mt-10 bg-[#221b05b9] p-10 rounded-lg sm:rounded-full"
      >
        <Form.Item name="name" rules={[{ required: true, message: "This field is required" }]} className="w-full mb-0">
          <Input placeholder="Car Name" className="w-full rounded-full h-12 text-lg" />
        </Form.Item>
        <Form.Item name="location" rules={[{ required: true, message: "This field is required" }]} className="w-full mb-0">
          <Input placeholder="Location" className="w-full rounded-full h-12 text-lg" />
        </Form.Item>

        <Form.Item name="date" rules={[{ required: true, message: "This field is required" }]} className="w-full mb-0">
          <DatePicker format="DD-MM-YYYY" className="w-full rounded-full h-12" />
        </Form.Item>

        <Form.Item className="mb-0">
          <MyButton text="Check" extraStyle="text-white w-36 sm:w-40 h-10 sm:h-12" />
        </Form.Item>
      </Form>
    </section>
  );
};

export default CarBookingForm;
