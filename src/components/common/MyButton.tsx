import { Button } from "antd";
import { ReactNode } from "react";

export default function MyButton({
  text,
  icon,
  type,
  extraStyle,
  onClick,
}: {
  text: string;
  icon?: ReactNode;
  extraStyle?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (param?: unknown) => void;
}) {
  return (
    <Button
      type="primary"
      size="large"
      htmlType={type}
      icon={icon}
      className={` bg-[#223e51] text-lg text-white ${extraStyle}`}
      style={{
        transition: "background-color 0.2s",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a2a36")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#223e51")}
    >
      {text}
    </Button>
  );
}
