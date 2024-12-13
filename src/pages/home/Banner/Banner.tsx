import MyButton from "../../../components/common/MyButton";
import CarBookingForm from "./CarBookingForm";

export default function Banner() {
  return (
    <section className={`bg-[url('assets/images/bg1.jpg')] bg-cover bg-no-repeat h-screen text-white grid place-items-center md:py-10 lg:py-20`}>

      <div className="max-w-4xl mx-auto text-center px-5 sm:px-0 space-y-5">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-0 my-0">Rent a car to move from local hosts in 190+ countries.</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-bold py-0 my-0">
          Make Your Ride Easy & Fast with Shift Ride Rental
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-0 my-0">
          More than 40,000 private car rentals and bareboat near your location to get best ride experience.
        </p>

        <MyButton text="Book Now" extraStyle="w-40 sm:w-48 h-12 sm:h-16 mt-3 sm:mt-7" />

        <CarBookingForm />
      </div>
    </section>

    // <section
    //   className={`bg-[url('assets/images/bg1.jpg')] bg-cover sm:bg-[length:100vw_100vh] bg-no-repeat h-screen text-white grid place-items-center`}
    // >
    //   <div className="max-w-3xl text-center ">
    //     <p className="text-lg sm:text-xl py-0 my-0">Rent a car to move from local hosts in 190+ countries.</p>

    //     <h2 className="text-4xl sm:text-6xl leading-snug font-bold py-0 my-0">Make Your Ride Easy & Fast with Shift Ride Rental</h2>
    //     <p className="text-lg sm:text-xl py-0 my-0">
    //       More than 40,000 private car rentals and bareboat near your location to get best ride experience.
    //     </p>

    //     <MyButton text="Book Now" extraStyle="w-40 sm:w-48 h-12 sm:h-16 mt-3 sm:mt-7" />

    //     <CarBookingForm />
    //   </div>
    // </section>
  );
}
