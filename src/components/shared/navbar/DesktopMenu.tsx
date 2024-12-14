/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from "antd";
import MenuIcon from "./MenuIcon";
import MenuLink from "./MenuLink";
import React from "react";

const DesktopMenu: React.FC<{ menuItems: any[]; location: any }> = ({ menuItems, location }) => (
  <Menu
    mode="inline"
    className="bg-transparent border-0 !border-r-0 outline-0 hidden md:flex items-center justify-center w-[75%] transition-all duration-300"
    items={menuItems.map((item) => ({
      ...item,
      icon: <MenuIcon item={item} location={location} />,
      label: <MenuLink item={item} location={location} />,
    }))}
  />
);

export default DesktopMenu;
