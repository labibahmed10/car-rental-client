import { Modal } from "antd";
import React, { ReactNode } from "react";

interface ICarCommonModal {
  children: ReactNode;
  isModalOpen: boolean;
  title: string;
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CarCommonModal({ children, isModalOpen, onCancel, title }: ICarCommonModal) {
  return (
    <Modal
      centered
      title={title}
      open={isModalOpen}
      footer={false}
      onCancel={onCancel}
      className="max-w-[30rem] w-full max-h-[40rem] overflow-y-auto"
    >
      {children}
    </Modal>
  );
}
