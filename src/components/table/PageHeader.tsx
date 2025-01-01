import { ReloadOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";

interface PageHeaderProps {
  title: string;
  extra?: React.ReactNode;
  isRefetch?: boolean;
  refetch?: () => void;
  loading?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, isRefetch = true, refetch, loading, extra }) => {
  return (
    <Card className="mb-5 ">
      <div className="flex justify-between items-center gap-12">
        <div className="uppercase flex items-center gap-2">
          <p>{title}</p>
          {isRefetch && (
            <Button onClick={refetch} shape="circle" type="primary" icon={<ReloadOutlined />} loading={loading} className="dark:bg-dark-color" />
          )}
        </div>
        <div className="">{extra && <div>{extra}</div>}</div>
      </div>
    </Card>
  );
};

export default PageHeader;
