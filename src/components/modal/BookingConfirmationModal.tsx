import { Modal, Row, Col, Divider, Typography } from "antd";
const { Title, Text } = Typography;


export default function BookingConfirmationModal({ isModalVisible, setIsModalVisible, bookingDetails, selectedCar }) {
  return (
    <Modal
      title="Booking Confirmation"
      open={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
      width={700}
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
              <Text strong>Pick-up Date:</Text> {bookingDetails.dates?.[0]?.format("YYYY-MM-DD")}
            </Col>
            <Col span={12}>
              <Text strong>Drop-off Date:</Text> {bookingDetails.dates?.[1]?.format("YYYY-MM-DD")}
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
            <Col span={24}>
              <Text strong>Additional Options:</Text>
              <ul>
                {bookingDetails.gps && <li>GPS Navigation</li>}
                {bookingDetails.childSeat && <li>Child Seat</li>}
                {bookingDetails.insurance && <li>Comprehensive Insurance</li>}
              </ul>
            </Col>
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

const calculateTotalPrice = (car: any, details: any) => {
  if (!car || !details) return 0;
  const days = details.dates?.[1]?.diff(details.dates?.[0], "days") || 1;
  let total = car.price * days;
  if (details.gps) total += 5 * days;
  if (details.childSeat) total += 3 * days;
  if (details.insurance) total += 15 * days;
  return total;
};
