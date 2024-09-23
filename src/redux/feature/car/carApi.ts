import { ICarCreate, ICarData } from "../../../types/car.types";
import { IResponseType } from "../../../types/index.type";
import baseApi from "../../api/baseApi";

interface Queries {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation<IResponseType<ICarData>, ICarCreate>({
      query: (data) => ({
        url: "/cars",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cars"],
    }),

    getAllCars: builder.query<IResponseType<ICarData[]>, Queries | undefined>({
      query: (query) => {
        const params = new URLSearchParams();

        if (query?.searchValue) {
          params.append("searchValue", query.searchValue);
        }
        if (query?.carType) {
          params.append("type", query.carType);
        }
        if (query?.minPrice) {
          params.append("minPrice", query.minPrice);
        }
        if (query?.maxPrice) {
          params.append("maxPrice", query.maxPrice);
        }
        if (query?.location) {
          params.append("location", query.location);
        }
        if (query?.isElectric) {
          params.append("isElectric", query.isElectric);
        }
        if (query?.features) {
          params.append("features", query.features);
        }

        return {
          url: `/cars?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["cars"],
    }),

    getCar: builder.query<IResponseType<ICarData>, { carId: string }>({
      query: ({ carId }) => {
        console.log(carId);
        return {
          url: `/cars/${carId}`,
          method: "GET",
        };
      },
      providesTags: ["cars"],
    }),

    updateCar: builder.mutation<IResponseType<ICarData>, { carId: string; data: Partial<ICarData> }>({
      query: ({ carId, ...data }) => ({
        url: `/cars/${carId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["cars", "booking"],
    }),

    deleteCar: builder.mutation<IResponseType<null>, { carId: string }>({
      query: ({ carId }) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),

    returnCar: builder.mutation({
      query: (data) => ({
        url: `/cars/return`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["cars", "booking"],
    }),
  }),
});

export const { useCreateCarMutation, useDeleteCarMutation, useGetAllCarsQuery, useGetCarQuery, useUpdateCarMutation, useReturnCarMutation } = carApi;
