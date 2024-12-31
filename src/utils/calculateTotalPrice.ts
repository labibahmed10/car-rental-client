/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBookingDetails } from "../types/booking.type";
import { ICarData, ISelectCar } from "../types/car.types";

export const calculateTotalPrice = (car: ICarData | undefined, details: IBookingDetails, additionalInfo: ISelectCar) => {
  if (!car || !details) return 0;

  // Calculate the number of days (assuming 1 day if no return date is provided)
  const pickUpDate = details.startDate;
  const returnDate = details.endDate as any;
  const numberOfDays = returnDate ? returnDate.diff(pickUpDate, "days") : 1;

  // Calculate the base price (price per day * number of days)
  const basePrice = car.pricePerHour * numberOfDays;

  // Add insurance cost if applicable
  const insuranceCost = additionalInfo?.addInsurances || 0;

  // Calculate the cost of additional features ($5 per feature)
  const additionalFeaturesCost = additionalInfo?.additionalFeatures?.length * 5 || 0;

  // Calculate the total price
  const totalPrice = basePrice + insuranceCost + additionalFeaturesCost;

  return totalPrice;
};
