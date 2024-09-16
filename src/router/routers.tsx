import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Home from "../pages/home/Home";
import AllCars from "../pages/AllCars/AllCars";
import CarDetails from "../pages/CarDetails/CarDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-cars",
        element: <AllCars />,
      },
      {
        path: "/cars/:name",
        element: <CarDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routers;
