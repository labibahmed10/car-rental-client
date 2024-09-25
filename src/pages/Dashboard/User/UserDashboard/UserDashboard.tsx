import { useState } from "react";
import { Card, Avatar, Button, Row, Col, Typography, Table, Modal, Form, Input, Tag, Image } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../../redux/store/hooks";
import { selectCurrentUser } from "../../../../redux/feature/auth/authSlice";
import { ColumnsType } from "antd/es/table";
import { IBookingResponse } from "../../../../types/booking.type";
import { useGetIndividualBookingQuery } from "../../../../redux/feature/booking/bookingApi";

const { Title, Text } = Typography;

const UserDashboard = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { data: bookingData, isLoading } = useGetIndividualBookingQuery(undefined);

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
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      render: (value) => (value ? value : "N/A"),
    },
    {
      title: "Car",
      dataIndex: ["car", "name"],
      key: "carName",
    },
    {
      title: "Image",
      dataIndex: ["car", "image"],
      key: "image",
      render: (image) => <Image src={image} alt="Image of the Car" />,
    },
    {
      title: "Status",
      dataIndex: ["car", "status"],
      key: "status",
      render: (status: string) => <Tag color={status === "unavailable" ? "red" : "green"}>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (cost: number) => `$${cost.toFixed(2)}`,
    },
  ];

  return (
    <div>
      <Card>
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

      <Card style={{ marginTop: 16 }}>
        <Title level={4}>Booking History</Title>
        <Table scroll={{ x: 1000 }} size="middle" columns={columns} dataSource={bookingData?.data} loading={isLoading} />
      </Card>

      <Modal title="Update Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
