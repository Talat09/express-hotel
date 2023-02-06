import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Rooms from "../../components/Rooms/Rooms";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
    ],
  },
]);
