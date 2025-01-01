import { useState } from "react";
import { Card, Avatar, Button, Row, Col, Typography, Modal, Form, Input, Tag, Image } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../../redux/store/hooks";
import { selectCurrentUser } from "../../../../redux/feature/auth/authSlice";
import { ColumnsType } from "antd/es/table";
import { IBookingResponse } from "../../../../types/booking.type";
import { useGetIndividualBookingQuery } from "../../../../redux/feature/booking/bookingApi";
import PageHeader from "../../../../components/table/PageHeader";
import MyDataTable from "../../../../components/table/MyDataTable";

const { Title, Text } = Typography;

const UserDashboard = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { data: bookingData, isLoading, refetch, isFetching } = useGetIndividualBookingQuery(undefined);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle form submission
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns: ColumnsType<IBookingResponse> = [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      sorter: (a: IBookingResponse, b: IBookingResponse) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      },
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      defaultSortOrder: "descend",
      align: "center",
      sorter: (a: IBookingResponse, b: IBookingResponse) => {
        const timeA = new Date(`1970-01-01T${a.startTime}`).getTime();
        const timeB = new Date(`1970-01-01T${b.startTime}`).getTime();
        return timeA - timeB;
      },
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      align: "center",
      render: (value) => (value ? value : "N/A"),
      sorter: (a: IBookingResponse, b: IBookingResponse) => {
        const timeA = new Date(`1970-01-01T${a.endTime}`).getTime();
        const timeB = new Date(`1970-01-01T${b.endTime}`).getTime();
        return timeA - timeB;
      },
    },
    {
      title: "Car",
      dataIndex: ["car", "name"],
      key: "carName",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: ["car", "image"],
      key: "image",
      align: "center",
      render: (image) => (
        <div className="w-14 h-10 mx-auto">
          <Image src={image} alt="car photo" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: ["car", "status"],
      key: "status",
      align: "center",
      render: (status: string) => <Tag color={status === "unavailable" ? "red" : "green"}>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      align: "center",
      render: (cost: number) => `$${cost.toFixed(2)}`,
    },
  ];

  return (
    <div>
      <PageHeader title="Manage Users" refetch={refetch} loading={isLoading || isFetching} />

      <Card className="mb-5">
        <Row gutter={[16, 16]} align="middle">
          <Col>
            <Avatar size={64} icon={<UserOutlined />} src={currentUser?.name} />
          </Col>
          <Col flex={1}>
            <Title level={4}>{currentUser?.name}</Title>
            <Text>{currentUser?.email}</Text>
          </Col>
          <Col>
            <Button type="primary" icon={<EditOutlined />} onClick={showModal}>
              Update Profile
            </Button>
          </Col>
        </Row>
      </Card>

      <MyDataTable columns={columns} data={bookingData?.data} loading={isLoading} />

      <Modal title="Update Profile" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserDashboard;
