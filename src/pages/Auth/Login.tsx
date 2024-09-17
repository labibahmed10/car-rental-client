import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Image } from "antd";
import partialLoginImg from "../../assets/images/gallery-3.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  const onFinish = (value: any) => {
    console.log(value);
  };
  return (
    <section className="sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 place-items-center h-screen px-4 sm:px-0 my-7">
      <div className="w-full order-1">
        <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} className="w-full sm:w-3/4 mx-auto">
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
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <NavLink to="">Forgot password</NavLink>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <NavLink to="/signup">Register now!</NavLink>
          </Form.Item>
        </Form>
      </div>
      <div className="w-full">
        <Image preview={false} src={partialLoginImg} alt="image in login page includes some car" />
      </div>
    </section>
  );
};

export default Login;
