import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

interface IcarDeleteProps {
  id: string;
  deleteMutationFuntion: (arg: { id: string }) => Promise<unknown>;
  isLoading: boolean;
}
export default function DeleteModal({ id, deleteMutationFuntion, isLoading }: IcarDeleteProps) {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title: "Delete the item",
      icon: <DeleteFilled style={{ color: "red" }} />,
      content: "Are you sure to delete this item?",
      okText: <div onClick={() => deleteMutationFuntion({ id: id })}>{isLoading ? "Deleting..." : "Confirm"}</div>,
      cancelText: <div>No</div>,
    });
  };

  return (
    <div>
      <Button onClick={confirm} danger icon={<DeleteOutlined />}>
        Delete
      </Button>
      {contextHolder}
    </div>
  );
}
