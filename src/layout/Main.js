import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  // console.log(date);
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
