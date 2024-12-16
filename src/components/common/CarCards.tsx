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

  const { name, image, _id } = car as ICarData;

  return (
    <div className="rounded-2xl shadow-md sm:mx-auto sm:w-[35rem] w-full sm:h-[19rem] relative">
      <img
        src={image as string}
        alt="Car"
        className="w-full h-full object-fill rounded-xl transition-all overflow-hidden duration-500 hover:scale-110 z-10 cursor-pointer"
      />

      <div className="bg-[#222222] flex flex-col sm:flex-row gap-2 items-center justify-between p-2 sm:p-4 w-2/3 absolute -bottom-[12%] left-1/2 -translate-x-1/2 rounded-full text-white">
        <h3 className="sm:text-xl font-semibold">{name}</h3>

        <div className="flex justify-end items-center">
          {isBookingPage ? (
            <MyButton text="Book Now" onClick={handleCar} />
          ) : (
            <NavLink to={`/cars/${_id}`}>
              <MyButton text="See Details" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
