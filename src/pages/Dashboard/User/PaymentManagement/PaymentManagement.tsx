import { useState } from "react";
import { Table, Button, Modal, Form, Input, message, Card } from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";

interface Payment {
  id: string;
  carName: string;
  amount: number;
  status: "pending" | "paid";
}

export default function PaymentManagement() {
  const [payments, setPayments] = useState<Payment[]>([
    { id: "1", carName: "Toyota", amount: 100, status: "pending" },
    { id: "2", carName: "Honda", amount: 200, status: "pending" },
    { id: "3", carName: "Ford", amount: 300, status: "pending" },
  ]); // Replace with actual data fetching
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const columns: ColumnsType<Payment> = [
    {
      title: "Car Name",
      dataIndex: "carName",
      key: "carName",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `$${amount}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_: string, record: Payment) => <Button onClick={() => handlePay(record)}>Pay</Button>,
    },
  ];

  const handlePay = (payment: Payment) => {
    setSelectedPayment(payment);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    // Implement payment logic
    if (selectedPayment) {
      // Update payment status
      const updatedPayments = payments.map((p) => (p.id === selectedPayment.id ? { ...p, status: "paid" as const } : p));
      setPayments(updatedPayments);
      message.success("Payment successful");
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Card style={{ marginTop: 16 }}>
        <Title level={4}>Payment Management</Title>
        <Table columns={columns} dataSource={payments} rowKey="id" scroll={{ x: 500 }} />
      </Card>
      <Modal title="Make Payment" visible={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
        {selectedPayment && (
          <>
            <p>Car: {selectedPayment.carName}</p>
            <p>Amoun: ${selectedPayment.amount}</p>
            <Form layout="vertical" className="mt-3">
              <Form.Item label="Card Number">
                <Input placeholder="Enter card number" />
              </Form.Item>
              <Form.Item label="Expiration Date">
                <Input placeholder="Enter expiration date" />
              </Form.Item>
              <Form.Item label="CVV">
                <Input placeholder="Enter CVV" />
              </Form.Item>
            </Form>
          </>
        )}
      </Modal>
    </div>
  );
}
