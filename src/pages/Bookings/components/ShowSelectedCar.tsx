import { Card, Checkbox, Col, Divider, Row, Typography } from "antd";
import { ICarDetails } from "../../../types/booking.type";

const { Title, Text } = Typography;

export default function ShowSelectedCar({ selectedCar }: { selectedCar: ICarDetails }) {
  return (
    <Card title="Selected Car Details" className="mb-8">
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <img src={selectedCar.image} alt={selectedCar.name} className="w-full  sm:h-[22rem] object-fill" />
        </Col>

        <Col xs={24} md={12}>
          <Title level={4}>{selectedCar.name}</Title>
          <Text>Type: {selectedCar.type}</Text>
          <br />
          <Text>Price: ${selectedCar.price}/day</Text>
          <Divider />

          <Text strong>Features:</Text>
          <ul className="list-disc list-inside">
            <li>Air Conditioning</li>
            <li>Bluetooth</li>
            <li>Backup Camera</li>
          </ul>

          <Divider />

          <div className="flex flex-col mb-2">
            <Text strong>Insurance Options:</Text>
            <Checkbox>Add comprehensive insurance (+$15/day)</Checkbox>
          </div>
          <div>
            <Text strong>Cancellation Policy:</Text>
            <p>Free cancellation up to 24 hours before pickup</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
