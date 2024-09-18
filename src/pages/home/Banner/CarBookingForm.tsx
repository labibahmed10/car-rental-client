import React from "react";
import { Form, Input, DatePicker, message, FormInstance } from "antd";
import { ExclamationCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import MyButton from "../../../components/common/MyButton";

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
    <section className="bg-[#2a5979] rounded-xl text-white w-11/12 mx-auto sm:max-w-screen-md sm:mx-auto px-0 sm:px-10 my-10 sm:my-16">
      <Form
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-center gap-2 sm:gap-5 p-4"
      >
        <Form.Item
          label={<span className="text-base font-semibold text-slate-50">Pick up Location</span>}
          name="location"
          rules={[{ required: true, message: "This field is required" }]}
          className="w-full text-white"
          style={{ color: "white" }}
        >
          <Input placeholder="Location" className="w-full rounded-md h-12 text-lg" />
        </Form.Item>

        <Form.Item
          label={<span className="text-base font-semibold text-slate-50">Date</span>}
          name="date"
          rules={[{ required: true, message: "This field is required" }]}
          className="w-full"
        >
          <DatePicker format="DD-MM-YYYY" className="w-full rounded-md h-12" />
        </Form.Item>

        <Form.Item>
          <MyButton text="Check" extraStyle="text-white w-36 sm:w-40 h-10 sm:h-12 mt-0 sm:mt-8" />
        </Form.Item>
      </Form>
    </section>
  );
};

export default CarBookingForm;
