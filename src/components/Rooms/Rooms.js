import React, { useEffect, useState } from "react";
import "./Rooms.css";

import RoomsDetail from "../RoomsDetail/RoomsDetail";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data.rooms));
  }, []);
  console.log(rooms);
  return (
    <div className="rooms">
      {rooms.map((room) => (
        <RoomsDetail key={room.id} room={room}></RoomsDetail>
      ))}
    </div>
  );
};

export default Rooms;
