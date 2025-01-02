/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import MyButton from "../../common/MyButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { selectCurrentToken, signOut } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { IUserToken } from "../../../types/auth.type";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import MenuIcon from "./MenuIcon";
import MenuLink from "./MenuLink";
import getMenuItems from "../../../router/navigationItems";
import DesktopMenu from "./DesktopMenu";
import baseApi from "../../../redux/api/baseApi";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const token = useAppSelector(selectCurrentToken);
  const user = token ? verifyToken(token as string) : null;
  const dispatch = useAppDispatch();
  const location = useLocation();

  const menuItems = getMenuItems(user);

  // Sign out user and also clear all the cache it had
  const handleSignOut = () => {
    dispatch(baseApi.util.resetApiState());
    dispatch(signOut());
  };

  const authButton = (
    <MyButton
      text={!(user as IUserToken)?.userId ? "Log In" : "Log Out"}
      onClick={() => ((user as IUserToken)?.userId ? handleSignOut() : null)}
      extraStyle="bg-[#F5B754] hover:!bg-white hover:!text-black transition-all duration-500"
      icon={!(user as IUserToken)?.userId ? <GoArrowUpRight /> : <GoArrowUpLeft />}
    />
  );

  const Logo: React.FC = () => (
    <div className="w-fit">
      <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5B754] to-[#f0b505]">Swift Ride</h3>
    </div>
  );

  return (
    <Header className="fixed top-0 z-50 w-full bg-transparent/10 backdrop-blur-sm p-0">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Logo />
        <DesktopMenu menuItems={menuItems} location={location} />
        <div className="hidden md:block">{renderAuthButton(authButton, user)}</div>
        <Button type="text" icon={<MenuOutlined />} onClick={() => setVisible(true)} className="md:hidden" />
      </div>
      <MobileDrawer visible={visible} onClose={() => setVisible(false)} menuItems={menuItems} authButton={authButton} />
    </Header>
  );
};

const MobileDrawer: React.FC<{ visible: boolean; onClose: () => void; menuItems: any[]; authButton: React.ReactNode }> = ({
  visible,
  onClose,
  menuItems,
  authButton,
}) => (
  <Drawer
    title="Menu"
    placement="right"
    onClose={onClose}
    open={visible}
    className="md:hidden !bg-transparent !backdrop-blur-md !text-slate-100"
    width={280}
  >
    <Menu
      mode="inline"
      items={menuItems.map((item) => ({
        ...item,
        icon: <MenuIcon item={item} location={location} />,
        label: <MenuLink item={item} location={location} />,
      }))}
      onClick={onClose}
      style={{ border: "none", backgroundColor: "transparent" }}
    />
    <div className="mt-5">{authButton}</div>
  </Drawer>
);

const renderAuthButton = (authButton: React.ReactNode, user: IUserToken | null) => {
  return !(user as IUserToken)?.userId ? <NavLink to="/login">{authButton}</NavLink> : authButton;
};

export default Navbar;
