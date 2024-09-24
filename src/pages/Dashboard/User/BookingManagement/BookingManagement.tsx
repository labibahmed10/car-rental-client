import { SetStateAction, useState } from "react";
import { Table, Tag, Button, Modal, Image, Form, Input, DatePicker, Select } from "antd";
import { ColumnsType } from "antd/es/table";
import { IBookingResponse } from "../../../../types/booking.type";
import { useGetIndividualBookingQuery } from "../../../../redux/feature/booking/bookingApi";

export default function BookingManagement() {
  const { data: bookingData, isLoading } = useGetIndividualBookingQuery(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<IBookingResponse | undefined>();

  const columns: ColumnsType<IBookingResponse> = [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      render: (value) => (value ? value : "N/A"),
    },
    {
      title: "Car",
      dataIndex: ["car", "name"],
      key: "carName",
    },
    {
      title: "Image",
      dataIndex: ["car", "image"],
      key: "image",
      render: (image) => <Image src={image} alt="Image of the Car" />,
    },
    {
      title: "Status",
      dataIndex: ["car", "status"],
      key: "status",
      render: (status: string) => <Tag color={status === "unavailable" ? "red" : "green"}>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (cost: number) => `$${cost.toFixed(2)}`,
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "totalCost",
      render: (booking) => {
        return <Button onClick={() => handleModify(booking)}>Update</Button>;
      },
    },
  ];

  const handleModify = (booking: SetStateAction<IBookingResponse | undefined>) => {
    setSelectedBooking(booking);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    // Implement modification logic
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Booking Management</h1>

      <Table columns={columns} dataSource={bookingData?.data} loading={isLoading} rowKey="id" />
      <Modal title="Modify Booking" open={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
        <Form form={form} onFinish={onFinish} initialValues={selectedBooking}>
          <Form.Item name="carName" label="Car Name">
            <Input disabled />
          </Form.Item>
          <Form.Item name="startDate" label="Start Date">
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item name="endDate" label="End Date">
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select>
              <Select.Option value="upcoming">Upcoming</Select.Option>
              <Select.Option value="past">Past</Select.Option>
              <Select.Option value="approved">Approved</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
