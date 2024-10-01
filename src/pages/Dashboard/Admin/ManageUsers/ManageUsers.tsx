import PageHeader from "../../../../components/table/PageHeader";
import { useGetAllUsersQuery, useUpdateUserStatusMutation } from "../../../../redux/feature/auth/authApi";
import MyDataTable from "../../../../components/table/MyDataTable";
import { Image, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { IUserInfo } from "../../../../types/auth.type";
import { SecurityScanOutlined, UserOutlined } from "@ant-design/icons";
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";
import { FaUserCheck, FaUserClock, FaUserSlash } from "react-icons/fa";

export default function ManageUsers() {
  const { data: manageAllUsers, isLoading, isFetching, isError, error, refetch } = useGetAllUsersQuery();

  const [updateUserStatus, { isLoading: isUpdating }] = useUpdateUserStatusMutation();

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
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (value) => {
        return (
          <Tag className="space-x-2" color={value === "active" ? "green" : "red"} icon={value === "active" ? <FaUserClock /> : <FaUserSlash />}>
            {value === "active" ? "Active" : "Blocked"}
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
          <ConfirmationMutationModal
            text="Update Status"
            title="Update User"
            content="Are you sure want to update user status?"
            mutationFunction={() => updateUserStatus({ id: record._id, status: record.status === "active" ? "block" : "active" })}
            isLoading={isUpdating}
            Icon={<FaUserCheck />}
          />
        </span>
      ),
    },
  ];

  console.log(manageAllUsers);
  return (
    <>
      <PageHeader title="Manage Users" refetch={refetch} loading={isLoading || isFetching} />

      <MyDataTable columns={columns} data={manageAllUsers?.data} loading={isLoading} />
    </>
  );
}
