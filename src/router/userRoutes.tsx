import { RouteObject, NavLink } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { MdSpaceDashboard, MdBookmarks } from "react-icons/md";
import type { MenuProps } from "antd";
import UserDashboard from "../pages/Dashboard/User/UserDashboard/UserDashboard";
import BookingManagement from "../pages/Dashboard/User/BookingManagement/BookingManagement";
import PaymentManagement from "../pages/Dashboard/User/PaymentManagement/PaymentManagement";

export const userRoutes: RouteObject[] | undefined = [
  {
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    path: "booking-management",
    element: <BookingManagement />,
  },
  {
    path: "payment-management",
    element: <PaymentManagement />,
  },
];

export const userSidebarRoutesmc: MenuProps["items"] = [
  {
    key: "dashboard",
    label: <NavLink to="/user/dashboard">User Dashboard</NavLink>,
    icon: <MdSpaceDashboard />,
  },
  {
    key: "booking-management",
    label: <NavLink to="/user/booking-management">Booking Management</NavLink>,
    icon: <MdBookmarks />,
  },
  {
    key: "payment-management",
    label: <NavLink to="/user/payment-management">Payment Management</NavLink>,
    icon: <FaDollarSign />,
  },
];
