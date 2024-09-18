export interface IBookingConfirmModal {
  isModalVisible: anye;
  setIsModalVisible: any;
  bookingDetails: any;
  selectedCar: any;
}

export interface ISelectCarFunc {
  handleCarSelect?: (car: ICarDetails | undefined) => void;
  car?: ICarDetails;
}

export interface ICarDetails {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
}
