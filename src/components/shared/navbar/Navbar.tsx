import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { CalendarOutlined, ContainerOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

import logo from "../../../assets/images/logo.png";
import MyButton from "../../common/MyButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { selectCurrentToken, signOut } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { IUserToken } from "../../../types/auth.type";
import { GoArrowUpRight } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const token = useAppSelector(selectCurrentToken);
  const user = token && verifyToken(token as string);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <span>Home</span>,
    },
    {
      key: "/about",
      icon: <UserOutlined />,
      label: <span>About Us</span>,
    },
    {
      key: "/cars/booking",
      icon: <CalendarOutlined />,
      label: <span>Booking</span>,
    },
    {
      key: "/contact",
      icon: <ContainerOutlined />,
      label: <span>Contact</span>,
    },

    ...((user as IUserToken)?.role
      ? [
          {
            key: `/${(user as IUserToken).role}/dashboard`,
            icon: <MdSpaceDashboard />,
            label: <span>Dashboard</span>,
          },
        ]
      : []),
  ];

  const authButton = (
    <MyButton
      text={!(user as IUserToken)?.userId ? "Log In" : "Log Out"}
      onClick={() => ((user as IUserToken)?.userId ? dispatch(signOut()) : null)}
      extraStyle="bg-[#0f1a22ce]"
      icon={!(user as IUserToken)?.userId ? <GoArrowUpRight /> : null}
    />
  );

  return (
    <Header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm p-0 h-[calc(100%-92vh)]">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="h-14 w-12 flex items-center">
          <img src={logo} alt="logo" className="object-contain w-full h-full" />
        </div>

        <Menu
          mode="inline"
          className="bg-transparent border-0 !border-r-0 outline-0 hidden md:flex items-center justify-center w-3/4 mx-auto"
          items={menuItems.map((item) => ({
            ...item,
            icon: (
              <span
                className={`hover:!text-[#F5B754] transition-colors duration-300 ${
                  location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
                }
            `}
              >
                {item.icon}
              </span>
            ),
            label: (
              <NavLink
                to={item.key}
                className={`hover:!text-[#F5B754] transition-colors duration-300 ${
                  location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
                }`}
                style={{ backgroundColor: "transparent" }}
              >
                {item.label}
              </NavLink>
            ),
          }))}
          style={{ backgroundColor: "transparent" }}
        />
        <div className="hidden md:block">{!(user as IUserToken)?.userId ? <NavLink to="/login">{authButton}</NavLink> : authButton}</div>

        <Button type="text" icon={<MenuOutlined />} onClick={() => setVisible(true)} className="md:hidden" />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        className="md:hidden !bg-transparent !backdrop-blur-md !text-slate-100"
        width={280}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems.map((item) => ({
            ...item,
            label: (
              <NavLink
                to={item.key}
                className={`transition-colors duration-300 ${location.pathname === item.key ? "text-red-500" : "text-slate-100"}`}
                style={{ backgroundColor: "transparent" }}
              >
                {item.label}
              </NavLink>
            ),
          }))}
          onClick={() => setVisible(false)}
          style={{ border: "none", backgroundColor: "transparent" }}
        />
        <div className="mt-4">
          {!(user as IUserToken)?.userId ? (
            <NavLink to="/login" onClick={() => setVisible(false)}>
              {authButton}
            </NavLink>
          ) : (
            authButton
          )}
        </div>
      </Drawer>
    </Header>
  );
};

export default Navbar;
