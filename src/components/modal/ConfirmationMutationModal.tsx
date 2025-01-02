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
  extraStyle?: string;
}

export default function ConfirmationMutationModal({
  mutationFunction,
  isLoading,
  title,
  content,
  text,
  Icon,
  extraStyle,
  disabled = false,
}: IconfirmationModal) {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title,
      icon: Icon,
      content,
      okText: <div onClick={mutationFunction}>{isLoading ? "Loading..." : "Confirm"}</div>,
      cancelText: <MyButton text="Cancel" size="middle" extraStyle="custom-cancel-style" />,
    });
  };

  return (
    <div>
      <MyButton disable={disabled} text={text} size="large" extraStyle={extraStyle} onClick={confirm} icon={Icon} />
      {contextHolder}
    </div>
  );
}
