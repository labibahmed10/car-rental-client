import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

export default function CarDescription({ description }: { description: string }) {
  return (
    <div className="mt-4 w-full">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        items={[
          {
            key: "1",
            label: "DESCRIPTION",
            children: <p className="text-gray-700 ">{description + description}</p>,
          },
        ]}
      />
    </div>
  );
}
