export default function TestimonialCard() {
  return (
    <div className="flex justify-center my-8 mx-4">
      <div className="bg-[#F2F7E8] shadow-md rounded-lg p-6 max-w-md space-y-3">
        <h3 className="text-xl font-semibold text-center">John Doe</h3>
        <p className="text-gray-600 text-center">"This service has transformed my business! Highly recommend to anyone looking to grow."</p>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.121-6.535L0 6.545l6.545-.955L10 0l2.455 5.59L20 6.545l-5.243 4.005 1.121 6.535z" />
            </svg>
          ))}
        </div>
        <img src="https://via.placeholder.com/200" alt="User" className="size-12 rounded-full mx-auto mb-4" />
      </div>
    </div>
  );
}
