import { Button } from "antd";
import { IButtonProps } from "../../types/index.type";
import { useRef } from "react";

export default function MyButton({ text, icon, type, extraStyle, disable = false, onClick, size = "large", loading = false }: IButtonProps) {
  const buttonRef = useRef(null);
  return (
    <Button
      ref={buttonRef}
      type="primary"
      size={size}
      disabled={disable}
      htmlType={type}
      icon={icon}
      className={`bg-[#2A5979] text-lg text-white hover:!bg-[#213545] disabled:bg-gray-500 disabled:text-gray-300 ${extraStyle}`}
      style={{
        transition: "background-color 0.2s",
      }}
      onClick={onClick}
      loading={loading}
    >
      {text}
    </Button>
  );
}
