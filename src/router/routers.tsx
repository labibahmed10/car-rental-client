import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Home from "../pages/home/Home";
import AllCars from "../pages/AllCars/AllCars";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routers;
