import { Button, Form, Input, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function CarReviewForm() {
  return (
    <div className="text-gray-700 shadow-md p-2 rounded-lg mt-6">
      <div className="">
        <p className="font-bold text-xl">LEAVE A REVIEW:</p>
        <Form layout="vertical">
          <Form.Item
            label="Your Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>

          <Form.Item label="Your Review" name="review" rules={[{ required: true, message: "Please input your review!" }]}>
            <TextArea rows={4} placeholder="Your Review" />
          </Form.Item>
          <Form.Item label="Your Rating" name="rating">
            <Rate allowHalf={false} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="bg-[#223E51] text-white" htmlType="submit">
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
