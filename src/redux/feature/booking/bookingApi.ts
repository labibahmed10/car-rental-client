import { ICarCreate, ICarData } from "../../../types/car.types";
import { IResponseType } from "../../../types/index.type";
import baseApi from "../../api/baseApi";

interface Queries {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({}),
});

export const {} = bookingApi;
