import React, { useEffect, useState } from "react";
import "./Rooms.css";
import RoomsDetail from "../RoomsDetail/RoomsDetail";
import useTitle from "../../hooks/useTitle";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useTitle("Rooms");
  useEffect(() => {
    fetch("https://express-server-kjr4kb1az-talat09.vercel.app/rooms")
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
