import Banner from "./Banner/Banner";
import FeaturedCars from "./Featured/FeaturedCars";
import Testimonials from "./Testimonials/Testimonials";
import WhyUsPart from "./WhyUsPart/WhyUsPart";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedCars />
      <WhyUsPart />
      <Testimonials />
    </>
  );
}
