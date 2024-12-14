import { CalendarOutlined, ContainerOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { MdSpaceDashboard } from "react-icons/md";
import { IUserToken } from "../types/auth.type";

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

export default getMenuItems;
