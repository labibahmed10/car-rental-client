import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

export default function CarDescription({ description }: { description: string }) {
  return (
    <div className="mt-4 w-full">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => <CaretRightOutlined className="text-slate-100" rotate={isActive ? 90 : 0} />}
        items={[
          {
            key: "1",
            label: <span className="text-slate-100">DESCRIPTION</span>,
            children: <p className="text-slate-100 ">{description + description}</p>,
          },
        ]}
      />
    </div>
  );
}
