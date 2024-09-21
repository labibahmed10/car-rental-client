import { ICarData } from "./car.types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBookingConfirmModal {
  isModalVisible: any;
  setIsModalVisible: any;
  bookingDetails: any;
  selectedCar: any;
}

export interface ISelectCarFunc {
  handleCarSelect?: (car: ICarData | undefined) => void;
  car?: ICarData;
}

export interface ICarDetails {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
}
