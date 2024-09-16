import { Button } from "antd";
import CarCards from "../../../components/common/CarCards";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

export default function FeaturedCars() {
  return (
    <section className="max-w-screen-xl mx-auto my-10 sm:my-16 w-full px-4 sm:px-0">
      {/* top part */}
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-5">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-slate-600mc">Featured Cars</h1>
          <h2 className="text-3xl sm:text-6xl font-semibold">Our Featured Cars</h2>
        </div>

        <NavLink to="/cars">
          <Button className="bg-[#223e51] text-white text-xl h-10 sm:h-12 w-40 sm:w-48">See All Cars</Button>
        </NavLink>
      </div>

      {/* bottom part */}
      <div className="mt-10">
        <Slider {...settings}>
          <CarCards />
          <CarCards />
          <CarCards />
          <CarCards />
          <CarCards />
        </Slider>
      </div>
    </section>
  );
}
