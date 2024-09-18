import { Card, Row } from "antd";
import CarCards from "../../../components/common/CarCards";
import { ISelectCarFunc } from "../../../types/booking";

const mockCars = [
  { id: 1, name: "Toyota Camry", type: "Sedan", price: 50, image: "https://example.com/camry.jpg" },
  { id: 2, name: "Honda CR-V", type: "SUV", price: 70, image: "https://example.com/crv.jpg" },
  { id: 3, name: "Ford Mustang", type: "Luxury", price: 100, image: "https://example.com/mustang.jpg" },
];

export default function AvailableCars({ handleCarSelect }: ISelectCarFunc) {
  return (
    <>
      <Card title="Available Cars" className="mb-8">
        <Row gutter={[16, 16]}>
          {mockCars.map((car) => (
            <CarCards key={car.id} handleCarSelect={handleCarSelect} car={car} />
          ))}
        </Row>
      </Card>
    </>
  );
}
