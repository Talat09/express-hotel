import React from "react";
import Card from "react-bootstrap/Card";
import { FaUserAlt } from "react-icons/fa";
import "./RoomsDetail.css";
const RoomsDetail = ({ room }) => {
  const { img, room_type, capacity, price } = room;
  return (
    <Card className=" bg-dark room">
      <Card.Img
        className="position-relative opacity-50 img"
        variant="top"
        src={img}
      />

      <p className="text-white ms-3  mt-3 position-absolute top-0 end-0 ps-5 py-3 pe-3 fs-6 text bg-dark ">
        Price: ${price}
      </p>
      <button className="text-light ms-3  mt-3 position-absolute bottom-0 end-0 px-5 py-3  fs-4 text bg-dark   border border-dark-subtle">
        BOOKING
      </button>

      <div className=" position-absolute bottom-0 start-0 ps-2 fs-4 text">
        <p className="text-white ms-3 fw-bold mt-3">{room_type} Room</p>
        <div className="d-flex align-items-center">
          <FaUserAlt className="text-white"></FaUserAlt>
          <p className="mt-3 ms-2 text-white">{capacity} GUESTS</p>
        </div>
      </div>
    </Card>
  );
};

export default RoomsDetail;
