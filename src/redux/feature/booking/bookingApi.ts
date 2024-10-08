import { IBookingCar, IBookingResponse } from "../../../types/booking.type";
import { IResponseType } from "../../../types/index.type";
import baseApi from "../../api/baseApi";

interface Queries {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation<IResponseType<IBookingResponse>, IBookingCar>({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),

    getAllBookings: builder.query<IResponseType<IBookingResponse[]>, Queries | undefined>({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    getIndividualBooking: builder.query<IResponseType<IBookingResponse[]>, undefined>({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    cancelBooking: builder.mutation({
      query: ({ id }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
      }),

      invalidatesTags: ["booking"],
    }),

    updateBooking: builder.mutation<IResponseType<IBookingResponse>, { id: string; data: Partial<IBookingResponse> }>({
      query: ({ id, data }) => ({
        url: `/bookings/updateBooking/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),

    updateStatus: builder.mutation<IResponseType<IBookingResponse>, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/bookings/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetIndividualBookingQuery,
  useCancelBookingMutation,
  useUpdateBookingMutation,
  useUpdateStatusMutation,
} = bookingApi;
