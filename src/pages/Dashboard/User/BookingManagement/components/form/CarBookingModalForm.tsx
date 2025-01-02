import { DatePicker, Form, Input, Select } from "antd/lib";
import { IBookingResponse } from "../../../../../../types/booking.type";

export default function CarBookingModalForm({ selectedBooking }: { selectedBooking: IBookingResponse | undefined }) {
  return (
    <Form layout="vertical">
      <Form.Item label="Car Name">
        <Input value={selectedBooking?.car?.name} disabled />
      </Form.Item>
      <Form.Item label="Start Date">
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item label="End Date">
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item label="Status">
        <Select>
          <Select.Option value="upcoming">Upcoming</Select.Option>
          <Select.Option value="past">Past</Select.Option>
          <Select.Option value="approved">Approved</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
}
