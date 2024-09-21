import img from "../../assets/images/audi-luxury.png";
import { NavLink, useLocation } from "react-router-dom";
import { ISelectCarFunc } from "../../types/booking.type";
import MyButton from "./MyButton";
import { ICarData } from "../../types/car.types";

export default function CarCards({ handleCarSelect, car }: ISelectCarFunc) {
  const { pathname } = useLocation();
  const isBookingPage = pathname.split("/").includes("booking");

  const handleCar = () => {
    if (handleCarSelect) {
      handleCarSelect(car);
    }
  };

  const { name, pricePerHour, description } = car as ICarData;

  return (
    <div className="bg-[#f2f7e8] rounded-xl shadow-md mx-2 sm:mx-4 text-white">
      <img src={img} alt="Car" className="w-full h-64 object-fill rounded-md p-1" />

      <div className="bg-[#245372] rounded-b-xl p-4 sm:p-4">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="text-lg font-semibold text-slate-600mc">${pricePerHour} / day</p>
        <p className="text-slate-100 text-sm mt-2">{description?.split(" ")?.slice(0, 12)?.join(" ") + "..."}</p>
        <div className="flex justify-end items-center mt-5">
          {isBookingPage ? (
            <MyButton text="Book Now" onClick={handleCar} />
          ) : (
            <NavLink to={`/cars/${"audi-luxury"}`}>
              <MyButton text="See Details" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
