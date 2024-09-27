
import PageHeader from "../../../../components/table/PageHeader";
import MyButton from "../../../../components/common/MyButton";
import { GrFormAdd } from "react-icons/gr";

export default function ManageReturnCar() {
  return (
    <>
      <PageHeader
        title="Manage Returned Cars"
        // refetch={refetch}
        // loading={isLoading || isFetching}
        extra={<MyButton type="button" text="Add Car" size="middle" icon={<GrFormAdd />} onClick={() => setIsModalOpen(true)} />}
      />
    </>
  );
}
