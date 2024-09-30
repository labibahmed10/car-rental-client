import { HomeOutlined, LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Image, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import partialSignupImg from "../../assets/images/gallery-2.jpg";
import MyButton from "../../components/common/MyButton";
import { IUserSignUp } from "../../types/auth.type";
import { useSignUpMutation } from "../../redux/feature/auth/authApi";
import { useEffect } from "react";
import { toast } from "sonner";

export default function SignUp() {
  const [signUpUser, { isError, isLoading, isSuccess, error }] = useSignUpMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const toastId: number | string | boolean = (isLoading || isError) && toast.loading("Waiting for sign up..");

    if (isSuccess) {
      toast.success("User registration successfully", {
        id: toastId as number,
      });
    }

    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error((error as any)?.data?.errorMessages[0]?.message, {
        id: toastId as number,
      });
    }

    return () => {
      toast.dismiss(toastId as number);
    };
  }, [isError, error, isSuccess, isLoading]);

  const onFinish = async (value: IUserSignUp) => {
    await signUpUser({ ...value, role: "user" }).unwrap();
    navigate("/login");
  };
  return (
    <section className="sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 place-items-center gap-8 sm:gap-2 px-4 sm:px-0 my-8 sm:my-32">
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

          <Form.Item name="address" rules={[{ required: true, message: "Please input your Address!" }]}>
            <Input prefix={<HomeOutlined />} placeholder="Enter Address" />
          </Form.Item>

          <Form.Item name="phone" rules={[{ required: true, message: "Please input your phone number!" }]}>
            <Input addonBefore="+880" prefix={<PhoneOutlined />} placeholder="Input your phone number" />
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
            <MyButton text="Sign Up" extraStyle="w-full mt-2" type="submit" />
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
