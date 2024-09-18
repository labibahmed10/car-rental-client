import { Col, Form, Select, Slider } from "antd";
import { useLocation } from "react-router-dom";

export default function CarFiltering() {
  const { pathname } = useLocation();
  console.log(pathname.split("/").includes("booking"));

  return (
    <div className="mb-16">
      <h2 className="text-xl font-semibold mb-4">Search For Your Car</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h3 className="font-medium mb-2">Car Type</h3>
          <Select defaultValue="all" className="w-full" placeholder="Select car type">
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="suv">SUV</Select.Option>
            <Select.Option value="hybrid">Hybrid</Select.Option>
            <Select.Option value="sedan">Sedan</Select.Option>
            <Select.Option value="hatchback">Hatchback</Select.Option>
            <Select.Option value="coupe">Coupe</Select.Option>
            <Select.Option value="convertible">Convertible</Select.Option>
            <Select.Option value="wagon">Wagon</Select.Option>
            <Select.Option value="pickup">Pickup</Select.Option>
            <Select.Option value="van">Van</Select.Option>
            <Select.Option value="truck">Truck</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </div>

        <Col xs={24} sm={12} md={8}>
          <Form.Item name="carType" label="Car Type">
            <Slider range defaultValue={[0, 1000]} min={0} max={1000} className="w-full" />

            <div className="flex justify-between">
              <span>$0</span>
              <span>$100,000</span>
            </div>
          </Form.Item>
        </Col>

        {/* <div>
          <h3 className="font-medium mb-2">Price Range</h3>
        </div> */}
        <div>
          <h3 className="font-medium mb-2">Features</h3>
          <Select className="w-full" placeholder="Select features">
            <Select.Option value="sunroof">Sunroof</Select.Option>
            <Select.Option value="leatherSeats">Leather Seats</Select.Option>
            <Select.Option value="navigation">Navigation</Select.Option>
            <Select.Option value="bluetooth">Bluetooth</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
