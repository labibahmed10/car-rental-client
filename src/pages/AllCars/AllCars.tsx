import { Spin } from "antd";
import CarCards from "../../components/common/CarCards";
import CarSearchForm from "../../components/common/CarSearchForm";
import { useGetAllCarsQuery } from "../../redux/feature/car/carApi";

export default function AllCars() {
  const { data: allCars, isLoading } = useGetAllCarsQuery(undefined);

  let render;

  if (isLoading) {
    render = <Spin tip="Loading..." size="large" className="flex justify-center items-center max-w-screen-xl w-full h-96"></Spin>;
  } else {
    render = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full sm:w-[80rem] ">
        {allCars?.data.map((car) => (
          <CarCards car={car} key={car._id} />
        ))}
      </div>
    );
  }
  return (
    <section className="sm:max-w-screen-xl mx-auto px-4 sm:px-0 my-10 sm:my-16">
      {/* filters */}
      <CarSearchForm />

      {/* all cars */}
      {render}
    </section>
  );
}
