// import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import MyButton from "../common/MyButton";
import { ReactNode } from "react";

interface IconfirmationModal {
  mutationFunction: (arg: unknown) => Promise<unknown>;
  isLoading: boolean;
  title: string;
  content: string;
  text: string;
  Icon?: ReactNode;
  disabled?: boolean;
}
export default function ConfirmationMutationModal({ mutationFunction, isLoading, title, content, text, Icon, disabled = false }: IconfirmationModal) {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title,
      icon: Icon,
      content,
      okText: <div onClick={mutationFunction}>{isLoading ? "Loading..." : "Confirm"}</div>,
      cancelText: <div>No</div>,
    });
  };

  return (
    <div>
      <MyButton disable={disabled} text={text} extraStyle="bg-red-500 hover:!bg-red-700 disabled:hover:!bg-gray-500" onClick={confirm} icon={Icon} />
      {contextHolder}
    </div>
  );
}
