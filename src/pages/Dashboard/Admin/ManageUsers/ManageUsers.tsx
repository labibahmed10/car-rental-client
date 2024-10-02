import PageHeader from "../../../../components/table/PageHeader";
import { useGetAllUsersQuery, useUpdateUserStatusMutation, useUpdateUserToAdminMutation } from "../../../../redux/feature/auth/authApi";
import MyDataTable from "../../../../components/table/MyDataTable";
import { Image, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { IUserInfo } from "../../../../types/auth.type";
import { SecurityScanOutlined, UserOutlined } from "@ant-design/icons";
import ConfirmationMutationModal from "../../../../components/modal/ConfirmationMutationModal";
import { FaUserCheck, FaUserClock, FaUserSlash } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export default function ManageUsers() {
  const { data: manageAllUsers, isLoading, isFetching, isError, error, refetch } = useGetAllUsersQuery();

  const [updateUserStatus, { isLoading: isUpdating }] = useUpdateUserStatusMutation();
  const [updateUserToAdmin, { isLoading: isCreating }] = useUpdateUserToAdminMutation();

  const columns: ColumnsType<IUserInfo> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    // {
    //   title: "Photo",
    //   key: "photo",
    //   align: "center",
    //   render: (url: string) => (
    //     <div className="w-14 h-10">
    //       <Image src={url} alt="User's photo" className="w-full h-full object-contain" />
    //     </div>
    //   ),
    // },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
      render: (value) => {
        return (
          <Tag color={value === "admin" ? "blue" : "purple"} icon={value === "admin" ? <SecurityScanOutlined /> : <UserOutlined />}>
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
            extraStyle="bg-indigo-700  hover:!bg-indigo-800 text-white"
          />

          <ConfirmationMutationModal
            text="Create Admin"
            title="Update User To Admin"
            content="Are you sure want to update User to Admin?"
            mutationFunction={() => updateUserToAdmin({ id: record._id })}
            isLoading={isCreating}
            Icon={<RiAdminFill />}
            extraStyle="bg-cyan-700  hover:!bg-cyan-800 text-white"
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
