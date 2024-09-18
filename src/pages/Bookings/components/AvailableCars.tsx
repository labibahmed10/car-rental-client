import { Card } from "antd";
import CarCards from "../../../components/common/CarCards";
import { ISelectCarFunc } from "../../../types/booking.type";

import carImg from "../../../assets/images/fortuner.webp";

const mockCars = [
  { id: 1, name: "Toyota Camry", type: "Sedan", price: 50, image: carImg },
  { id: 2, name: "Honda CR-V", type: "SUV", price: 70, image: carImg },
  { id: 3, name: "Ford Mustang", type: "Luxury", price: 100, image: carImg },
];

export default function AvailableCars({ handleCarSelect }: ISelectCarFunc) {
  return (
    <>
      <Card title="Available Cars" className="mb-8 p-0 m-0">
        <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-5">
          {mockCars.map((car) => (
            <CarCards key={car.id} handleCarSelect={handleCarSelect} car={car} />
          ))}
        </div>
      </Card>
    </>
  );
}
