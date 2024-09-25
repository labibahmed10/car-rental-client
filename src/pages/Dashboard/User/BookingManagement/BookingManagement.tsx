/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, Select, Popconfirm, Image, Tag, Card } from "antd";
import { ColumnsType } from "antd/es/table";
import { useGetIndividualBookingQuery } from "../../../../redux/feature/booking/bookingApi";
import { IBookingResponse } from "../../../../types/booking.type";
import Title from "antd/es/typography/Title";

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
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.startTime - b.startTime,
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
      key: "actions",
      align: "center",
      render: (_: string, record: IBookingResponse) => (
        <div className="gap-3 flex sm:flex-row flex-col justify-center items-center">
          <Button onClick={() => handleModify(record)}>Update</Button>
          <Popconfirm title="Are you sure you want to cancel this booking?" onConfirm={() => handleCancel(record)} okText="Yes" cancelText="No">
            <Button danger>Cancel</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleModify = (booking: IBookingResponse) => {
    setSelectedBooking(booking);
    setIsModalVisible(true);
  };

  const handleCancel = (booking: IBookingResponse) => {
    // Implement cancellation logic
    console.log(`Cancelled booking ${booking._id}`);
  };

  const handleModalOk = () => {
    // Implement modification logic
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Card style={{ marginTop: 16 }}>
        <Title level={4}>Booking Management</Title>
        <Table columns={columns} dataSource={bookingData?.data} loading={isLoading} scroll={{ x: "auto" }} />
      </Card>

      <Modal title="Modify Booking" open={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
        {selectedBooking && (
          <Form layout="vertical">
            <Form.Item label="Car Name">
              <Input value={selectedBooking.car.name} disabled />
            </Form.Item>
            <Form.Item label="Start Date">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item label="End Date">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item label="Status">
              <Select>
                <Select.Option value="upcoming">Upcoming</Select.Option>
                <Select.Option value="past">Past</Select.Option>
                <Select.Option value="approved">Approved</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}
