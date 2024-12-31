/* eslint-disable @typescript-eslint/no-explicit-any */
import { IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { FormInstance } from "antd/lib";
import dayjs from "dayjs";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

export default function PersonalInfo({ form }: { form: FormInstance<any> }) {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const validateEndDate = (_: any, value: dayjs.Dayjs) => {
    const startDate = form.getFieldValue("startDate");
    if (startDate && value) {
      const start = dayjs(startDate);
      const end = dayjs(value);
      if (end.isBefore(start.add(1, "day"))) {
        return Promise.reject(new Error("End date must be at least one day after the start date!"));
      }
    }
    return Promise.resolve();
  };

  return (
    <>
      <Form.Item
        name="fullName"
        label={<span className="text-slate-100">Full Name</span>}
        rules={[{ required: true, message: "Please enter your Full Name!" }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="email"
        label={<span className="text-slate-100">Email</span>}
        rules={[{ required: true, type: "email", message: "Please enter a valid Email!" }]}
      >
        <Input prefix={<MdOutlineMailOutline />} />
      </Form.Item>

      <Form.Item
        name="startDate"
        label={<span className="text-slate-100">Booking Start Date and Time</span>}
        rules={[{ required: true, type: "date", message: "Please select a Booking Start Date and Time!" }]}
      >
        <DatePicker showHour showMinute showTime format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} className="w-full" />
      </Form.Item>

      <Form.Item
        name="endDate"
        label={<span className="text-slate-100">Booking End Date and Time</span>}
        rules={[{ required: true, type: "date", message: "Please select a Booking End Date and Time!" }, { validator: validateEndDate }]}
      >
        <DatePicker showHour showMinute showTime format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} className="w-full" />
      </Form.Item>

      <Form.Item
        name="location"
        label={<span className="text-slate-100">Pick-up Location</span>}
        rules={[{ required: true, message: "Please enter your Pick-up Location!" }]}
      >
        <Input prefix={<TiLocationOutline />} />
      </Form.Item>

      <Form.Item
        name="nidPassport"
        label={<span className="text-slate-100">NID/Passport Number</span>}
        rules={[{ required: true, message: "Please enter your NID/Passport Number!" }]}
      >
        <Input prefix={<IdcardOutlined />} />
      </Form.Item>

      <Form.Item
        name="drivingLicense"
        label={<span className="text-slate-100">Driving License Number</span>}
        rules={[{ required: true, message: "Please enter your Driving License Number!" }]}
      >
        <Input prefix={<IdcardOutlined />} />
      </Form.Item>
    </>
  );
}
