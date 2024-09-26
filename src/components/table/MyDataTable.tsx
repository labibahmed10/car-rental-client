import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC, Fragment } from "react";

type TProps<T, X> = {
  columns: ColumnsType<T>;
  data: Array<X> | undefined;
  loading: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyDataTable: FC<TProps<any, any>> = ({ columns, data, loading }) => {
  return (
    <Fragment>
      <Table
        showHeader={true}
        loading={loading}
        columns={columns}
        rowKey={(record) => record?._id}
        dataSource={data || []}
        scroll={{ x: "calc(700px + 30%)" }}
      />
    </Fragment>
  );
};

export default MyDataTable;
