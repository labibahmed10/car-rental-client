import { createSlice } from "@reduxjs/toolkit";
import { ISelectCar } from "../../../types/car.types";
import { RootState } from "../../store/store";

const initialState: ISelectCar = {
  selectedCar: null,
  carSearchValue: undefined,
  additionalFeatures: [],
  addInsurances: undefined,
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

    // will extend these features later

    setAdditionalFeatures: (state, action) => {
      const feature = action.payload;

      if (action.payload === undefined) {
        state.additionalFeatures = [];
        return;
      }

      // Check if the feature is already in the additionalFeatures array
      if (state.additionalFeatures.includes(feature)) {
        state.additionalFeatures = state.additionalFeatures.filter((f) => f !== feature);
      } else {
        state.additionalFeatures.push(feature);
      }
    },

    setAddInsurances: (state, action) => {
      state.addInsurances = action.payload;
    },
  },
});

export const { selectCar, setSearchValues, setAdditionalFeatures, setAddInsurances } = carSlice.actions;
export const selectBookingCar = (state: RootState) => state.car.selectedCar;
export const selectSearchValue = (state: RootState) => state.car.carSearchValue;
export const selectAdditionalFeatures = (state: RootState) => state.car.additionalFeatures;
export const selectAddInsurances = (state: RootState) => state.car.addInsurances;

export default carSlice.reducer;
