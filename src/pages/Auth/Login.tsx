/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Flex, Image } from "antd";
import partialLoginImg from "../../assets/images/gallery-3.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import MyButton from "../../components/common/MyButton";
import { IUserSingIn } from "../../types/auth.type";
import { useSignInMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/store/hooks";
import { toast } from "sonner";
import { signIn } from "../../redux/feature/auth/authSlice";
import { useEffect } from "react";

const Login = () => {
  const [signInUser, { isSuccess, isError, error, isLoading }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const toastId: number | string | boolean = (isLoading || isError) && toast.loading("Waiting for login..");

    if (isSuccess) {
      toast.success("Logged in successfully", {
        id: toastId as number,
      });
    }

    if (isError) {
      toast.error((error as any)?.data?.message, {
        id: toastId as number,
      });
    }

    return () => {
      toast.dismiss(toastId as number);
    };
  }, [isError, error, isSuccess, isLoading]);

  const onFinish = async (value: IUserSingIn) => {
    const userInfo = await signInUser(value).unwrap();

    dispatch(signIn({ user: userInfo?.data, token: userInfo?.token }));
    navigate("/");
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
