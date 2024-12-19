import { Card } from "antd";
import { ISelectCarFunc } from "../../../types/booking.type";
import CarSecondaryCard from "../../../components/common/CarSecondaryCard.";

export default function AvailableCars({ handleCarSelect, availableCars }: ISelectCarFunc) {
  return (
    <>
      <Card title={<span className="text-3xl text-slate-100">Available Cars</span>} className="mb-8 p-0 bg-inherit border-none text-slate-100">
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5">
          {availableCars?.data?.map((car) => (
            <CarSecondaryCard key={car._id} car={car} handleCarSelect={handleCarSelect} />
          ))}
        </div>
      </Card>
    </>
  );
}
