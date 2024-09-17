import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Image, Input } from "antd";
import { NavLink } from "react-router-dom";
import partialSignupImg from "../../assets/images/gallery-2.jpg";

export default function SignUp() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (value: any) => {
    console.log(value);
  };
  return (
    <section className="sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 place-items-center h-screen px-4 sm:px-0 my-7">
      <div className="w-full order-1">
        <Form name="login" onFinish={onFinish} className="w-full sm:w-3/4 mx-auto">
          <Form.Item name="name" rules={[{ required: true, message: "Please input your Name!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" className="w-full" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The new password that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement"))),
              },
            ]}
          >
            <Checkbox>
              I have read the <NavLink to="">Terms and Condition</NavLink>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign Up
            </Button>
            <p className="mt-2">
              Already have an account! <NavLink to="/login">Login now!</NavLink>
            </p>
          </Form.Item>
        </Form>
      </div>
      <div className="w-full">
        <Image preview={false} src={partialSignupImg} alt="image in login page includes some car" />
      </div>
    </section>
  );
}
