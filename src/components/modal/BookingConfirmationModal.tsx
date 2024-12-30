/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Row, Col, Divider, Typography, Tag } from "antd";
import { IBookingCar, IBookingConfirmModal, IBookingDetails } from "../../types/booking.type";
import { ICarData } from "../../types/car.types";
import { useCreateBookingMutation } from "../../redux/feature/booking/bookingApi";
import { toast } from "sonner";
import { CheckCircleOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export default function BookingConfirmationModal({ isModalVisible, setIsModalVisible, bookingDetails, selectedCar }: IBookingConfirmModal) {
  const [bookCar, { isSuccess, isError, error, isLoading, data, reset }] = useCreateBookingMutation();

  const onConfirmation = () => {
    const confirmationData: IBookingCar = {
      id: selectedCar?._id as string,
      date: (bookingDetails.date as any)?.format("YYYY-MM-DD"),
      startTime: (bookingDetails.date as any)?.format("HH:MM"),
    };
    bookCar(confirmationData);
  };

  console.log({ bookingDetails, selectedCar });

  if (isSuccess) {
    setIsModalVisible(false);
    toast.success(data?.message);
    reset();
  }

  if (isError) {
    toast.error((error as any)?.data?.message);
    reset();
  }

  return (
    // <Modal
    //   title="Booking Confirmation"
    //   open={isModalVisible}
    //   onOk={onConfirmation}
    //   onCancel={() => setIsModalVisible(false)}
    //   width={700}
    //   loading={isLoading}
    // >
    //   {bookingDetails && (
    //     <div>
    //       <Title level={4}>Booking Details</Title>
    //       <Row gutter={[16, 16]}>
    //         <Col span={12}>
    //           <Text strong>Car:</Text> {selectedCar?.name}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>Type:</Text> {selectedCar?.type}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>Pick-up Date:</Text> {(bookingDetails.date as any)?.format("YYYY-MM-DD")}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>Pick-up Time:</Text> {(bookingDetails.date as any)?.format("HH:MM")}
    //         </Col>

    //         <Col span={12}>
    //           <Text strong>Location:</Text> {bookingDetails.location}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>Full Name:</Text> {bookingDetails.fullName}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>Email:</Text> {bookingDetails.email}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>NID/Passport:</Text> {bookingDetails.nidPassport}
    //         </Col>
    //         <Col span={12}>
    //           <Text strong>Card Number:</Text> {bookingDetails.cardNumber}
    //         </Col>
    //         {/* <Col span={24}>
    //           <Text strong>Additional Options:</Text>
    //           <ul>
    //             {bookingDetails.gps && <li>GPS Navigation</li>}
    //             {bookingDetails.childSeat && <li>Child Seat</li>}
    //             {bookingDetails.insurance && <li>Comprehensive Insurance</li>}
    //           </ul>
    //         </Col> */}
    //       </Row>
    //       <Divider />
    //       <Row>
    //         <Col span={24}>
    //           <Text strong>Total Price:</Text> ${calculateTotalPrice(selectedCar, bookingDetails)}
    //         </Col>
    //       </Row>
    //     </div>
    //   )}
    // </Modal>
    <Modal
      title={
        <Title level={3} style={{ textAlign: "center" }}>
          Booking Confirmation
        </Title>
      }
      open={isModalVisible}
      onOk={onConfirmation}
      onCancel={() => setIsModalVisible(false)}
      width={800}
      confirmLoading={isLoading}
      centered
      style={{ padding: "20px" }}
    >
      {bookingDetails && (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
         
          <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
            <Col span={12}>
              <Text strong>Car:</Text> <Tag color="blue">{selectedCar?.name}</Tag>
            </Col>
            <Col span={12}>
              <Text strong>Type:</Text> <Tag color="green">{selectedCar?.type}</Tag>
            </Col>
            <Col span={12}>
              <Text strong>Pick-up Date:</Text> <Text>{(bookingDetails.date as any)?.format("YYYY-MM-DD")}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Pick-up Time:</Text> <Text>{(bookingDetails.date as any)?.format("HH:mm")}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Location:</Text> <Text>{bookingDetails.location}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Full Name:</Text> <Text>{bookingDetails.fullName}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Email:</Text> <Text>{bookingDetails?.email}</Text>
            </Col>
            <Col span={12}>
              <Text strong>NID/Passport:</Text> <Text>{bookingDetails?.nidPassport}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Card Number:</Text> <Text>{bookingDetails?.cardNumber || bookingDetails?.drivingLicense}</Text>
            </Col>
          </Row>
          <Divider />
          <Row justify="space-between" align="middle">
            <Col>
              <Text strong>Total Price:</Text>{" "}
              <Text style={{ fontSize: "1.5em", color: "#ff4d4f" }}>${calculateTotalPrice(selectedCar, bookingDetails)}</Text>
            </Col>
            <Col>
              <CheckCircleOutlined style={{ fontSize: "24px", color: "#52c41a" }} />
            </Col>
          </Row>
          <Divider />
          <Text type="secondary" style={{ textAlign: "center", display: "block" }}>
            Thank you for choosing us! If you have any questions, feel free to contact us.
          </Text>
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
