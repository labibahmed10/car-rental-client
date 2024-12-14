import { ICarCreate, ICarData } from "../../../types/car.types";
import { IResponseType } from "../../../types/index.type";
import baseApi from "../../api/baseApi";

interface Queries {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const carApi = baseApi.injectEndpoints({
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
          const finalQuery = query.location?.split(" ")?.join(" ");
          params.append("location", (query.finalQuery = finalQuery));
        }
        if (query?.isElectric) {
          params.append("isElectric", query.isElectric);
        }
        if (query?.isFeatured) {
          params.append("isFeatured", query.isFeatured);
        }
        if (query?.features) {
          params.append("features", query.features);
        }

        return {
          url: `/cars?${params.toString()}`,
          method: "GET",
        };
      },

      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "cars" as const,
                id: _id,
              })),
              {
                type: "cars" as const,
                id: "LIST",
              },
            ]
          : [{ type: "cars" as const, id: "LIST" }],
    }),

    getCar: builder.query<IResponseType<ICarData>, { id: string }>({
      query: ({ id }) => {
        return {
          url: `/cars/${id}`,
          method: "GET",
        };
      },
      providesTags: ["cars"],
    }),

    updateCar: builder.mutation<IResponseType<ICarData>, { id: string; data: Partial<ICarData> }>({
      query: ({ id, ...body }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["cars", "booking"],
    }),

    deleteCar: builder.mutation<IResponseType<null>, { id: string }>({
      query: ({ id }) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: (_result, _error, arg) => {
        return [{ type: "cars", _id: arg.id }];
      },
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
