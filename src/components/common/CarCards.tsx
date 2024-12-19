import { NavLink, useLocation } from "react-router-dom";
import { ISelectCarFunc } from "../../types/booking.type";
import MyButton from "./MyButton";
import { ICarData } from "../../types/car.types";
import { GiCarDoor } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineElectricCar } from "react-icons/md";

export default function CarCards({ handleCarSelect, car }: ISelectCarFunc) {
  const { pathname } = useLocation();
  const isBookingPage = pathname.split("/").includes("booking");

  const handleCar = () => {
    if (handleCarSelect) {
      handleCarSelect(car);
    }
  };

  const { name, image, _id, pricePerHour, isElectric } = car as ICarData;

  const carDetails = [
    {
      icon: <GiCarDoor />,
      label: "Doors",
      value: 2,
    },
    {
      icon: <BsFillPersonFill />,
      label: "Passengers",
      value: 3,
    },
    {
      icon: <MdOutlineElectricCar />,
      label: "Electric",
      value: isElectric ? "Yes" : "No",
    },
  ];

  // sm:mx-auto sm:w-[35rem] w-full sm:h-[19rem]
  return (
    <div className={`rounded-2xl ${isBookingPage ? "h-fit" : "sm:w-[35rem] sm:h-[20rem]"} object-fill relative`}>
      <img
        src={image as string}
        alt="Car"
        className="w-full aspect-video rounded-xl transition-all overflow-hidden duration-500 hover:scale-110 z-10 cursor-pointer"
      />

      <div className="bg-[#222222] flex flex-row sm:flex-row gap-2 items-center justify-between px-2 py-2 md:px-6 md:py-4 w-[90%] md:w-4/5 absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-xl text-white">
        <div className=" flex flex-col gap-2">
          <h3 className="text-sm sm:text-xl font-semibold">{name}</h3>

          <div className="flex flex-row items-center gap-2">
            {carDetails.map(({ icon, value }, ind) => (
              <div key={ind} className="">
                <div className="text-sm sm:text-lg text-white">
                  <span className="text-[#f5b754]">{icon}</span> <span className="text-slate-100">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center gap-2">
          {isBookingPage ? (
            <MyButton text="Book Now" onClick={handleCar} />
          ) : (
            <NavLink to={`/cars/${_id}`}>
              <MyButton text="See Details" extraStyle="py-0 text-sm md:text-lg" />
            </NavLink>
          )}

          <p className="text-sm text-slate-100">
            <span className="text-[#f5b754] text-sm md:text-lg font-bold">${pricePerHour}</span>
            <br />
            /hour
          </p>
        </div>
      </div>
    </div>
  );
}
