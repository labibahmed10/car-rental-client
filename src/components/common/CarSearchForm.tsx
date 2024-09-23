import { CarOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Row, Select, Slider } from "antd";
import { useLocation } from "react-router-dom";
import MyButton from "./MyButton";
import { setSearchValues } from "../../redux/feature/car/carSlice";
import { useAppDispatch } from "../../redux/store/hooks";
const { Option } = Select;
const { RangePicker } = DatePicker;

const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston"];
const features = ["Sunroof", " Leather Seats", "Navigation", "Bluetooth"];

export default function CarSearchForm({ setSkip }: { setSkip: (val: boolean) => void }) {
  const { pathname } = useLocation();
  const isBookingPage = pathname.split("/").includes("booking");
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    dispatch(setSearchValues(values));
    setSkip(false);
  };

  return (
    <Form form={form} layout="vertical" name="carSearch" onFinish={onFinish} className="w-full mb-5">
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

      <div className="flex justify-end">
        <MyButton text="Search Cars" type="submit" icon={<CarOutlined />} />
      </div>
    </Form>
  );
}
