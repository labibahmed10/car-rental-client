import { Spin } from "antd";
import CarSearchForm from "../../components/common/CarSearchForm";
import { useGetAllCarsQuery } from "../../redux/feature/car/carApi";
import CarSecondaryCard from "../../components/common/CarSecondaryCard.";
import { useAppSelector } from "../../redux/store/hooks";

export default function AllCars() {
  const { data: allCars, isLoading } = useGetAllCarsQuery(undefined);
  const filteredValue = useAppSelector((state) => state.car.carSearchValue);

  let render;

  if (isLoading) {
    render = (
      <Spin style={{ color: "#fff" }} tip="Loading..." size="large" className="flex justify-center items-center max-w-screen-xl w-full h-96"></Spin>
    );
  } else if (!allCars?.data || allCars.data.length === 0) {
    render = (
      <div className="flex justify-center items-center w-full h-96">
        <h2 className="text-xl">No cars available</h2>
      </div>
    );
  } else {
    const filteredCars = allCars.data.filter((car) => {
      const matchesCarType = filteredValue?.carType ? car.type === filteredValue.carType : true;
      const matchesPriceRange = filteredValue?.priceRange ? car.pricePerHour <= Number(filteredValue.priceRange) : true;
      const matchesFeatures = filteredValue?.features ? car.features.includes(filteredValue.features) : true;

      return matchesCarType && matchesPriceRange && matchesFeatures;
    });

    render = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 w-full">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarSecondaryCard car={car} key={car._id} />)
        ) : (
          <div className="py-5">
            <h2 className="text-2xl">No cars match your criteria</h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="sm:max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-0 md:gap-10 px-4 sm:px-0 my-20 sm:my-24">
      {/* filters */}
      <div className="col-span-12 md:col-span-4 static md:sticky md:top-10 md:h-screen overflow-y-auto">
        <CarSearchForm />
      </div>

      {/* all cars */}
      <div className="col-span-12 md:col-span-8 overflow-y-auto py-10">{render}</div>
    </section>
  );
}
