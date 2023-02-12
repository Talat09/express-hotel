import React, { useEffect, useState } from "react";
import "./Rooms.css";
import RoomsDetail from "../RoomsDetail/RoomsDetail";
import useTitle from "../../hooks/useTitle";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useTitle("Rooms");
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
      });
  }, []);
  // console.log(rooms);
  return (
    <div className="rooms">
      {rooms.map((room) => (
        <RoomsDetail key={room._id} room={room}></RoomsDetail>
      ))}
    </div>
  );
};

export default Rooms;
