import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Home from "../pages/home/Home";
import AllCars from "../pages/AllCars/AllCars";
import CarDetails from "../pages/CarDetails/CarDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import NotFound from "../pages/NotFound/NotFound";
import SignUp from "../pages/Auth/SignUp";
import Bookings from "../pages/Bookings/Bookings";
import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";
import { userRoutes, userSidebarRoutes } from "./userRoutes";
import { adminRoutes, adminSidebarRoutes } from "./adminRoutes";
import ProtectedRoute from "../components/layout/Protected/ProtectedRoute";

const routers = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cars",
        element: <AllCars />,
      },
      {
        path: "cars/:name",
        element: <CarDetails />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "cars/booking",
        element: <Bookings />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute allowedRole={"user"}>
        <DashboardLayout items={userSidebarRoutes} />
      </ProtectedRoute>
    ),
    children: userRoutes,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRole="admin">
        <DashboardLayout items={adminSidebarRoutes} />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
]);

export default routers;
