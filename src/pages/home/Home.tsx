import Banner from "./Banner/Banner";
import CarBookingForm from "./Banner/CarBookingForm";
import FeaturedCars from "./Featured/FeaturedCars";
import Testimonials from "./Testimonials/Testimonials";
import WhyUsPart from "./WhyUsPart/WhyUsPart";

export default function Home() {
  return (
    <>
      <Banner />
      <CarBookingForm />
      <FeaturedCars />
      <WhyUsPart />
      <Testimonials />
    </>
  );
}
