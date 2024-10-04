import { CarFilled, MoneyCollectFilled, UsergroupDeleteOutlined } from "@ant-design/icons";
import img from "../../../assets/images/whyus-1.jpg";
import ExtraInfo from "./ExtraInfo";

export default function WhyUsPart() {
  return (
    <section className="rounded-xl sm:max-w-screen-xl sm:mx-auto my-10 sm:my-16 px-4 sm:px-0 ">
      <div className="flex justify-between items-center flex-col sm:flex-row gap-5 sm:gap-10 sm:h-[600px] text-center sm:text-left">
        <div className="w-full sm:w-1/2 h-fit">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-lg sm:text-xl font-semibold text-[#e6a131]">Why Choose Us</h1>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Trusted by Thousands, <br /> Preferred by You
            </h2>
            <p className="text-lg sm:text-xl font-semibold ">
              We provide a comprehensive range of car rental services, including luxury cars, SUVs, and more. Our fleet is regularly maintained and
              updated to ensure your safety and comfort.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-justify mt-5">
            <ExtraInfo
              text="Wide Range of Vehicles Choose from a diverse fleet of well-maintained vehicles, including compact cars, luxury sedans, spacious SUVs, and eco-friendly."
              LogoComponent={<CarFilled className="text-white" />}
            />

            <ExtraInfo
              text="Affordable and Transparent Pricing Enjoy competitive rates with no hidden fees. We believe in transparency and honesty, providing clear and upfront pricing."
              LogoComponent={<MoneyCollectFilled className="text-white" />}
            />

            <ExtraInfo
              text="Exceptional Customer Service Our dedicated support team is available 24/7 to assist you with any questions or concerns."
              LogoComponent={<UsergroupDeleteOutlined className="text-white" />}
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-full rounded-xl overflow-hidden">
          <img src={img} className="w-full h-full object-cover" alt="Car" />
        </div>
      </div>
    </section>
  );
}
