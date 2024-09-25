import { useState } from "react";
import { Button, Dropdown, Image, Popconfirm, Space } from "antd";
import MyDataTable from "../../../../components/table/MyDataTable";
import { ColumnsType } from "antd/es/table";
import PageHeader from "../../../../components/table/PageHeader";
import MyButton from "../../../../components/common/MyButton";
import CarAddModal from "./components/modal/CarAddModal";
import { useGetAllCarsQuery } from "../../../../redux/feature/car/carApi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import { ICarData } from "../../../../types/car.types";
import { DownOutlined } from "@ant-design/icons";
import CarUpdateModal from "./components/modal/CarUpdateModal";

const ManageCars = () => {
  const { data: carData, isLoading, isFetching, refetch } = useGetAllCarsQuery(undefined);
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
        <span className="flex justify-evenly">
          {/* <MyButton text="Edit" size="middle" icon={<FaRegEdit />} extraStyle="text-sm" /> */}
          <CarUpdateModal record={record} />

          <Popconfirm title="Are you sure you want to delete the car" okText="Yes" cancelText="No">
            <MyButton text="Delete" size="middle" icon={<RiDeleteBin5Line />} extraStyle="text-sm bg-red-500 hover:bg-red:6" />
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Manage Car"
        refetch={refetch}
        loading={isLoading || isFetching}
        extra={<MyButton type="button" text="Add Car" size="middle" icon={<GrFormAdd />} onClick={() => setIsModalOpen(true)} />}
      />

      {isModalOpen && <CarAddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      <MyDataTable columns={columns} data={carData?.data} loading={isLoading} />
    </div>
  );
};

export default ManageCars;
