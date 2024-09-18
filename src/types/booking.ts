export interface IBookingConfirmModal {
  isModalVisible: anye;
  setIsModalVisible: any;
  bookingDetails: any;
  selectedCar: any;
}

export interface ISelectCarFunc {
  handleCarSelect?: (car: any) => void;
  car?: any;
}
