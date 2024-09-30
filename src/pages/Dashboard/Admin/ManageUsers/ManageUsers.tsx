import { GrFormAdd } from "react-icons/gr";
import PageHeader from "../../../../components/table/PageHeader";
import MyButton from "../../../../components/common/MyButton";

export default function ManageUsers() {
  // const {data:manageAllUsers,isLoading, isError, error} = useGet
  return (
    <>
      <PageHeader
        title="Manage Cars"
        refetch={refetch}
        loading={isLoading || isFetching}
        extra={<MyButton type="button" text="Add Car" size="middle" icon={<GrFormAdd />} onClick={() => setIsModalOpen(true)} />}
      />
    </>
  );
}
