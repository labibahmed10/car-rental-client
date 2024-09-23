import { createSlice } from "@reduxjs/toolkit";
import { ISelectCar } from "../../../types/car.types";
import { RootState } from "../../store/store";

const initialState: ISelectCar = {
  selectedCar: null,
  carSearchValue: undefined,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },

    setSearchValues: (state, action) => {
      state.carSearchValue = action.payload;
    },
  },
});

export const { selectCar, setSearchValues } = carSlice.actions;
export const selectBookingCar = (state: RootState) => state?.car.selectedCar;
export const selectSearchValue = (state: RootState) => state?.car.carSearchValue;

export default carSlice.reducer;
