import React, { useState } from "react";
import { Button, Form, Typography } from "antd";

// import CarSearchForm from "./components/CarSearchForm";
import AvailableCars from "./components/AvailableCars";
import ShowSelectedCar from "./components/ShowSelectedCar";
import PersonalInfo from "./components/PersonalInfo";
import PaymentInfo from "./components/PaymentInfo";
import CarSearchForm from "../../components/common/CarSearchForm";
import BookingConfirmationModal from "../../components/modal/BookingConfirmationModal";

const { Title } = Typography;

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
    <div className="min-w-[1280px] mx-auto px-4 sm:px-0 py-8">
      <Title level={2}>Book Your Car</Title>

      <CarSearchForm />

      <AvailableCars handleCarSelect={handleCarSelect} />

      {selectedCar && <ShowSelectedCar selectedCar={selectedCar} />}

      <Form layout="vertical" name="confirmBooking" form={form} onFinish={onFinish} className="space-y-6 w-full">
        <PersonalInfo />
        <PaymentInfo />

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Book Now
          </Button>
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

// import React, { useState } from "react";
// import { Form, Input, Select, DatePicker, Button, Card, Modal, Row, Col, Checkbox, InputNumber, Typography, Space, Divider } from "antd";
// import { CarOutlined, EnvironmentOutlined, CalendarOutlined, UserOutlined, IdcardOutlined, CreditCardOutlined } from "@ant-design/icons";

// const { Option } = Select;
// const { RangePicker } = DatePicker;
// const { Title, Text } = Typography;

// const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury"];
// const features = ["GPS", "Bluetooth", "Backup Camera", "Sunroof"];
// const locations = ["New York", "Los Angeles", "Chicago", "Houston"];

// const mockCars = [
//   { id: 1, name: "Toyota Camry", type: "Sedan", price: 50, image: "https://example.com/camry.jpg" },
//   { id: 2, name: "Honda CR-V", type: "SUV", price: 70, image: "https://example.com/crv.jpg" },
//   { id: 3, name: "Ford Mustang", type: "Luxury", price: 100, image: "https://example.com/mustang.jpg" },
// ];

// const Bookings: React.FC = () => {
//   const [form] = Form.useForm();
//   const [selectedCar, setSelectedCar] = useState<any>(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState<any>(null);

//   const onFinish = (values: any) => {
//     setBookingDetails(values);
//     setIsModalVisible(true);
//   };

//   const handleCarSelect = (car: any) => {
//     setSelectedCar(car);
//     form.setFieldsValue({ carId: car.id });
//   };

//   return (
//     <div className="min-w-[1280px] mx-auto px-4 sm:px-0 py-8">
//       <Title level={2}>Book Your Car</Title>
//       <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6 w-full">
//         <Card title="Search for Available Cars" className="mb-8">
//           <Row gutter={16}>
//             <Col xs={24} sm={12} md={6}>
//               <Form.Item name="carType" label="Car Type">
//                 <Select placeholder="Select car type">
//                   {carTypes.map((type) => (
//                     <Option key={type} value={type}>
//                       {type}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={12} md={6}>
//               <Form.Item name="location" label="Location">
//                 <Select placeholder="Select location">
//                   {locations.map((location) => (
//                     <Option key={location} value={location}>
//                       {location}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={12} md={6}>
//               <Form.Item name="dates" label="Pick-up and Drop-off Dates">
//                 <RangePicker style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Button type="primary" icon={<CarOutlined />}>
//             Search Cars
//           </Button>
//         </Card>

//         <Card title="Available Cars" className="mb-8">
//           <Row gutter={[16, 16]}>
//             {mockCars.map((car) => (
//               <Col xs={24} sm={12} md={8} key={car.id}>
//                 <Card
//                   hoverable
//                   cover={<img alt={car.name} src={car.image} />}
//                   onClick={() => handleCarSelect(car)}
//                   className={`${selectedCar?.id === car.id ? "border-2 border-blue-500" : ""}`}
//                 >
//                   <Card.Meta
//                     title={car.name}
//                     description={
//                       <>
//                         <Text>Type: {car.type}</Text>
//                         <br />
//                         <Text>Price: ${car.price}/day</Text>
//                       </>
//                     }
//                   />
//                   <Button type="primary" className="mt-4" block>
//                     Select
//                   </Button>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Card>

