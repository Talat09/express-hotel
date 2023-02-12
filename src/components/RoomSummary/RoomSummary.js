import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./RoomSummary.css";
import { Link, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const RoomSummary = () => {
  const params = useParams();

  useTitle("Room");
  const [room, setRoom] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/room/${params.id}`;
    console.log(url);
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRoom(data));
  }, [params.id]);

  return (
    <div className="w-75 text-left  ms-auto ">
      <h1> ROOM Details</h1>
      <hr className="w-50" />
      <div className="border border-dark w-50  mb-3 pb-2 w-sm-fluid">
        <img
          className="w-100 border border-dark rounded"
          src={room.img}
          alt=""
        />
        <div className="ps-3">
          <p className="fs-3 text">Room Type: {room.room_type}</p>
          <p className="fs-4 text">Capacity: {room.capacity}</p>
          <p className="fs-5 text">Price: ${room.price}</p>

          <Link to="/booking" state={{ data: room }}>
            <Button variant="dark" data-bs-dismiss="toast">
              Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomSummary;
