import { MdSpaceDashboard, MdBookmarks } from "react-icons/md";
import { FaCarOn, FaCarSide } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { NavLink, RouteObject } from "react-router-dom";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import ManageCars from "../pages/Dashboard/Admin/ManageCars/ManageCars";
import ManageBookings from "../pages/Dashboard/Admin/ManageBookings/ManageBookings";
import CreateCar from "../pages/Dashboard/Admin/CreateCar/CreateCar";
import ManageReturnCar from "../pages/Dashboard/Admin/ManageReturnCar/ManageReturnCar";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import { MenuProps } from "antd";
import { TbTruckReturn } from "react-icons/tb";

export const adminRoutes: RouteObject[] | undefined = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "manage-cars",
    element: <ManageCars />,
  },
  {
    path: "manage-bookings",
    element: <ManageBookings />,
  },
  {
    path: "manage-users",
    element: <ManageUsers />,
  },
  {
    path: "create-car",
    element: <CreateCar />,
  },

  {
    path: "manage-return-cars",
    element: <ManageReturnCar />,
  },
];

export const adminSidebarRoutes: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
    icon: <MdSpaceDashboard className="mr-2" />,
  },
  {
    key: "Manage Cars",
    label: <NavLink to="/admin/manage-cars">Manage Cars</NavLink>,
    icon: <FaCarSide />,
  },
  {
    key: "Manage Bookings",
    label: <NavLink to="/admin/manage-bookings">Manage Bookings</NavLink>,
    icon: <MdBookmarks />,
  },
  {
    key: "User Management",
    label: <NavLink to="/admin/manage-users">User Management</NavLink>,
    icon: <FaUsers />,
  },
  {
    key: "Create Car",
    label: <NavLink to="/admin/create-car">Create Car</NavLink>,
    icon: <FaCarOn />,
  },
  {
    key: "Manage Return Cars",
    label: <NavLink to="/admin/manage-return-cars">Manage Return Cars</NavLink>,
    icon: <TbTruckReturn />,
  },
];
