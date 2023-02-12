import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Booking from "../../components/Booking/Booking";
import ContactUs from "../../components/ContactUs/ContactUs";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Rooms from "../../components/Rooms/Rooms";
import RoomSummary from "../../components/RoomSummary/RoomSummary";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import Main from "../../layout/Main";
import PrivateRotes from "../PrivateRoutes/PrivateRotes";

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

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booking",
        element: (
          <PrivateRotes>
            <Booking></Booking>
          </PrivateRotes>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/room/:id",

        element: <RoomSummary></RoomSummary>,
      },
    ],
  },
]);
