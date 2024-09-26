import { IUserInfo } from "./auth.type";
import { ICarData } from "./car.types";
import { IResponseType } from "./index.type";

export interface IBookingConfirmModal {
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  bookingDetails: IBookingDetails;
  selectedCar: ICarData | undefined;
}

export interface ISelectCarFunc {
  handleCarSelect?: (car: ICarData | undefined) => void;
  car?: ICarData;
  availableCars?: IResponseType<ICarData[]> | undefined;
}

export interface IBookingCar {
  id: string;
  date: Date;
  startTime: string;
}

export interface IBookingResponse {
  _id: string;
  date: string;
  startTime: string;
  endTime: null;
  user: IUserInfo;
  car: ICarData;
  totalCost: 0;
  createdAt: string;
  updatedAt: string;
}

export interface IBookingDetails {
  date: string;
  drivingLicense: string;
  location: string;
  email: string;
  fullName: string;
  nidPassport: string;
  cardNumber?: string;
}
