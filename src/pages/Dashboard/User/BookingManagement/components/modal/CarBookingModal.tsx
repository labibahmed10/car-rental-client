import { Modal } from "antd/lib";
import { IBookingResponse } from "../../../../../../types/booking.type";
import CarBookingModalForm from "../form/CarBookingModalForm";
import MyButton from "../../../../../../components/common/MyButton";

interface ICarBookingModal {
  isModalVisible: boolean;
  handleModalOk: () => void;
  handleModalCancel: () => void;
  selectedBooking: IBookingResponse | undefined;
  onClick: (record: IBookingResponse | unknown) => void;
}

export default function CarBookingModal({ isModalVisible, handleModalOk, handleModalCancel, selectedBooking, onClick }: ICarBookingModal) {
  return (
    <>
      <MyButton text="Update" onClick={onClick} extraStyle="!bg-emerald-700  hover:!bg-emerald-800 text-white" />

      <Modal title="Modify Booking" open={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
        {selectedBooking && <CarBookingModalForm selectedBooking={selectedBooking} />}
      </Modal>
    </>
  );
}
