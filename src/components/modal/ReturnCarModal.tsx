import { Modal } from "antd";
import { GiReturnArrow } from "react-icons/gi";
import MyButton from "../common/MyButton";
import { IBookingResponse } from "../../types/booking.type";

interface IReuturnCarProps {
  mutationFunction: (arg: { bookingId: string; endTime: string }) => Promise<unknown>;
  isLoading: boolean;
  record: IBookingResponse;
  disabled?: boolean;
}

export default function ReturnCarModal({ mutationFunction, isLoading, record, disabled = false }: IReuturnCarProps) {
  const [modal, contextHolder] = Modal.useModal();

  const endTime = `${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}`;

  const confirm = () => {
    modal.confirm({
      title: "Return Car",
      icon: <GiReturnArrow style={{ color: "red" }} />,
      content: "Are you sure wants to return the Car?",
      okText: (
        <div
          onClick={() =>
            mutationFunction({
              bookingId: record._id,
              endTime,
            })
          }
        >
          {isLoading ? "Returning..." : "Confirm"}
        </div>
      ),
      cancelText: <div>No</div>,
    });
  };

  return (
    <div>
      <MyButton onClick={confirm} text="Return Car" size="middle" loading={isLoading} icon={<GiReturnArrow />} disable={disabled} />
      {contextHolder}
    </div>
  );
}
