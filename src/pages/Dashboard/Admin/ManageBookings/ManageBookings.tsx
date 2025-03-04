import PageHeader from "../../../../components/table/PageHeader";
import { ColumnType } from "antd/es/table";
import { IBookingResponse } from "../../../../types/booking.type";
import { Image, Space, Tag } from "antd";
import MyDataTable from "../../../../components/table/MyDataTable";
import { useCancelBookingMutation, useGetAllBookingsQuery, useUpdateStatusMutation } from "../../../../redux/feature/booking/bookingApi";
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";
import { TiTickOutline } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

export default function ManageBookings() {
  const { data: bookingsData, isLoading, isFetching, refetch } = useGetAllBookingsQuery(undefined);
  const [cancelBooking, { isLoading: isCanceling }] = useCancelBookingMutation();
  const [approveBooking, { isLoading: isApproving }] = useUpdateStatusMutation();

  const columns: ColumnType<IBookingResponse>[] = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      align: "center",
      render: (user) => user.name,
    },
    {
      title: "Email",
      dataIndex: ["user", "email"],
      key: "user_email",
      align: "center",
    },
    {
      title: "Car Name",
      dataIndex: "car",
      key: "car",
      align: "center",
      render: (car) => car.name,
    },
    {
      title: "Car Model",
      dataIndex: ["car", "model"],
      key: "car",
      align: "center",
    },
    {
      title: "Car Image",
      dataIndex: ["car", "image"],
      key: "car",
      align: "center",
      render: (car) => (
        <div className="w-14 h-10 mx-auto">
          <Image src={car} alt="car photo" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      title: "Rent Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      align: "center",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      align: "center",
      render: (text: string) => <span>{text ? text : "N/A"}</span>,
    },

    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => {
        return (
          <span>
            {status === "approved" ? (
              <Tag color="green">Approved</Tag>
            ) : status === "pending" ? (
              <Tag color="gold">Pending</Tag>
            ) : status === "returned" ? (
              <Tag color="geekblue">Returned</Tag>
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
              mutationFunction={() => approveBooking({ id: record._id, status: "approved" })}
              isLoading={isApproving}
              disabled={record.status === "approved" || record.totalCost > 0}
              Icon={<TiTickOutline />}
              extraStyle="!bg-emerald-700  hover:!bg-emerald-800 text-white"
            />

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
              Icon={<MdCancel />}
              extraStyle="!bg-red-700  hover:!bg-red-800 text-white"
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
