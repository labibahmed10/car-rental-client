import { useEffect, useState } from "react";
import { Image } from "antd";
import MyDataTable from "../../../../components/table/MyDataTable";
import { ColumnsType } from "antd/es/table";
import PageHeader from "../../../../components/table/PageHeader";
import MyButton from "../../../../components/common/MyButton";
import CarAddModal from "./components/modal/CarAddModal";
import { useDeleteCarMutation, useGetAllCarsQuery } from "../../../../redux/feature/car/carApi";
import { GrFormAdd } from "react-icons/gr";
import { ICarData } from "../../../../types/car.types";
import CarUpdateModal from "./components/modal/CarUpdateModal";
import DeleteModal from "../../../../components/modal/DeleteModal";
import { toast } from "sonner";

const ManageCars = () => {
  const { data: carData, isLoading, isFetching, error, refetch } = useGetAllCarsQuery(undefined);
  const [deleteCarMutation, { isLoading: isDeleting }] = useDeleteCarMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ColumnsType<ICarData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
      render: (value) => {
        return value?.length > 0 ? value?.map((val: string) => <span>{val + ", "}</span>) : null;
      },
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },
    {
      title: "Photo",
      dataIndex: "image",
      key: "photo",
      render: (url: string) => <Image src={url} alt="car photo" className="object-fill" />,
      width: 100,
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (_, record) => (
        <span className="flex gap-2 items-center justify-center">
          <CarUpdateModal record={record} />

          <DeleteModal deleteMutationFuntion={deleteCarMutation} id={record._id} isLoading={isDeleting} />
        </span>
      ),
    },
  ];

  useEffect(() => {
    if (error?.status === 404) {
      toast.error(error?.data.message);
    }
  }, [error]);

  return (
    <div>
      <PageHeader
        title="Manage Cars"
        refetch={refetch}
        loading={isLoading || isFetching}
        extra={<MyButton type="button" text="Add Car" size="middle" icon={<GrFormAdd />} onClick={() => setIsModalOpen(true)} />}
      />

      {isModalOpen && <CarAddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      <MyDataTable columns={columns} data={carData?.data || []} loading={isLoading || isFetching} />
    </div>
  );
};

export default ManageCars;
