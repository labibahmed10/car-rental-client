import CarCards from "../../components/common/CarCards";
import CarFiltering from "./CarFiltering";

export default function AllCars() {
  return (
    <section className="sm:max-w-screen-xl mx-auto px-4 sm:px-0 my-10 sm:my-16">
      {/* filters */}
      <CarFiltering />

      {/* all cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full sm:w-[80rem]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <CarCards key={item} />
        ))}
      </div>
    </section>
  );
}