//         {selectedCar && (
//           <Card title="Selected Car Details" className="mb-8">
//             <Row gutter={16}>
//               <Col xs={24} md={12}>
//                 <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-auto" />
//               </Col>
//               <Col xs={24} md={12}>
//                 <Title level={4}>{selectedCar.name}</Title>
//                 <Text>Type: {selectedCar.type}</Text>
//                 <br />
//                 <Text>Price: ${selectedCar.price}/day</Text>
//                 <Divider />
//                 <Text strong>Features:</Text>
//                 <ul className="list-disc list-inside">
//                   <li>Air Conditioning</li>
//                   <li>Bluetooth</li>
//                   <li>Backup Camera</li>
//                 </ul>
//                 <Divider />
//                 <Text strong>Insurance Options:</Text>
//                 <Form.Item name="insurance" valuePropName="checked">
//                   <Checkbox>Add comprehensive insurance (+$15/day)</Checkbox>
//                 </Form.Item>
//                 <Text strong>Cancellation Policy:</Text>
//                 <p>Free cancellation up to 24 hours before pickup</p>
//               </Col>
//             </Row>
//           </Card>
//         )}

//         <Card title="Personal Details">
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
//                 <Input prefix={<UserOutlined />} />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item name="nidPassport" label="NID/Passport Number" rules={[{ required: true }]}>
//                 <Input prefix={<IdcardOutlined />} />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item name="drivingLicense" label="Driving License Number" rules={[{ required: true }]}>
//                 <Input prefix={<IdcardOutlined />} />
//               </Form.Item>
//             </Col>
//           </Row>
//         </Card>

//         <Card title="Payment Information">
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item name="cardNumber" label="Card Number" rules={[{ required: true }]}>
//                 <Input prefix={<CreditCardOutlined />} />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={6}>
//               <Form.Item name="expiryDate" label="Expiry Date" rules={[{ required: true }]}>
//                 <DatePicker picker="month" style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={6}>
//               <Form.Item name="cvv" label="CVV" rules={[{ required: true }]}>
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//         </Card>

//         <Card title="Additional Options">
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item name="gps" valuePropName="checked">
//                 <Checkbox>Add GPS Navigation (+$5/day)</Checkbox>
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item name="childSeat" valuePropName="checked">
//                 <Checkbox>Add Child Seat (+$3/day)</Checkbox>
//               </Form.Item>
//             </Col>
//           </Row>
//         </Card>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" size="large">
//             Book Now
//           </Button>
//         </Form.Item>
//       </Form>

//       <Modal
//         title="Booking Confirmation"
//         open={isModalVisible}
//         onOk={() => setIsModalVisible(false)}
//         onCancel={() => setIsModalVisible(false)}
//         width={700}
//       >
//         {bookingDetails && (
//           <div>
//             <Title level={4}>Booking Details</Title>
//             <Row gutter={[16, 16]}>
//               <Col span={12}>
//                 <Text strong>Car:</Text> {selectedCar?.name}
//               </Col>
//               <Col span={12}>
//                 <Text strong>Type:</Text> {selectedCar?.type}
//               </Col>
//               <Col span={12}>
//                 <Text strong>Pick-up Date:</Text> {bookingDetails.dates?.[0]?.format("YYYY-MM-DD")}
//               </Col>
//               <Col span={12}>
//                 <Text strong>Drop-off Date:</Text> {bookingDetails.dates?.[1]?.format("YYYY-MM-DD")}
//               </Col>
//               <Col span={12}>
//                 <Text strong>Location:</Text> {bookingDetails.location}
//               </Col>
//               <Col span={12}>
//                 <Text strong>Full Name:</Text> {bookingDetails.fullName}
//               </Col>
//               <Col span={12}>
//                 <Text strong>Email:</Text> {bookingDetails.email}
//               </Col>
//               <Col span={12}>
//                 <Text strong>NID/Passport:</Text> {bookingDetails.nidPassport}
//               </Col>
//               <Col span={24}>
//                 <Text strong>Additional Options:</Text>
//                 <ul>
//                   {bookingDetails.gps && <li>GPS Navigation</li>}
//                   {bookingDetails.childSeat && <li>Child Seat</li>}
//                   {bookingDetails.insurance && <li>Comprehensive Insurance</li>}
//                 </ul>
//               </Col>
//             </Row>
//             <Divider />
//             <Row>
//               <Col span={24}>
//                 <Text strong>Total Price:</Text> ${calculateTotalPrice(selectedCar, bookingDetails)}
//               </Col>
//             </Row>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// const calculateTotalPrice = (car: any, details: any) => {
//   if (!car || !details) return 0;
//   const days = details.dates?.[1]?.diff(details.dates?.[0], "days") || 1;
//   let total = car.price * days;
//   if (details.gps) total += 5 * days;
//   if (details.childSeat) total += 3 * days;
//   if (details.insurance) total += 15 * days;
//   return total;
// };

// export default Bookings;
