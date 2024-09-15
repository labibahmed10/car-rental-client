import { Button } from "antd";
import img from "../../assets/images/audi-luxury.png";
import { NavLink } from "react-router-dom";

export default function CarCards() {
  return (
    <div className="bg-[#f2f7e8] rounded-xl shadow-md mx-2 sm:mx-4 text-white">
      <img src={img} alt="Car" className="w-full h-64 object-fill rounded-md p-1" />

      <div className="bg-[#223E51] rounded-b-xl p-4 sm:p-4">
        <h3 className="text-2xl font-semibold">Car Name</h3>

        <p className="text-lg font-semibold text-slate-600mc"> $100/day</p>
        <p className="text-slate-100 text-sm mt-2">
          Description of the car goes here...{" "}
          <NavLink to="/cars/1" className="text-slate-100 text-sm cursor-pointer no-underline">
            Show more
          </NavLink>
        </p>
        <div className="flex justify-end items-center mt-5">
          <Button className="bg-[#223e51] text-white text-xl h-11 sm:h-12 w-40 sm:w-48">Book Now</Button>
        </div>
      </div>
    </div>
  );
}
