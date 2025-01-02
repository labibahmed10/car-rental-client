import { useEffect, useState } from "react";
import { Image, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useCancelBookingMutation, useGetIndividualBookingQuery } from "../../../../redux/feature/booking/bookingApi";
import { IBookingResponse } from "../../../../types/booking.type";
import PageHeader from "../../../../components/table/PageHeader";
import MyDataTable from "../../../../components/table/MyDataTable";
import { Space } from "antd/lib";
import CarBookingModal from "./components/modal/CarBookingModal";
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";
import { toast } from "sonner";
export default function BookingManagement() {
  const { data: bookingData, isLoading, isFetching, refetch } = useGetIndividualBookingQuery(undefined);
  const [cancelBooking, { isSuccess, isError, error, isLoading: isCancelBookingLoading }] = useCancelBookingMutation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<IBookingResponse | undefined>();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Booking canceled successfully!");
    }
    if (isError) {
      toast.error(error?.data?.message || "Failed to cancel booking. Please try again.");
    }
  }, [isSuccess, isError]);

  const columns: ColumnsType<IBookingResponse> = [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
      align: "center",
      // width: 260,
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
        <Space size="middle">
          <CarBookingModal
            handleModalCancel={handleModalCancel}
            selectedBooking={selectedBooking}
            handleModalOk={handleModalOk}
            isModalVisible={isModalVisible}
            onClick={() => handleModify(record)}
          />

          <ConfirmationMutationModal
            text="Cancel"
            title="Cancel Booking"
            content="Are you sure you want to cancel this booking?"
            extraStyle="!bg-red-700  hover:!bg-red-800 text-white"
            isLoading={isCancelBookingLoading}
            mutationFunction={() => cancelBooking({ id: record._id })}
          />
        </Space>
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
    <>
      <PageHeader title="Manage Users" refetch={refetch} loading={isLoading || isFetching} />
      <MyDataTable columns={columns} data={bookingData?.data} loading={isLoading} />
    </>
  );
}
