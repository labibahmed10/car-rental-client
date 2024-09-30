import PageHeader from "../../../../components/table/PageHeader";
import { ColumnType } from "antd/es/table";
import { IBookingResponse } from "../../../../types/booking.type";
import { Image, Space, Tag } from "antd";
import MyDataTable from "../../../../components/table/MyDataTable";
import { useCancelBookingMutation, useGetAllBookingsQuery, useUpdateStatusMutation } from "../../../../redux/feature/booking/bookingApi";
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";
import { useReturnCarMutation } from "../../../../redux/feature/car/carApi";
import ReturnCarModal from "../../../../components/modal/ReturnCarModal";

export default function ManageBookings() {
  const { data: bookingsData, isLoading, isFetching, refetch } = useGetAllBookingsQuery(undefined);
  const [cancelBooking, { isLoading: isCanceling }] = useCancelBookingMutation();
  const [returnCar, { isLoading: isReturning }] = useReturnCarMutation();
  const [approveBooking, { isLoading: isApproving }] = useUpdateStatusMutation();

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
    },
    {
      title: "Car Image",
      dataIndex: ["car", "image"],
      key: "car",
      render: (car) => (
        <div className="w-14 h-10">
          <Image src={car} alt="car photo" className="w-full h-full object-contain" />
        </div>
      ),
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
          <span>
            {status === "confirmed" ? (
              <Tag color="green">Confirmed</Tag>
            ) : status === "pending" ? (
              <Tag color="blue">Pending</Tag>
            ) : status === "completed" ? (
              <Tag color="orange">Completed</Tag>
            ) : (
              "N/A"
            )}
          </span>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <ConfirmationMutationModal
              text="Approve"
              title="Approve Booking"
              content="Are you sure want to approve the booking?"
              mutationFunction={() => approveBooking({ id: record._id, status: "confirmed" })}
              isLoading={isApproving}
              disabled={record.status === "confirmed" || record.totalCost > 0}
            />

            <ReturnCarModal record={record} mutationFunction={returnCar} isLoading={isReturning} disabled={record.totalCost > 0} />

            <ConfirmationMutationModal
              text="Cancel"
              title="Cancel Booking"
              content="Are you sure wants to cancel the booking?"
              mutationFunction={() =>
                cancelBooking({
                  id: record._id,
                })
              }
              isLoading={isCanceling}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader title="Manage Bookings" refetch={refetch} loading={isLoading || isFetching} />

      <MyDataTable columns={columns} data={bookingsData?.data} loading={isLoading || isFetching} />
    </>
  );
}
