import { Card } from "antd";
import CarCards from "../../../components/common/CarCards";
import { ISelectCarFunc } from "../../../types/booking.type";

export default function AvailableCars({ handleCarSelect, availableCars }: ISelectCarFunc) {
  return (
    <>
      <Card title="Available Cars" className="mb-8 p-0 m-0">
        <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-5">
          {availableCars?.data?.map((car) => (
            <CarCards key={car._id} handleCarSelect={handleCarSelect} car={car} />
          ))}
        </div>
      </Card>
    </>
  );
}
