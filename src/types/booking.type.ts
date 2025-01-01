/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormInstance } from "antd/lib";
import { IUserInfo } from "./auth.type";
import { ICarData } from "./car.types";
import { IResponseType } from "./index.type";

export interface IBookingConfirmModal {
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  bookingDetails: IBookingDetails;
  selectedCar: ICarData | undefined;
  form: FormInstance<any>;
}

export interface ISelectCarFunc {
  handleCarSelect?: (car: ICarData | undefined) => void;
  car?: ICarData;
  availableCars?: IResponseType<ICarData[]> | undefined;
}

export interface IBookingCar {
  carId: string;
  date: Date;
  startTime: string;
}

export interface IBookingResponse {
  _id: string;
  date: string;
  startTime: string;
  endTime: null | string;
  user: IUserInfo;
  car: ICarData;
  totalCost: number;
  drivingLicense: string;
  nidOrPassport: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBookingDetails {
  startDate: string;
  endDate: string;
  drivingLicense: string;
  location: string;
  email: string;
  fullName: string;
  nidPassport: string;
  cardNumber?: string;
}
