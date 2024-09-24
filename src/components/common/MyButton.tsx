import { Button } from "antd";
import { IButtonProps } from "../../types/index.type";

export default function MyButton({ text, icon, type, extraStyle, disable = false, onClick }: IButtonProps) {
  return (
    <Button
      type="primary"
      size="large"
      disabled={disable}
      htmlType={type}
      icon={icon}
      className={`bg-[#2A5979] text-lg text-white hover:!bg-[#213545] disabled:bg-gray-500 disabled:text-gray-300 ${extraStyle}`}
      style={{
        transition: "background-color 0.2s",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
