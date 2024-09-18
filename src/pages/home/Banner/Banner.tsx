import GalleryImage from "../../../assets/images/mazda-red.png";
import MyButton from "../../../components/common/MyButton";

export default function Banner() {
  return (
    <section className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-0 justify-between sm:max-w-screen-xl mx-auto my-10 sm:my-16 p-4 sm:p-0">
      <div className="flex flex-col gap-2 w-11/12 sm:w-1/2 h-full">
        <p className="text-lg sm:text-xl text-slate-600 py-0 my-0">Rent a car to move from local hosts in 190+ countries.</p>

        <h2 className="text-4xl sm:text-6xl leading-snug font-bold py-0 my-0">Make Your Ride Easy & Fast with Shift Ride Rental</h2>
        <p className="text-lg sm:text-xl text-slate-600 py-0 my-0">
          More than 40,000 private car rentals and bareboat near your location to get best ride experience.
        </p>

        <MyButton text="Book Now" extraStyle="w-40 sm:w-48 h-12 sm:h-16 mt-3 sm:mt-7" />
      </div>
      <img src={GalleryImage} alt="Gallery Image" className="w-full sm:w-1/2 h-full object-cover" />
    </section>
  );
}
