import { selectAddInsurances, setAddInsurances } from "../../../redux/feature/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { Radio } from "antd/lib";

interface CarExtraProps {
  value: string | number;
  label: string;
}

export default function CarExtra({ options }: { options: CarExtraProps[] }) {
  const selectedOption = useAppSelector(selectAddInsurances);

  const dispatch = useAppDispatch();

  return (
    <div className="mt-2 flex flex-col gap-2">
      {options.map((option) => (
        <Radio
          className="text-slate-100"
          key={option.value}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={() => dispatch(setAddInsurances(option.value))}
        >
          {option.label}
        </Radio>
      ))}
    </div>
  );
}
