import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { Checkbox } from "antd/lib";
import { selectAdditionalFeatures, setAdditionalFeatures } from "../../../redux/feature/car/carSlice";
interface CarExtraProps {
  value: string | number;
  label: string;
}

export default function CarAdditionalFeat({ options }: { options: CarExtraProps[] }) {
  const additionalOptions = useAppSelector(selectAdditionalFeatures);

  const dispatch = useAppDispatch();

  return (
    <div className="mt-2 flex flex-col gap-2">
      {options.map((option) => (
        <Checkbox
          className="text-gray-700"
          key={option.value}
          value={option.value}
          checked={additionalOptions.includes(option.value as string)}
          onChange={() => dispatch(setAdditionalFeatures(option?.value))}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
}
