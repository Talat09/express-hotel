import { format } from "date-fns";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import "./Booking.css";
const Booking = (props) => {
  const { user, date } = useContext(AuthContext);
  const location = useLocation();

  // console.log(date);
  const data = location?.state?.data;
  useTitle("Booking");
  return (
    <div className="w-lg-50 text-lg-left  mx-lg-auto d-lg-grid col-lg-4 ">
      <h1>Your Booking Details</h1>
      <div className="border border-dark  w-lg-50 ps-lg-3 mb-lg-3 pt-lg-2 mobile-device">
        <p className="fw-bold">
          Name: <span className="fw-normal">{user?.displayName}</span>
        </p>
        <p className="fw-bold">
          Room type: <span className="fw-normal">{data?.room_type}</span>
        </p>
        <p className="fw-bold">
          Bed type: <span className="fw-normal">{data?.bed_type}</span>
        </p>
        <p className="fw-bold">
          Room No: <span className="fw-normal">{data?.room_number}</span>
        </p>

        <p className="fw-bold">
          Guest Capable:{" "}
          <span className="fw-normal">{data?.capacity} person</span>
        </p>
        <p className="fw-bold">
          Price: <span className="fw-normal">${data?.price}</span>
        </p>
        <p className="fw-bold">
          Booking Date:
          <span className="fw-normal ms-2">
            {`${format(
              date[0]?.startDate,

              "MM/dd/yyyy"
            )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Booking;
