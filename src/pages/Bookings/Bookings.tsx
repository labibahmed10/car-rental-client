// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
// import { Form } from "antd";
// import AvailableCars from "./components/AvailableCars";
// import ShowSelectedCar from "./components/ShowSelectedCar";
// import PersonalInfo from "./components/PersonalInfo";
// import CarSearchForm from "../../components/common/CarSearchForm";
// import BookingConfirmationModal from "../../components/modal/BookingConfirmationModal";
// import MyButton from "../../components/common/MyButton";
// import { useGetAllCarsQuery } from "../../redux/feature/car/carApi";
// import { ICarData } from "../../types/car.types";
// import { useLocation } from "react-router-dom";
// import { useAppSelector } from "../../redux/store/hooks";
// import { selectSearchValue } from "../../redux/feature/car/carSlice";

// const Bookings: React.FC = () => {
//   const [form] = Form.useForm();
//   const [skip, setSkip] = useState<boolean>(true);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState<any>(null);
//   const location = useLocation();
//   const [selectedCar, setSelectedCar] = useState<ICarData | undefined>(location.state);
//   const searchValues = useAppSelector(selectSearchValue);

//   const { data: availableCars } = useGetAllCarsQuery(searchValues, { skip: skip });

//   const onFinish = (values: any) => {
//     setBookingDetails(values);
//     setIsModalVisible(true);
//   };

//   const handleCarSelect = (car: any) => {
//     setSelectedCar(car);
//   };

//   return (
//     <div className="sm:max-w-[1280px] mx-auto px-4 sm:px-0 my-10 md:my-24">
//       <h1 className="text-center font-semibold text-3xl sm:text-5xl mb-5">Book Your Car</h1>

//       <CarSearchForm setSkip={setSkip} />

//       {(availableCars?.data as ICarData[])?.length > 0 && <AvailableCars handleCarSelect={handleCarSelect} availableCars={availableCars} />}

//       {selectedCar && <ShowSelectedCar selectedCar={selectedCar} />}

//       <Form layout="vertical" name="confirmBooking" form={form} onFinish={onFinish} className="space-y-6 w-full">
//         <PersonalInfo />

//         {/* will work with payment later*/}
//         {/* <PaymentInfo /> */}

//         <Form.Item>
//           <MyButton text="Book Now" type="submit" disable={!selectedCar} />
//         </Form.Item>
//       </Form>

//       <BookingConfirmationModal
//         bookingDetails={bookingDetails}
//         isModalVisible={isModalVisible}
//         selectedCar={selectedCar}
//         setIsModalVisible={setIsModalVisible}
//       />
//     </div>
//   );
// };

// export default Bookings;
import React, { useState } from "react";
import { Form } from "antd";
import AvailableCars from "./components/AvailableCars";
import ShowSelectedCar from "./components/ShowSelectedCar";
import PersonalInfo from "./components/PersonalInfo";
import CarSearchForm from "../../components/common/CarSearchForm";
import BookingConfirmationModal from "../../components/modal/BookingConfirmationModal";
import MyButton from "../../components/common/MyButton";
import { useGetAllCarsQuery } from "../../redux/feature/car/carApi";
import { ICarData } from "../../types/car.types";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";
import { selectSearchValue } from "../../redux/feature/car/carSlice";

const Bookings: React.FC = () => {
  const [form] = Form.useForm();
  const [skip, setSkip] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState<ICarData | undefined>(location.state);
  const searchValues = useAppSelector(selectSearchValue);

  const { data: availableCars } = useGetAllCarsQuery(searchValues, { skip: skip });

  const onFinish = (values: any) => {
    setBookingDetails(values);
    setIsModalVisible(true);
  };

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
  };

  return (
    <div className="sm:max-w-[1280px] mx-auto px-4 sm:px-0 my-10 md:my-24">
      <h1 className="text-center font-semibold text-3xl sm:text-5xl mb-5">Book Your Car</h1>

      <div className="flex flex-col md:flex-row">
        {/* Left Side: Search Form */}
        <div className="md:w-1/3 p-4">
          <CarSearchForm setSkip={setSkip} />
        </div>

        {/* Right Side: Selected Car and Booking Info */}
        <div className="md:w-2/3 p-4">
          {selectedCar && <ShowSelectedCar selectedCar={selectedCar} />}
          
          <Form layout="vertical" name="confirmBooking" form={form} onFinish={onFinish} className="space-y-6 w-full">
            <PersonalInfo />
            <Form.Item>
              <MyButton text="Book Now" type="submit" disable={!selectedCar} />
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Available Cars Section at the Bottom */}
      {(availableCars?.data as ICarData[])?.length > 0 && (
        <div className="mt-6">
          <AvailableCars handleCarSelect={handleCarSelect} availableCars={availableCars} />
        </div>
      )}

      <BookingConfirmationModal
        bookingDetails={bookingDetails}
        isModalVisible={isModalVisible}
        selectedCar={selectedCar}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default Bookings;