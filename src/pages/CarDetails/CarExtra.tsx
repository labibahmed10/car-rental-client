import { Checkbox } from "antd";

interface CarExtraProps {
  value: string | number;
  label: string;
}

export default function CarExtra({ options }: { options: CarExtraProps[] }) {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {options.map((option) => (
        <Checkbox className="text-gray-700" key={option.value} value={option.value}>
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
}
