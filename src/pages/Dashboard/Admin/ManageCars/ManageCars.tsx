/* eslint-disable @typescript-eslint/no-explicit-any */
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
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";
import { toast } from "sonner";
import { DeleteOutlined } from "@ant-design/icons";

const ManageCars = () => {
  const { data: carData, isLoading, isFetching, error, refetch } = useGetAllCarsQuery(undefined);
  const [deleteCarMutation, { isLoading: isDeleting, isError: isDeletingError, error: deleteError }] = useDeleteCarMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ColumnsType<ICarData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      align: "center",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      align: "center",
    },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
      align: "center",
      render: (value) => {
        return value?.length > 0 ? value?.map((val: string) => <span>{val + ", "}</span>) : null;
      },
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
      align: "center",
    },
    {
      title: "Photo",
      dataIndex: "image",
      key: "photo",
      align: "center",
      render: (url: string) => (
        <div className="w-14 h-10 mx-auto">
          <Image src={url} alt="car photo" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (_, record) => (
        <span className="flex gap-2 items-center justify-center">
          <CarUpdateModal record={record} />

          <ConfirmationMutationModal
            text="Delete"
            title="Delete the item"
            content="Are you sure to delete this item?"
            mutationFunction={() => deleteCarMutation({ id: record._id })}
            isLoading={isDeleting}
            extraStyle="bg-red-600  hover:!bg-red-800 text-white"
            Icon={<DeleteOutlined />}
          />
        </span>
      ),
    },
  ];

  useEffect(() => {
    if ((error as any)?.statusCode === 404) {
      toast.error((error as any)?.data.message);
    }

    if ((deleteError as any).statusCode === 404) {
      toast.error((deleteError as any)?.data.message);
    }
  }, [error, deleteError]);

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
