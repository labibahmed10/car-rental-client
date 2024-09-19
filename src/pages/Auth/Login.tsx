import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Flex, Image } from "antd";
import partialLoginImg from "../../assets/images/gallery-3.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import MyButton from "../../components/common/MyButton";
import { IUserSingIn } from "../../types/auth.type";
import { useSignInMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/store/hooks";
import { toast } from "sonner";
// import { useEffect } from "react";
import { signIn } from "../../redux/feature/auth/authSlice";

const Login = () => {
  const [signInUser, { isLoading, isError }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toastId: number | string | boolean = (isLoading || isError) && toast.loading("Waiting for login..");

  const onFinish = async (value: IUserSingIn) => {
    try {
      const userInfo = await signInUser(value).unwrap();
      if (userInfo?.success) {
        dispatch(signIn({ user: userInfo?.data, token: userInfo?.token }));
        toast.success("Logged in successfully", {
          id: toastId as number,
          duration: 2000,
        });
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.data.message);
      if (error.data) {
        toast.error(error.data.message, {
          id: toastId as number,
          duration: 2000,
        });
      }
    } finally {
      toast.dismiss(toastId as number);
    }
  };

  return (
    <section className="sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 place-items-center gap-8 sm:gap-2 px-4 sm:px-0 my-8 sm:my-24">
      <div className="w-full order-1">
        <Form name="login" onFinish={onFinish} className="w-full sm:w-3/4 mx-auto">
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
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Checkbox>Remember me</Checkbox>

              <NavLink to="">Forgot password</NavLink>
            </Flex>
          </Form.Item>

          <Form.Item>
            <MyButton text="Log In" extraStyle="w-full" type="submit" />
            <p className="mt-2">
              or <NavLink to="/signup">Register now!</NavLink>
            </p>
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
