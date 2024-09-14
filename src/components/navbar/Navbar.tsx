import { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col, MenuProps, Image } from "antd";
import { HomeOutlined, UserOutlined, MenuOutlined, ContainerOutlined, CalendarOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <HomeOutlined className="text-white" />,
    label: (
      <NavLink to="/">
        <span className="text-white">Home</span>
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink to="/about">
        <span className="text-white">About Us</span>
      </NavLink>
    ),
    icon: <UserOutlined className="text-white" />,
  },
  {
    key: "3",
    label: (
      <NavLink to="/booking">
        <span className="text-white">Booking</span>
      </NavLink>
    ),
    icon: <CalendarOutlined className="text-white" />,
  },
  {
    key: "4",
    label: (
      <NavLink to="/contact">
        <span className="text-white">Contact</span>
      </NavLink>
    ),
    icon: <ContainerOutlined className="text-white" />,
  },
];

const menuItem: MenuProps["items"] = [
  {
    key: "",
    label: (
      <NavLink to="/login">
        <Button type="primary" className="text-white bg-[#0f1a22ce]">
          Log in
        </Button>
      </NavLink>
    ),
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header className="p-0 bg-[#223e51]">
        {/* visible for desktop */}
        <Row justify="space-between" align="top">
          <Col xs={20} sm={20} md={5} className="ps-4">
            <div className="size-16">
              <Image src={logo} alt="logo" className="object-fill" preview={false} />
            </div>
          </Col>
          <Col xs={0} sm={0} md={10}>
            <Menu mode="horizontal" className="bg-[#223e51] text-white" theme="dark" defaultSelectedKeys={["1"]} items={items} />
          </Col>
          <Col xs={0} sm={0} md={5}>
            <Menu className="bg-[#223e51] text-white" mode="horizontal" theme="dark" items={menuItem} />
          </Col>
          <Col xs={4} sm={4} md={0}>
            <Button type="primary" className="text-white bg-[#0f1a22ce] " onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>

        {/* visible for mobile */}
        <Drawer
          styles={{
            header: {
              backgroundColor: "#223e51",
              color: "white",
            },
            body: {
              backgroundColor: "#223e51",
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
          <Menu mode="vertical" className="bg-[#223e51]" theme="dark" defaultSelectedKeys={["1"]} items={items} />
          <Menu mode="horizontal" className="bg-[#223e51]" theme="dark" items={menuItem} />
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
