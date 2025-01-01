/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Row, Col, Typography } from "antd";
import { IBookingCar, IBookingConfirmModal } from "../../types/booking.type";
import { useCreateBookingMutation } from "../../redux/feature/booking/bookingApi";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
import MyButton from "../common/MyButton";
import { useEffect } from "react";
import { setAddInsurances, setAdditionalFeatures } from "../../redux/feature/car/carSlice";

const { Title, Text } = Typography;

export default function BookingConfirmationModal({ isModalVisible, setIsModalVisible, bookingDetails, selectedCar, form }: IBookingConfirmModal) {
  const [bookCar, { isSuccess, isError, error, isLoading, data, reset }] = useCreateBookingMutation();
  const additonalBookingInfo = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();

  const onConfirmation = () => {
    const confirmationData: IBookingCar = {
      carId: selectedCar?._id as string,
      date: (bookingDetails.startDate as any)?.format("YYYY-MM-DD"),
      startTime: (bookingDetails.startDate as any)?.format("HH:MM"),
    };
    bookCar(confirmationData);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalVisible(false);
      toast.success(data?.message);
      dispatch(setAdditionalFeatures(undefined));
      dispatch(setAddInsurances(undefined));
      reset();
      form.resetFields();
    }

    if (isError) {
      toast.error((error as any)?.data?.message);
      reset();
    }
  }, [isSuccess, isError, setIsModalVisible, dispatch, reset]);

  console.log(additonalBookingInfo?.additionalFeatures);

  return (
    <Modal
      title={
        <Title level={3} style={{ textAlign: "center" }}>
          Booking Confirmation
        </Title>
      }
      open={isModalVisible}
      // onOk={onConfirmation}
      onCancel={() => setIsModalVisible(false)}
      width={600}
      confirmLoading={isLoading}
      centered
      style={{ padding: "10px" }}
      footer={
        <Row gutter={16} className="justify-end gap-4">
          <MyButton text="Cancel" onClick={() => setIsModalVisible(false)} />
          <MyButton text="Ok" onClick={onConfirmation} />
        </Row>
      }
    >
      {bookingDetails && (
        <div className="space-y-1 text-slate-100">
          {/* Booking Summary Section */}
          <div className="rounded-lg p-6">
            <Title level={4} className="mb-4">
              Booking Summary
            </Title>
            <Row gutter={[24, 16]}>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary" className="text-slate-100">
                    Pick-up Date
                  </Text>
                  <Text strong>{(bookingDetails.startDate as any)?.format("YYYY-MM-DD")}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Pick-up Time</Text>
                  <Text strong>{(bookingDetails.startDate as any)?.format("HH:mm")}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Pick-down Date</Text>
                  <Text strong>{(bookingDetails.endDate as any)?.format("YYYY-MM-DD")}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Pick-down Time</Text>
                  <Text strong>{(bookingDetails.endDate as any)?.format("HH:mm")}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Location</Text>
                  <Text strong>{bookingDetails.location}</Text>
                </div>
              </Col>
            </Row>
          </div>

          {/* Customer Details Section */}
          <div className=" rounded-lg p-6">
            <Title level={4} className="mb-4">
              Customer Information
            </Title>
            <Row gutter={[24, 16]}>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Full Name</Text>
                  <Text strong>{bookingDetails.fullName}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Email</Text>
                  <Text strong>{bookingDetails?.email}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">NID/Passport</Text>
                  <Text strong>{bookingDetails?.nidPassport}</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Card Number</Text>
                  <Text strong>{bookingDetails?.cardNumber || bookingDetails?.drivingLicense}</Text>
                </div>
              </Col>
            </Row>
          </div>

          {/* Additional Services Section */}
          <div className=" rounded-lg p-6">
            <Title level={4} className="mb-4">
              Additional Services
            </Title>
            <Row gutter={[24, 16]}>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Insurance Cost</Text>
                  <Text strong className="text-green-600">
                    ${additonalBookingInfo?.addInsurances || 0}
                  </Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex flex-col space-y-2">
                  <Text type="secondary">Additional Features</Text>
                  <Text strong className="capitalize">
                    {additonalBookingInfo?.additionalFeatures?.length > 0
                      ? additonalBookingInfo?.additionalFeatures?.map((val) => val?.split("_")?.join(" "))?.join(", ")
                      : "None selected"}
                  </Text>
                </div>
              </Col>
            </Row>
          </div>

          {/* Total Price Section */}
          <div className="rounded-lg p-6">
            <Row justify="space-between" align="middle">
              <Col>
                <Text className="text-lg">Total Price</Text>
              </Col>
              <Col>
                <Text className="text-2xl font-bold text-[#ff4d4f]">${calculateTotalPrice(selectedCar, bookingDetails, additonalBookingInfo)}</Text>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Modal>
  );
}
