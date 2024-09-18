/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Row, Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;

const mockCars = [
  { id: 1, name: "Toyota Camry", type: "Sedan", price: 50, image: "https://example.com/camry.jpg" },
  { id: 2, name: "Honda CR-V", type: "SUV", price: 70, image: "https://example.com/crv.jpg" },
  { id: 3, name: "Ford Mustang", type: "Luxury", price: 100, image: "https://example.com/mustang.jpg" },
];

export default function AvailableCars() {
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
    // form.setFieldsValue({ carId: car.id });
  };

  return (
    <>
      <Card title="Available Cars" className="mb-8">
        <Row gutter={[16, 16]}>
          {mockCars.map((car) => (
            <Col xs={24} sm={12} md={8} key={car.id}>
              <Card
                hoverable
                cover={<img alt={car.name} src={car.image} />}
                onClick={() => handleCarSelect(car)}
                className={`${selectedCar?.id === car.id ? "border-2 border-blue-500" : ""}`}
              >
                <Card.Meta
                  title={car.name}
                  description={
                    <>
                      <Text>Type: {car.type}</Text>
                      <br />
                      <Text>Price: ${car.price}/day</Text>
                    </>
                  }
                />
                <Button type="primary" className="mt-4" block>
                  Select
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </>
  );
}
