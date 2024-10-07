import { Card, Col, Divider, Row, Typography } from "antd";
import { ICarData } from "../../../types/car.types";
import CarExtra from "../../CarDetails/components/CarExtra";
import { additionalOpt, insuranceOpt } from "../../CarDetails/carConstValues";

const { Title, Text } = Typography;

export default function ShowSelectedCar({ selectedCar }: { selectedCar: ICarData }) {
  return (
    <Card title="Selected Car Details" className="mb-8">
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <img src={selectedCar.image as string} alt={selectedCar.name} className="w-full  sm:h-[22rem] object-fill" />
        </Col>

        <Col xs={24} md={12}>
          <Title level={4}>{selectedCar.name}</Title>
          <Text>Type: {selectedCar.type}</Text>
          <br />
          <Text>Price: ${selectedCar.pricePerHour} / day</Text>
          <Divider />

          <Text strong>Features:</Text>
          <ul className="list-disc list-inside">
            {selectedCar.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <p className="text-gray-700 mt-4 font-bold">ADDITIONAL FEATURES:</p>
          <CarExtra options={additionalOpt} />

          <p className="text-gray-700 mt-4 font-bold">INSURANCE OPTIONS:</p>
          <CarExtra options={insuranceOpt} />

          <Divider />

          <div>
            <Text strong>Cancellation Policy:</Text>
            <p>Free cancellation up to 24 hours before pickup</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
