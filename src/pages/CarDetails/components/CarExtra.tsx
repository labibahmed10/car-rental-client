import { setAdditionalFeatures } from "../../../redux/feature/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { Radio } from "antd/lib";

interface CarExtraProps {
  value: string | number;
  label: string;
}

// will expand these features

// export default function CarAdditionalFeatures({ options }: { options: CarExtraProps[] }) {
//   const additionalOptions = useAppSelector(setAdditionalFeatures);

//   const dispatch = useAppDispatch();

//   return (
//     <div className="mt-2 flex flex-col gap-2">
//       {options.map((option) => (
//         <Checkbox className="text-gray-700" key={option.value} value={option.value} onChange={() => dispatch(setAdditionalFeatures(option?.value))}>
//           {option.label}
//         </Checkbox>
//       ))}
//     </div>
//   );
// }

export default function CarExtra({ options }: { options: CarExtraProps[] }) {
  const additionalOptions = useAppSelector(setAdditionalFeatures);
  console.log(additionalOptions);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-2 flex flex-col gap-2">
      {options.map((option) => (
        <Radio className="text-slate-100" key={option.value} value={option.value} onChange={() => dispatch(setAdditionalFeatures(option?.value))}>
          {option.label}
        </Radio>
      ))}
    </div>
  );
}
