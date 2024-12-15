import { Checkbox } from "antd";

interface CarExtraProps {
  value: string | number;
  label: string;
}

// will expand these features

// export default function CarAdditionalFeatures({ options }: { options: CarExtraProps[] }) {
//   const additionalOptions = useAppSelector(selectAdditionalFeatures);
//   console.log(additionalOptions);
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
  // const additionalOptions = useAppSelector(selectAdditionalFeatures);
  // console.log(additionalOptions);
  // const dispatch = useAppDispatch();

  return (
    <div className="mt-2 flex flex-col gap-2">
      {options.map((option) => (
        <Checkbox
          className="text-slate-100"
          key={option.value}
          value={option.value}
          // onChange={() => dispatch(setAdditionalFeatures(option?.value))}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
}
