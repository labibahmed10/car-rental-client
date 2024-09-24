import { Modal, Row, Col, Divider, Typography } from "antd";
import { IBookingCar, IBookingConfirmModal, IBookingDetails } from "../../types/booking.type";
import { ICarData } from "../../types/car.types";
import { useCreateBookingMutation } from "../../redux/feature/booking/bookingApi";
import { toast } from "sonner";
const { Title, Text } = Typography;

export default function BookingConfirmationModal({ isModalVisible, setIsModalVisible, bookingDetails, selectedCar }: IBookingConfirmModal) {
  const [bookCar, { isSuccess, isError, error, isLoading, data, reset }] = useCreateBookingMutation();

  const onConfirmation = () => {
    const confirmationData: IBookingCar = {
      carId: selectedCar?._id as string,
      date: bookingDetails.date?.format("YYYY-MM-DD"),
      startTime: bookingDetails.date?.format("HH:MM"),
    };
    bookCar(confirmationData);
  };

  if (isSuccess) {
    setIsModalVisible(false);
    toast.success(data?.message);
    reset();
  }

  if (isError) {
    toast.error(error?.data?.message);
    reset();
  }
  console.log(selectedCar);
  return (
    <Modal
      title="Booking Confirmation"
      open={isModalVisible}
      onOk={onConfirmation}
      onCancel={() => setIsModalVisible(false)}
      width={700}
      loading={isLoading}
    >
      {bookingDetails && (
        <div>
          <Title level={4}>Booking Details</Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Car:</Text> {selectedCar?.name}
            </Col>
            <Col span={12}>
              <Text strong>Type:</Text> {selectedCar?.type}
            </Col>
            <Col span={12}>
              <Text strong>Pick-up Date:</Text> {bookingDetails.date?.format("YYYY-MM-DD")}
            </Col>
            <Col span={12}>
              <Text strong>Pick-up Time:</Text> {bookingDetails.date?.format("HH:MM")}
            </Col>

            <Col span={12}>
              <Text strong>Location:</Text> {bookingDetails.location}
            </Col>
            <Col span={12}>
              <Text strong>Full Name:</Text> {bookingDetails.fullName}
            </Col>
            <Col span={12}>
              <Text strong>Email:</Text> {bookingDetails.email}
            </Col>
            <Col span={12}>
              <Text strong>NID/Passport:</Text> {bookingDetails.nidPassport}
            </Col>
            <Col span={12}>
              <Text strong>Card Number:</Text> {bookingDetails.cardNumber}
            </Col>
            {/* <Col span={24}>
              <Text strong>Additional Options:</Text>
              <ul>
                {bookingDetails.gps && <li>GPS Navigation</li>}
                {bookingDetails.childSeat && <li>Child Seat</li>}
                {bookingDetails.insurance && <li>Comprehensive Insurance</li>}
              </ul>
            </Col> */}
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <Text strong>Total Price:</Text> ${calculateTotalPrice(selectedCar, bookingDetails)}
            </Col>
          </Row>
        </div>
      )}
    </Modal>
  );
}

const calculateTotalPrice = (car: ICarData | undefined, details: IBookingDetails) => {
  if (!car || !details) return 0;
  const day = 1;
  const total = car.pricePerHour * day;

  //! will enhance this later
  // if (details.gps) total += 5 * day;
  // if (details.childSeat) total += 3 * day;
  // if (details.insurance) total += 15 * day;
  return total;
};
