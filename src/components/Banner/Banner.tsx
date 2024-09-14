import { Button, Image } from "antd";
import GalleryImage from "../../assets/images/mazda-red.png";

export default function Banner() {
  return (
    <section className="flex items-center justify-center w-full h-full max-w-screen-xl mx-auto my-16">
      <div className="flex flex-col gap-2 w-1/2 h-full">
        <p className="text-slate-600 py-0 my-0">Rent a car to move from local hosts in 190+ countries.</p>
        <h2 className="text-4xl font-bold py-0 my-0">Make Your Ride Easy & Fast with Shift Ride Rental</h2>
        <p className="text-slate-600">More than 40,000 private car rentals and bareboat near your location to get best ride experience.</p>

        <Button
          type="primary"
          size="large"
          className="bg-[#223e51] text-white w-40"
          style={{
            transition: "background-color 0.2s",
            backgroundColor: "#223e51",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a2a36")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#223e51")}
        >
          Book Now
        </Button>
      </div>
      <img src={GalleryImage} alt="Gallery Image" className="w-1/2 h-full object-fill" />
    </section>
  );
}
