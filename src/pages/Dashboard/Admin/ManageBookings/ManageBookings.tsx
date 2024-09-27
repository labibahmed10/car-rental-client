import PageHeader from "../../../../components/table/PageHeader";
import MyButton from "../../../../components/common/MyButton";
import { GrFormAdd } from "react-icons/gr";
import { ColumnType } from "antd/es/table";
import { IBookingDetails, IBookingResponse } from "../../../../types/booking.type";
import { Button, Image, Space } from "antd";
import MyDataTable from "../../../../components/table/MyDataTable";
import { useState } from "react";
import { useGetAllBookingsQuery } from "../../../../redux/feature/booking/bookingApi";

export default function ManageBookings() {
  const { data: bookingsData, isLoading, isFetching, isError, error, refetch } = useGetAllBookingsQuery(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ColumnType<IBookingResponse>[] = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => user.name,
    },
    {
      title: "Email",
      dataIndex: ["user", "email"],
      key: "user_email",
    },
    {
      title: "Car Name",
      dataIndex: "car",
      key: "car",
      render: (car) => car.name,
    },
    {
      title: "Car Model",
      dataIndex: ["car", "model"],
      key: "car",
      // render: (car) => car.name,
    },
    {
      title: "Car Image",
      dataIndex: ["car", "image"],
      key: "car",
      render: (car) => <Image src={car} />,
      width: 100,
    },
    {
      title: "Rent Date",
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
      render: (text: string) => <span>{text ? text : "N/A"}</span>,
    },

    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleApprove(record)}>
            Approve
          </Button>
          <Button type="primary" onClick={() => handleCancel(record)}>
            Cancel
          </Button>
        </Space>
      ),
    },
  ];

  const handleApprove = (record) => {
    // API call to approve the booking
    console.log(`Approve booking ${record._id}`);
  };

  const handleCancel = (record) => {
    // API call to cancel the booking
    console.log(`Cancel booking ${record._id}`);
  };

  return (
    <>
      <PageHeader
        title="Manage Bookings"
        // refetch={refetch}
        // loading={isLoading || isFetching}
        extra={<MyButton type="button" text="Add Car" size="middle" icon={<GrFormAdd />} onClick={() => setIsModalOpen(true)} />}
      />

      <MyDataTable columns={columns} data={bookingsData?.data} loading={isLoading || isFetching} />
    </>
  );
}
