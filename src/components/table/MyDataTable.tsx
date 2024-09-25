import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC, Fragment, useRef } from "react";

type TProps<T, X> = {
  columns: ColumnsType<T>;
  data: Array<X> | undefined;
  loading: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyDataTable: FC<TProps<any, any>> = ({ columns, data, loading }) => {
  const tableRef = useRef(null);

  return (
    <Fragment>
      <Table
        showHeader={true}
        ref={tableRef}
        loading={loading}
        columns={columns}
        rowKey={(record) => record?._id || record?.key || Math.random().toString(36).slice(2, 9)}
        dataSource={data || []}
        scroll={{ x: "calc(700px + 30%)" }}
      />
    </Fragment>
  );
};

export default MyDataTable;
