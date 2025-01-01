/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Modal, Form, Input, DatePicker, Select, Popconfirm, Image, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useGetIndividualBookingQuery } from "../../../../redux/feature/booking/bookingApi";
import { IBookingResponse } from "../../../../types/booking.type";
import PageHeader from "../../../../components/table/PageHeader";
import MyDataTable from "../../../../components/table/MyDataTable";

export default function BookingManagement() {
  const { data: bookingData, isLoading, isFetching, refetch } = useGetIndividualBookingQuery(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<IBookingResponse | undefined>();
  console.log(bookingData);
  const columns: ColumnsType<IBookingResponse> = [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      sorter: (a: IBookingResponse, b: IBookingResponse) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      },
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      defaultSortOrder: "descend",
      align: "center",
      sorter: (a: IBookingResponse, b: IBookingResponse) => {
        const timeA = new Date(`1970-01-01T${a.startTime}`).getTime();
        const timeB = new Date(`1970-01-01T${b.startTime}`).getTime();
        return timeA - timeB;
      },
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      align: "center",
      render: (value) => (value ? value : "N/A"),
      sorter: (a: IBookingResponse, b: IBookingResponse) => {
        const timeA = new Date(`1970-01-01T${a.endTime}`).getTime();
        const timeB = new Date(`1970-01-01T${b.endTime}`).getTime();
        return timeA - timeB;
      },
    },
    {
      title: "Car",
      dataIndex: ["car", "name"],
      key: "carName",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: ["car", "image"],
      key: "image",
      render: (image) => (
        <div className="w-14 h-10 mx-auto">
          <Image src={image} alt="car photo" className="w-full h-full object-contain" />
        </div>
      ),
      align: "center",
    },
    {
      title: "Status",
      dataIndex: ["car", "status"],
      key: "status",
      render: (status: string) => <Tag color={status === "unavailable" ? "red" : "green"}>{status.toUpperCase()}</Tag>,
      align: "center",
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (cost: number) => `$${cost.toFixed(2)}`,
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "actions",
      align: "center",
      render: (_: string, record: IBookingResponse) => (
        <div className="gap-3 flex sm:flex-row flex-col justify-center items-center">
          <Button onClick={() => handleModify(record)}>Update</Button>
          <Popconfirm title="Are you sure you want to cancel this booking?" okText="Yes" cancelText="No">
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

  const handleModalOk = () => {
    // Implement modification logic
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <PageHeader title="Manage Users" refetch={refetch} loading={isLoading || isFetching} />
      <MyDataTable columns={columns} data={bookingData?.data} loading={isLoading} />

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
