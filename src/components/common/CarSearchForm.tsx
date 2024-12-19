import { CarOutlined } from "@ant-design/icons";
import { DatePicker, Form, Select, Slider } from "antd";
import { useLocation } from "react-router-dom";
import MyButton from "./MyButton";
import { setSearchValues } from "../../redux/feature/car/carSlice";
import { useAppDispatch } from "../../redux/store/hooks";
const { Option } = Select;
const { RangePicker } = DatePicker;

const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston"];
const features = ["Sunroof", " Leather Seats", "Navigation", "Bluetooth"];

export default function CarSearchForm({ setSkip }: { setSkip?: (val: boolean) => void }) {
  const { pathname } = useLocation();
  const isBookingPage = pathname.split("/").includes("booking");
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    dispatch(setSearchValues(values));
    setSkip?.(false);
  };

  return (
    <Form form={form} layout="vertical" name="carSearch" onFinish={onFinish} className="mb-5 text-[#f5b754] p-2 ">
      <section className={`grid gap-10 ${isBookingPage ? "grid-cols-3" : "grid-cols-1"}`}>
        <Form.Item name="carType" label={<span className="text-slate-100">Car Type</span>} className="text-slate-100">
          <Select placeholder="Select car type">
            {carTypes.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {isBookingPage ? (
          <Form.Item name="location" label={<span className="text-slate-100">Location</span>}>
            <Select placeholder="Select location">
              {locations.map((location) => (
                <Option key={location} value={location}>
                  {location}
                </Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <Form.Item name="priceRange" label={<span className="text-slate-100">Price Range</span>}>
            <Slider
              className=""
              onChange={(value) => {
                form.setFieldsValue({ priceRange: value });
              }}
            />
            <div className="flex justify-between text-[#f5b754]">
              <span>${form.getFieldValue("priceRange")?.[0] || 0}</span>
              <span>${form.getFieldValue("priceRange")?.[1] || 200}</span>
            </div>
          </Form.Item>
        )}

        {isBookingPage ? (
          <Form.Item name="dates" label={<span className="text-slate-100">Pick-up and Drop-off Dates</span>}>
            <RangePicker />
          </Form.Item>
        ) : (
          <Form.Item name="features" label={<span className="text-slate-100">Select Features</span>}>
            <Select placeholder="Select features">
              {features.map((feat) => (
                <Option key={feat} value={feat}>
                  {feat}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
      </section>

      <div className="">
        <MyButton text="Search Cars" type="submit" icon={<CarOutlined />} />
      </div>
    </Form>
  );
}
