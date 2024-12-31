/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Form } from "antd";
import AvailableCars from "./components/AvailableCars";
import ShowSelectedCar from "./components/ShowSelectedCar";
import CarSearchForm from "../../components/common/CarSearchForm";
import BookingConfirmationModal from "../../components/modal/BookingConfirmationModal";
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
  // console.log(bookingDetails)
  return (
    <div className="sm:max-w-[1280px] mx-auto px-4 sm:px-0 my-20 md:my-24">
      <h1 className="text-center font-semibold text-3xl sm:text-5xl mb-10">Book Your Car</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Search & Available Cars */}
        <div className="space-y-6 col-span-8">
          <CarSearchForm setSkip={setSkip} />
          {(availableCars?.data as ICarData[])?.length > 0 ? (
            <AvailableCars handleCarSelect={handleCarSelect} availableCars={availableCars} />
          ) : (
            <div>
              <p className="text-2xl">No cars available</p>
            </div>
          )}
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:sticky lg:top-4 space-y-6 col-span-4">
          {selectedCar && <ShowSelectedCar selectedCar={selectedCar} form={form} onfinish={onFinish} />}
        </div>
      </div>

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
