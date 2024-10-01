import { GrFormAdd } from "react-icons/gr";
import PageHeader from "../../../../components/table/PageHeader";
import MyButton from "../../../../components/common/MyButton";
import { useGetAllUsersQuery } from "../../../../redux/feature/auth/authApi";
import MyDataTable from "../../../../components/table/MyDataTable";
import { Image, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { IUserInfo } from "../../../../types/auth.type";
import { SecurityScanOutlined, UserOutlined } from "@ant-design/icons";
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";

export default function ManageUsers() {
  const { data: manageAllUsers, isLoading, isFetching, isError, error, refetch } = useGetAllUsersQuery();

  const columns: ColumnsType<IUserInfo> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Photo",
      key: "photo",
      render: (url: string) => (
        <div className="w-14 h-10">
          <Image src={url} alt="User's photo" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
      render: (value) => {
        return (
          <Tag color={value === "admin" ? "blue" : "green"} icon={value === "admin" ? <SecurityScanOutlined /> : <UserOutlined />}>
            {value === "admin" ? "Admin" : "User"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <span className="flex gap-2 items-center justify-center">
          {/* <CarUpdateModal record={record} /> */}

          {/* <ConfirmationMutationModal
            text="Delete"
            title="Delete the item"
            content="Are you sure to delete this item?"
            mutationFunction={() => deleteCarMutation({ id: record._id })}
            isLoading={isDeleting}
          /> */}
        </span>
      ),
    },
  ];

  console.log(manageAllUsers);
  return (
    <>
      <PageHeader
        title="Manage Cars"
        refetch={refetch}
        loading={isLoading || isFetching}
        extra={<MyButton type="button" text="Add Car" size="middle" icon={<GrFormAdd />} onClick={() => setIsModalOpen(true)} />}
      />

      <MyDataTable columns={columns} data={manageAllUsers?.data} loading={isLoading} />
    </>
  );
}
