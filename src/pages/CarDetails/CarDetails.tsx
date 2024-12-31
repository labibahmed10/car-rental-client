import { Rate, Spin } from "antd";
import CarReviewForm from "./components/CarReviewForm";
import CarDescription from "./components/CarDescription";
import CarAttributes from "./components/CarAttributes";
import CarExtra from "./components/CarExtra";
import { additionalOpt, insuranceOpt } from "./carConstValues";
import { NavLink, useParams } from "react-router-dom";
import MyButton from "../../components/common/MyButton";
import { useGetCarQuery } from "../../redux/feature/car/carApi";
import { ICarData } from "../../types/car.types";
import CarAdditionalFeat from "./components/CarAdditionalFeatSelect";

export default function CarDetails() {
  const { id } = useParams();
  const { data: singleCar, isLoading } = useGetCarQuery({ id: id as string });

  if (isLoading) {
    return <Spin tip="Loading..." size="large" className="flex justify-center items-center h-96" />;
  }
  const { color, features, image, type, description, name, model, pricePerHour, status } = singleCar?.data as ICarData;

  return (
    <section className="sm:my-16 my-10 max-w-screen-xl mx-auto px-4 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-10 my-20">
        {/* left part image and description part */}
        <div className="w-full h-full">
          <img src={image as string} alt={name} className="w-full aspect-video object-fill rounded-lg border border-[#f5b754] border-solid" />
          <CarDescription description={description} />

          {/* review form */}
          <CarReviewForm />
        </div>

        {/*  all rest of the details */}
        <div className="">
          <h2 className="text-3xl font-semibold text-[#f5b754]">{name}</h2>
          <p className="text-lg font-semibold text-slate-100 mt-2">{model}</p>
          <p className="text-lg font-semibold text-slate-100 mt-2">${pricePerHour} / hour</p>
          <div className="text-slate-100 mt-2 flex items-center gap-2">
            <p className="text-slate-100 font-bold">COLOR: </p>
            <p className="font-semibold bg-gray-500 p-2 rounded-lg">{color}</p>
          </div>
          <div className="text-slate-100 mt-2 flex items-center gap-2">
            <p className="text-slate-100 font-bold">TYPE: </p>
            <p className="font-semibold bg-gray-500 p-2 rounded-lg">{type}</p>
          </div>
          <div className="text-slate-100 mt-2 flex items-center  gap-2">
            <p className="text-slate-100 font-bold">STATUS:</p>
            <p className={`${status === "available" ? "p-2 bg-green-500 rounded-lg" : "p-2 bg-red-400 rounded-lg "} font-semibold`}>{status}</p>
          </div>
          <p className="text-slate-100 mt-4 font-bold">FEATURES:</p>

          <div className=" text-slate-100 flex items flex-wrap gap-2 mt-2">
            {features.map((feature, index) => (
              <p key={index} className="p-2 bg-gray-500 rounded-lg">
                {feature}
              </p>
            ))}
          </div>

          <p className="text-slate-100 mt-4 font-bold">ADDITIONAL FEATURES:</p>
          <CarAdditionalFeat options={additionalOpt} />

          <p className="text-slate-100 mt-4 font-bold">INSURANCE OPTIONS:</p>
          <CarExtra options={insuranceOpt} />

          {/* attributes */}
          <CarAttributes />

          {/* ratings */}
          <p className="text-slate-100 mt-4 font-bold">RATINGS:</p>
          <div className="mt-2 flex items-center gap-2">
            <Rate allowHalf defaultValue={4.5} disabled />
            <span className="font-semibold">4.5/5</span>
          </div>

          {/* clicking here would take to booking page */}
          <div className="mt-10">
            <NavLink to="/cars/booking" state={singleCar?.data}>
              <MyButton
                text={status === "unavailable" ? "Unavailable" : "Book Now"}
                disable={status === "unavailable"}
                extraStyle="text-xl h-11 sm:h-12 w-full"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
