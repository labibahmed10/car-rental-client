import React from "react";
import { Form, Input, DatePicker, message, FormInstance } from "antd";
import { ExclamationCircleOutlined, CheckCircleOutlined, CarOutlined } from "@ant-design/icons";
import MyButton from "../../../components/common/MyButton";
import { CiLocationOn } from "react-icons/ci";

const CarBookingForm: React.FC = () => {
  const onFinish = (values: FormInstance) => {
    console.log(values);
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
        className="flex sm:flex-row flex-col items-center justify-between sm:gap-5 mt-10 bg-[#1B1B1B]/90 p-6 sm:p-10 rounded-lg sm:rounded-full space-y-4 sm:space-y-0"
      >
        <Form.Item name="name" rules={[{ required: true, message: "This field is required" }]} className="w-full mb-0">
          <Input
            prefix={<CarOutlined className="text-[#f5b754] pr-1" />}
            placeholder="Car Name"
            className="w-full rounded-full h-12 text-lg border-[#F5B754] border-2 bg-[#fBfBfB]/90 hover:bg-[##fBfBfB]/90 hover:outline-none hover:border-2 hover:border-[#F5B754] focus-within:bg-[##fBfBfB]/90 focus-within:border-2 focus-within:border-[#F5B754] placeholder:!bg-blue-200 placeholder:!text-slate-500 text-slate-500"
          />
        </Form.Item>

        <Form.Item name="location" rules={[{ required: true, message: "This field is required" }]} className="w-full mb-0">
          <Input
            prefix={<CiLocationOn className="text-[#f5b754] pr-1" />}
            placeholder="Location"
            className="w-full rounded-full h-12 text-lg border-[#F5B754] border-2 bg-[#fBfBfB]/90 hover:bg-[##fBfBfB]/90 hover:outline-none hover:border-2 hover:border-[#F5B754] focus-within:bg-[##fBfBfB]/90 focus-within:border-2 focus-within:border-[#F5B754] placeholder:!bg-blue-200 placeholder:!text-slate-500 text-slate-500"
          />
        </Form.Item>

        <Form.Item name="date" rules={[{ required: true, message: "This field is required" }]} className="w-full mb-0">
          <DatePicker format="DD-MM-YYYY" className="w-full rounded-full h-12 text-slate-500 border-[#F5B754] border-2" />
        </Form.Item>

        <Form.Item className="mb-0">
          <MyButton text="Check" type="submit" extraStyle="text-white w-36 sm:w-40 h-10 sm:h-12" />
        </Form.Item>
      </Form>
    </section>
  );
};

export default CarBookingForm;
