import img1 from "../../assets/images/toyota-tall.png";
import img2 from "../../assets/images/fortuner.webp";
import img3 from "../../assets/images/audi-luxury.png";

export default function AboutUs() {
  return (
    <section className="max-w-screen-xl w-full mx-auto my-10 sm:my-16 px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="mb-6 sm:mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Company History</h2>
        <p className="text-base sm:text-lg">
          Founded in 2010, our mission is to provide reliable and affordable car rental services. Our vision is to be the leading car rental company,
          known for our exceptional customer service and commitment to sustainability.
        </p>
        <p className="text-base sm:text-lg">
          Our commitment to providing top-notch customer service and maintaining a reliable fleet has earned us a loyal customer base and numerous
          accolades within the industry. We have always strived to innovate and adapt to the changing needs of our customers, introducing new
          technologies and services to make the rental experience as seamless as possible.
        </p>
        <p className="text-base sm:text-lg">
          Today, we continue to build on our legacy of excellence, ensuring that every customer enjoys a safe, convenient, and enjoyable rental
          experience. We look forward to serving you and being a part of your journey.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center mt-6 gap-8">
          <div className="text-center">
            <img src="https://via.placeholder.com/300" alt="Team Member 4" className="rounded-full w-32 h-32 mb-2" />
            <h3 className="font-bold">Michael Brown</h3>
            <p>Marketing Director</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/300" alt="Team Member 1" className="rounded-full w-32 h-32 mb-2" />
            <h3 className="font-bold">John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/300" alt="Team Member 2" className="rounded-full w-32 h-32 mb-2" />
            <h3 className="font-bold">Jane Smith</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold">Our Fleet</h2>
        <p className="text-base sm:text-lg">
          We offer a diverse range of vehicles, including economy cars, luxury sedans, and spacious SUVs, ensuring that we have the perfect vehicle
          for every need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#F2F7E8] rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={img2} alt="Fleet Vehicle 1" className="rounded-md w-full h-64 object-fill mb-2 p-1" />
            <h3 className="text-lg font-semibold">Economy Car</h3>
            <p className="text-center">Affordable and efficient for city driving.</p>
          </div>
          <div className="bg-[#F2F7E8] rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={img1} alt="Fleet Vehicle 2" className="rounded-md w-full h-64 object-fill mb-2  p-1" />
            <h3 className="text-lg font-semibold">Luxury Sedan</h3>
            <p className="text-center">Experience comfort and style on the road.</p>
          </div>
          <div className="bg-[#F2F7E8] rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={img3} alt="Fleet Vehicle 3" className="rounded-md w-full h-64 object-fill mb-2  p-1" />
            <h3 className="text-lg font-semibold">Spacious SUV</h3>
            <p className="text-center">Perfect for family trips and adventures.</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold">Values & Commitment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#F2F7E8] rounded-lg shadow-md p-4 flex flex-col items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="text-4xl text-[#223E51]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path>
            </svg>
            <h3 className="text-lg font-semibold">Integrity</h3>
            <p className="text-center">We uphold the highest standards of integrity in all our actions.</p>
          </div>
          <div className="bg-[#F2F7E8] rounded-lg shadow-md p-4 flex flex-col items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="text-4xl text-[#223E51]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
            </svg>
            <h3 className="text-lg font-semibold">Customer Focus</h3>
            <p className="text-center">Our customers are at the heart of everything we do.</p>
          </div>
          <div className="bg-[#F2F7E8] rounded-lg shadow-md p-4 flex flex-col items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="text-4xl text-[#223E51]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path>
            </svg>
            <h3 className="text-lg font-semibold">Sustainability</h3>
            <p className="text-center">We are committed to sustainable practices in our operations.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="text-base sm:text-lg">Phone: (123) 456-7890</p>
        <p className="text-base sm:text-lg">Email: info@swiftride.com</p>
        <p className="text-base sm:text-lg">Address: 123 Car Rental St, City, Swift Ride Country</p>
      </div>
    </section>
  );
}
