export interface ICarData {
  _id: string;
  availabilityDates: string[];
  childSeat: boolean;
  color: string;
  description: string;
  features: string[];
  gps: boolean;
  image: string;
  isDeleted: boolean;
  isElectric: boolean;
  isFeatured: boolean;
  location: string;
  model: string;
  name: string;
  pricePerHour: number;
  status: TCarStatus;
  type: string;
}

export type TCarStatus = "available" | "unavailable";

export interface ICarCreate {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: TCarStatus;
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
}

type Queries = { [key: string]: string };

export interface ISelectCar {
  selectedCar: ICarData | null;
  carSearchValue?: Queries;
  // additionalFeatures: string[] | undefined;
  // addInsurances: string[] | undefined;
}
