/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Divider, Form, FormInstance, Image, Typography } from "antd";
import { ICarData } from "../../../types/car.types";
import CarExtra from "../../CarDetails/components/CarExtra";
import { additionalOpt, insuranceOpt } from "../../CarDetails/carConstValues";
import PersonalInfo from "./PersonalInfo";
import MyButton from "../../../components/common/MyButton";

const { Text } = Typography;

interface IShowSelectedCar {
  selectedCar: ICarData;
  form: FormInstance<any>;
  onfinish: (values: any) => void;
}

export default function ShowSelectedCar({ selectedCar, form, onfinish }: IShowSelectedCar) {
  return (
    <Card title={<span className="text-slate-100">Selected Car Details</span>} className="mb-8 bg-[#222222] border-[#222222] text-slate-100">
      <Image src={selectedCar.image as string} alt={selectedCar.name} className="w-full sm:h-[22rem] object-fill" />

      <h1 className="text-slate-100 text-3xl font-semibold my-4">{selectedCar.name}</h1>
      <Text className="text-slate-100 text-base sm:text-lg md:text-xl">Type: {selectedCar.type}</Text>
      <br />
      <Text className="text-slate-100 text-base sm:text-lg md:text-xl">Price: ${selectedCar.pricePerHour} / day</Text>

      <Divider />

      <Text strong className="text-slate-100 text-base sm:text-lg md:text-xl">
        Features:
      </Text>
      <ul className="list-disc list-inside">
        {selectedCar.features.map((feature) => (
          <li key={feature} className="text-slate-100 text-base sm:text-lg md:text-xl">
            {feature}
          </li>
        ))}
      </ul>

      <p className="text-slate-100 text-base sm:text-lg md:text-xl mt-4 font-bold">ADDITIONAL FEATURES:</p>
      <CarExtra options={additionalOpt} />

      <p className="text-slate-100 text-base sm:text-lg md:text-xl mt-4 font-bold">INSURANCE OPTIONS:</p>
      <CarExtra options={insuranceOpt} />

      <Form layout="vertical" name="confirmBooking" form={form} onFinish={onfinish} className="space-y-6 w-full rounded-lg shadow-md mt-5">
        <PersonalInfo />
        <Form.Item>
          <MyButton text="Book Now" type="submit" disable={!selectedCar} />
        </Form.Item>
      </Form>

      <Divider />

      <div>
        <Text strong className="text-slate-100 text-base">
          Cancellation Policy: Free cancellation up to 24 hours before pickup
        </Text>
      </div>
    </Card>
  );
}
