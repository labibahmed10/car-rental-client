import { BsFillPersonFill } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineElectricCar } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ICarData } from "../../types/car.types";
import MyButton from "./MyButton";
import { ISelectCarFunc } from "../../types/booking.type";

const CarSecondaryCard = ({ car, handleCarSelect }: ISelectCarFunc) => {
  const { pathname } = useLocation();
  const isBookingPage = pathname.split("/").includes("booking");

  const { image, name, _id, isElectric, pricePerHour } = car as ICarData;

  const handleCar = () => {
    if (handleCarSelect) {
      handleCarSelect(car);
    }
  };

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

  return (
    <div className="group relative mb-12 shadow-lg bg-white dark:bg-[#222222] dark:text-white rounded-lg">
      <div className="rounded-t-lg overflow-hidden">
        <img
          src={image as string}
          alt={name}
          className="group-hover:brightness-75 group-hover:scale-110 transition duration-500 ease-in-out h-52 w-full aspect-[16/9] object-fill"
        />
      </div>

      <div className="rounded-b-lg bg-gray-100 dark:bg-[#222222] p-8">
        <Link to={`/cars/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h3 className="text-2xl text-yellow-500 font-bold">{name}</h3>
        </Link>
        <div className="space-y-3 my-4">
          {carDetails.map(({ icon, label, value }, index) => (
            <div key={index} className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                {icon}
                <span className="font-light text-gray-500 dark:text-gray-400">{label}</span>
              </div>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-primaryColorLight dark:text-primaryColor">
            ${pricePerHour}
            <span className="text-sm text-gray-800 dark:text-gray-200 font-thin ml-1">/hour</span>
          </h2>

          {isBookingPage ? (
            <MyButton text="Book Now" onClick={handleCar} />
          ) : (
            <NavLink to={`/cars/${_id}`}>
              <MyButton text="See Details" />
            </NavLink>
          )}
          {/* <Link to={`/cars/${_id}`}>
            <MyButton text="Details"></MyButton>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CarSecondaryCard;
