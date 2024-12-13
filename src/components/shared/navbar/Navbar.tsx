// import React, { useState } from "react";
// import { Layout, Menu, Button, Drawer } from "antd";
// import { NavLink, useLocation } from "react-router-dom";
// import { CalendarOutlined, ContainerOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

// import MyButton from "../../common/MyButton";
// import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
// import { selectCurrentToken, signOut } from "../../../redux/feature/auth/authSlice";
// import { verifyToken } from "../../../utils/verifyToken";
// import { IUserToken } from "../../../types/auth.type";
// import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
// import { MdSpaceDashboard } from "react-icons/md";

// const { Header } = Layout;

// const Navbar: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const token = useAppSelector(selectCurrentToken);
//   const user = token && verifyToken(token as string);
//   const dispatch = useAppDispatch();
//   const location = useLocation();

//   const menuItems = [
//     {
//       key: "/",
//       icon: <HomeOutlined />,
//       label: <span>Home</span>,
//     },
//     {
//       key: "/about",
//       icon: <UserOutlined />,
//       label: <span>About Us</span>,
//     },
//     {
//       key: "/cars/booking",
//       icon: <CalendarOutlined />,
//       label: <span>Booking</span>,
//     },
//     {
//       key: "/contact",
//       icon: <ContainerOutlined />,
//       label: <span>Contact</span>,
//     },

//     ...((user as IUserToken)?.role
//       ? [
//           {
//             key: `/${(user as IUserToken).role}/dashboard`,
//             icon: <MdSpaceDashboard />,
//             label: <span>Dashboard</span>,
//           },
//         ]
//       : []),
//   ];

//   const authButton = (
//     <MyButton
//       text={!(user as IUserToken)?.userId ? "Log In" : "Log Out"}
//       onClick={() => ((user as IUserToken)?.userId ? dispatch(signOut()) : null)}
//       extraStyle="bg-[#F5B754] hover:!bg-white hover:!text-black transition-all duration-500"
//       icon={!(user as IUserToken)?.userId ? <GoArrowUpRight /> : <GoArrowUpLeft />}
//     />
//   );

//   return (
//     <Header className="fixed top-0 z-50 w-full bg-transparent/10 backdrop-blur-sm p-0">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         <div className="w-fit">
//           <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5B754] to-[#f0b505]">Swift Ride</h3>
//         </div>

//         <Menu
//           mode="inline"
//           className="bg-transparent border-0 !border-r-0 outline-0 hidden md:flex items-center justify-center w-[75%] transition-all duration-300"
//           items={menuItems.map((item) => ({
//             ...item,
//             icon: (
//               <span
//                 className={`hover:!text-[#F5B754] transition-all duration-300 ${
//                   location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
//                 }
//             `}
//               >
//                 {item.icon}
//               </span>
//             ),
//             label: (
//               <NavLink
//                 to={item.key}
//                 className={`hover:!text-[#F5B754] transition-all duration-300 ${
//                   location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
//                 }`}
//               >
//                 {item.label}
//               </NavLink>
//             ),
//           }))}
//         />

//         <div className="hidden md:block">{!(user as IUserToken)?.userId ? <NavLink to="/login">{authButton}</NavLink> : authButton}</div>

//         <Button type="text" icon={<MenuOutlined />} onClick={() => setVisible(true)} className="md:hidden" />
//       </div>

//       <Drawer
//         title="Menu"
//         placement="right"
//         onClose={() => setVisible(false)}
//         open={visible}
//         className="md:hidden !bg-transparent !backdrop-blur-md !text-slate-100"
//         width={280}
//       >
//         <Menu
//           mode="inline"
//           selectedKeys={[location.pathname]}
//           items={menuItems.map((item) => ({
//             ...item,
//             icon: (
//               <span
//                 className={`hover:!text-[#F5B754] transition-all duration-300 ${
//                   location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
//                 }
//             `}
//               >
//                 {item.icon}
//               </span>
//             ),
//             label: (
//               <NavLink
//                 to={item.key}
//                 className={`hover:!text-[#F5B754] transition-colors duration-300 ${
//                   location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
//                 }`}
//                 style={{ backgroundColor: "transparent" }}
//               >
//                 {item.label}
//               </NavLink>
//             ),
//           }))}
//           onClick={() => setVisible(false)}
//           style={{ border: "none", backgroundColor: "transparent" }}
//         />
//         <div className="mt-5">
//           {!(user as IUserToken)?.userId ? (
//             <NavLink to="/login" onClick={() => setVisible(false)}>
//               {authButton}
//             </NavLink>
//           ) : (
//             authButton
//           )}
//         </div>
//       </Drawer>
//     </Header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { CalendarOutlined, ContainerOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import MyButton from "../../common/MyButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { selectCurrentToken, signOut } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { IUserToken } from "../../../types/auth.type";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const token = useAppSelector(selectCurrentToken);
  const user = token ? verifyToken(token as string) : null;
  const dispatch = useAppDispatch();
  const location = useLocation();

  const menuItems = getMenuItems(user);

  const authButton = (
    <MyButton
      text={!(user as IUserToken)?.userId ? "Log In" : "Log Out"}
      onClick={() => ((user as IUserToken)?.userId ? dispatch(signOut()) : null)}
      extraStyle="bg-[#F5B754] hover:!bg-white hover:!text-black transition-all duration-500"
      icon={!(user as IUserToken)?.userId ? <GoArrowUpRight /> : <GoArrowUpLeft />}
    />
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

const Logo: React.FC = () => (
  <div className="w-fit">
    <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5B754] to-[#f0b505]">Swift Ride</h3>
  </div>
);

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

const MenuIcon: React.FC<{ item: any; location: any }> = ({ item, location }) => (
  <span
    className={`hover:!text-[#F5B754] mr-2 flex justify-center items-center transition-all duration-300 ${
      location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
    }`}
  >
    {item.icon}
  </span>
);

const MenuLink: React.FC<{ item: any; location: any }> = ({ item, location }) => (
  <NavLink
    to={item.key}
    className={`hover:!text-[#F5B754] transition-all duration-300 ${location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"}`}
  >
    {item.label}
  </NavLink>
);

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

const getMenuItems = (user: IUserToken | null) => {
  const baseItems = [
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
  ];

  if (user?.role) {
    baseItems.push({
      key: `/${user.role}/dashboard`,
      icon: <MdSpaceDashboard />,
      label: <span>Dashboard</span>,
    });
  }

  return baseItems;
};

export default Navbar;
