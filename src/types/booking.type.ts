import { ICarData } from "./car.types";
import { IResponseType } from "./index.type";

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
  availableCars?: IResponseType<ICarData[]> | undefined;
}
