import { IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

export default function PersonalInfo() {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
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
        name="date"
        label={<span className="text-slate-100">Booking Start Date and Time</span>}
        rules={[{ required: true, type: "date", message: "Please select a Booking Start Date and Time!" }]}
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
