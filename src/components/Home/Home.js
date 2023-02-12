import React from "react";
import useTitle from "../../hooks/useTitle";

import FirstSection from "../FirstSection/FirstSection";
import Rooms from "../Rooms/Rooms";

import "./Home.css";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <FirstSection></FirstSection>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
