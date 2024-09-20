import { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col, MenuProps, Image } from "antd";
import { HomeOutlined, UserOutlined, MenuOutlined, ContainerOutlined, CalendarOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import MyButton from "../../common/MyButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { selectCurrentToken, signOut } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { IUserToken } from "../../../types/auth.type";
import { MdSpaceDashboard } from "react-icons/md";

const { Header } = Layout;

const Navbar = () => {
  const token = useAppSelector(selectCurrentToken);
  const user = token && verifyToken(token as string);
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();

  const items: MenuProps["items"] = [
    {
      key: 1,
      icon: <HomeOutlined className="text-white" />,
      label: (
        <NavLink to="/">
          <span className="text-white">Home</span>
        </NavLink>
      ),
    },
    {
      key: 2,
      label: (
        <NavLink to="/about">
          <span className="text-white">About Us</span>
        </NavLink>
      ),
      icon: <UserOutlined className="text-white" />,
    },
    {
      key: 3,
      label: (
        <NavLink to="/cars/booking">
          <span className="text-white">Booking</span>
        </NavLink>
      ),
      icon: <CalendarOutlined className="text-white" />,
    },
    {
      key: 4,
      label: (
        <NavLink to="/contact">
          <span className="text-white">Contact</span>
        </NavLink>
      ),
      icon: <ContainerOutlined className="text-white" />,
    },

    {
      key: 5,
      label:
        (user as IUserToken)?.role === "user" ? (
          <NavLink to={`/${(user as IUserToken)?.role}/dashboard`}>
            <span className="text-white">Dashboard</span>
          </NavLink>
        ) : (
          (user as IUserToken)?.role === "admin" && (
            <NavLink to={`/${(user as IUserToken)?.role}/dashboard`}>
              <span className="text-white">Dashboard</span>
            </NavLink>
          )
        ),
      icon: (user as IUserToken)?.role ? <MdSpaceDashboard className="text-center" /> : null,
    },
  ];

  const menuItem: MenuProps["items"] = [
    {
      key: "6",
      label: !(user as IUserToken)?.userId ? (
        <NavLink to="/login">
          <MyButton text="Log In" extraStyle="bg-[#0f1a22ce]" />
        </NavLink>
      ) : (
        <MyButton text="Log Out" onClick={() => dispatch(signOut())} extraStyle="bg-[#0f1a22ce]" />
      ),
      style: {
        background: "transparent",
      },
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="bg-[#2A5979] px-4 max-h-16 ">
      <Header className="p-0 bg-[#2A5979] w-full max-w-screen-xl mx-auto ">
        {/* visible for desktop */}
        <Row justify="space-between" align="top">
          <Col xs={20} sm={20} md={2}>
            <div className="size-16">
              <Image src={logo} alt="logo" className="object-fill" preview={false} />
            </div>
          </Col>
          <Col xs={0} sm={0} md={19}>
            <Menu mode="horizontal" className="bg-[#2A5979] text-white flex items-center justify-center w-full" theme="dark" items={items} />
          </Col>
          <Col xs={0} sm={0} md={3}>
            <Menu className="bg-[#2A5979] text-white" mode="horizontal" theme="dark" items={menuItem} />
          </Col>
          <Col xs={4} sm={4} md={0}>
            <Button type="primary" className="text-white bg-[#0f1a22ce]" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>

        {/* visible for mobile */}
        <Drawer
          styles={{
            header: {
              backgroundColor: "#2A5979",
              color: "white",
            },
            body: {
              backgroundColor: "#2A5979",
              color: "white",
            },
          }}
          width={300}
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          open={visible}
        >
          <Menu mode="vertical" className="bg-[#2A5979]" theme="dark" items={items} />
          <Menu mode="horizontal" className="bg-[#2A5979]" theme="dark" items={menuItem} />
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
