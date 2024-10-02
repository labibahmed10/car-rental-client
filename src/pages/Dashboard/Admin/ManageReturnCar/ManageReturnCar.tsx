import PageHeader from "../../../../components/table/PageHeader";
import { ColumnsType } from "antd/es/table";
import { Image, Tag } from "antd";
import { useReturnCarMutation } from "../../../../redux/feature/car/carApi";
import { useGetAllBookingsQuery } from "../../../../redux/feature/booking/bookingApi";
import MyDataTable from "../../../../components/table/MyDataTable";
import ReturnCarModal from "../../../../components/modal/ReturnCarModal";
import { IBookingResponse } from "../../../../types/booking.type";
import { FaCar } from "react-icons/fa";
import { PiCarProfileFill } from "react-icons/pi";

export default function ManageReturnCar() {
  const { data: bookingsData, isLoading, isFetching, refetch } = useGetAllBookingsQuery(undefined);
  const [returnCar, { isLoading: isReturning }] = useReturnCarMutation();

  const columns: ColumnsType<IBookingResponse> = [
    {
      title: "Name",
      dataIndex: ["car", "name"],
      key: "name",
      align: "center",
    },
    {
      title: "Model",
      dataIndex: ["car", "model"],
      key: "model",
      align: "center",
    },
    {
      title: "Year",
      dataIndex: ["car", "year"],
      key: "year",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: ["car", "location"],
      key: "location",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: ["car", "type"],
      key: "type",
      align: "center",
    },
    {
      title: "Price Per Hour",
      dataIndex: ["car", "pricePerHour"],
      key: "pricePerHour",
      align: "center",
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      align: "center",
    },
    {
      title: "Photo",
      dataIndex: ["car", "image"],
      key: "photo",
      align: "center",
      render: (url: string) => (
        <div className="w-14 h-10 mx-auto">
          <Image src={url} alt="car photo" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: ["car", "status"],
      key: "status",
      align: "center",
      render: (value) => {
        return (
          <Tag className="space-x-2" color={value === "available" ? "green" : "red"} icon={value === "available" ? <FaCar /> : <PiCarProfileFill />}>
            {value === "available" ? "Available" : "Unavailable"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (_, record) => (
        <span className="flex gap-2 items-center justify-center">
          <ReturnCarModal record={record} mutationFunction={returnCar} isLoading={isReturning} disabled={record.totalCost > 0} />
        </span>
      ),
    },
  ];
  return (
    <>
      <PageHeader title="Manage Returned Cars" refetch={refetch} loading={isLoading || isFetching} />

      <MyDataTable columns={columns} data={bookingsData?.data} loading={isLoading || isFetching} />
    </>
  );
}
