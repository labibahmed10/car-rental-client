import { Form, Input, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import MyButton from "../../../components/common/MyButton";

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
            <MyButton text="Submit Review" type="submit" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
