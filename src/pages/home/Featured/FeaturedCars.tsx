import CarCards from "../../../components/common/CarCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import MyButton from "../../../components/common/MyButton";
import { useGetAllCarsQuery } from "../../../redux/feature/car/carApi";
import { Spin } from "antd";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
  const { data: allCars, isLoading } = useGetAllCarsQuery(undefined);
  let render;

  if (isLoading) {
    render = <Spin tip="Loading..." size="large" className="h-96 flex justify-center items-center"></Spin>;
  } else {
    render = (
      <Slider {...settings}>
        {allCars?.data.map((car) => (
          <CarCards key={car?._id} car={car} />
        ))}
      </Slider>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto my-10 sm:my-16 w-full px-4 sm:px-0">
      {/* top part */}
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-5">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-[#e6a131]">Featured Cars</h1>
          <h2 className="text-3xl sm:text-6xl font-semibold">Our Featured Cars</h2>
        </div>

        <NavLink to="/cars">
          <MyButton text="See All Cars" extraStyle="h-10 sm:h-12 w-40 sm:w-48" />
        </NavLink>
      </div>

      {/* bottom part */}
      <div className="mt-20">{render}</div>
    </section>
  );
}
