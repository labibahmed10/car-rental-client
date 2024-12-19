import Slider from "react-slick";
import TestimonialCard from "../../../components/common/TestimonialCard";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  cssEase: "linear",
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

export default function Testimonials() {
  return (
    <section className="sm:max-w-screen-xl sm:mx-auto my-10 sm:my-16 px-8 sm:px-0">
      <div className="text-center space-y-3">
        <h2 className="text-lg font-semibold text-[#e6a131]">Our Testimonials</h2>
        <p className="text-2xl sm:text-5xl font-bold">What Client’s Says</p>
        <p className="text-lg">
          The proper business solution for your developing business the proper <br /> business solution for your developing business
        </p>
      </div>

      {/* bottom part */}
      <div className="mt-10">
        <Slider {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    </section>
  );
}
