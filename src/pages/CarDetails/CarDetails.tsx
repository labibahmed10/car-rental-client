import { Rate } from "antd";
import img from "../../assets/images/audi-luxury.png";
import CarReviewForm from "./CarReviewForm";
import CarDescription from "./CarDescription";
import CarAttributes from "./CarAttributes";
import CarExtra from "./CarExtra";
import { additionalOpt, insuranceOpt } from "./carConstValues";
import { NavLink } from "react-router-dom";
import MyButton from "../../components/common/MyButton";

const carDetails = {
  _id: "66df16832b3ca37eb11b0cb1",
  name: "Reno das",
  description: "An electric car with advanced technology and performance.",
  color: "Blue",
  isElectric: false,
  status: "available",
  features: ["Advanced Safety", "Navigation System", "Bluetooth Connectivity"],
  pricePerHour: 600,
  isDeleted: true,
  createdAt: "2024-09-09T15:38:43.838+00:00",
  updatedAt: "2024-09-09T16:58:06.846+00:00",
};

export default function CarDetails() {
  return (
    <section className="sm:my-16 my-10 max-w-screen-xl mx-auto px-4 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-10">
        {/* left part image and description part */}
        <div>
          <img src={img} alt={carDetails.name} className="w-full h-full p-10 bg-[#F2F7E8] rounded-lg border-2 border-gray-300 border-solid" />
          <CarDescription description={carDetails.description} />
        </div>

        {/*  all rest of the details */}
        <div>
          <h2 className="text-3xl font-semibold">{carDetails.name}</h2>
          <p className="text-lg font-semibold text-slate-600 mt-2">${carDetails.pricePerHour}/hour</p>
          <div className="text-gray-700 mt-2 flex items-center gap-2">
            <p className="text-gray-700 font-bold">COLOR: </p>
            <p className="font-semibold bg-gray-300 p-2 rounded-lg">{carDetails.color}</p>
          </div>
          <div className="text-gray-700 mt-2 flex items-center  gap-2">
            <p className="text-gray-700 font-bold">STATUS:</p>
            <p className={`${carDetails.status === "available" ? "p-2 bg-green-500 rounded-lg" : "p-2 bg-red-400 rounded-lg "} font-semibold`}>
              {carDetails.status}
            </p>
          </div>
          <p className="text-gray-700 mt-4 font-bold">FEATURES:</p>

          <div className=" text-gray-700 flex items flex-wrap gap-2 mt-2">
            {carDetails.features.map((feature, index) => (
              <p key={index} className="p-2 bg-gray-300 rounded-lg">
                {feature}
              </p>
            ))}
          </div>

          <p className="text-gray-700 mt-4 font-bold">ADDITIONAL FEATURES:</p>
          <CarExtra options={additionalOpt} />

          <p className="text-gray-700 mt-4 font-bold">INSURANCE OPTIONS:</p>
          <CarExtra options={insuranceOpt} />

          {/* attributes */}
          <CarAttributes />

          {/* ratings */}
          <p className="text-gray-700 mt-4 font-bold">RATINGS:</p>
          <div className="mt-2 flex items-center gap-2">
            <Rate allowHalf defaultValue={4.5} disabled />
            <span className="font-semibold">4.5/5</span>
          </div>

          {/* clicking here would take to booking page */}
          <div className="mt-10">
            <NavLink to="/cars/booking">
              {/* <Button className="bg-[#223e51] text-white text-xl h-11 sm:h-12 w-full" disabled={carDetails.status === "unavailable"}>
                {carDetails.status === "unavailable" ? "Unavailable" : "Book Now"}
              </Button> */}

              <MyButton text={carDetails.status === "unavailable" ? "Unavailable" : "Book Now"} extraStyle="text-xl h-11 sm:h-12 w-full" />
            </NavLink>
          </div>

          {/* review form */}
          <CarReviewForm />
        </div>
      </div>
    </section>
  );
}
