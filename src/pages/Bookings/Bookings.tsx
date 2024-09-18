/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Form } from "antd";
import AvailableCars from "./components/AvailableCars";
import ShowSelectedCar from "./components/ShowSelectedCar";
import PersonalInfo from "./components/PersonalInfo";
import PaymentInfo from "./components/PaymentInfo";
import CarSearchForm from "../../components/common/CarSearchForm";
import BookingConfirmationModal from "../../components/modal/BookingConfirmationModal";
import MyButton from "../../components/common/MyButton";

const Bookings: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  const onFinish = (values: any) => {
    setBookingDetails(values);
    setIsModalVisible(true);
  };

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
    form.setFieldsValue({ carId: car.id });
  };

  return (
    <div className="sm:max-w-[1280px] sm:min-w-[1280px] mx-auto px-4 sm:px-0 py-8">
      <h1 className="text-center font-semibold text-3xl sm:text-5xl mb-5">Book Your Car</h1>

      <CarSearchForm />

      <AvailableCars handleCarSelect={handleCarSelect} />

      {selectedCar && <ShowSelectedCar selectedCar={selectedCar} />}

      <Form layout="vertical" name="confirmBooking" form={form} onFinish={onFinish} className="space-y-6 w-full">
        <PersonalInfo />
        <PaymentInfo />

        <Form.Item>
          <MyButton text="Book Now" type="submit" />
        </Form.Item>
      </Form>

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
