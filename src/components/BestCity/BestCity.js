import React from "react";
import best from "../../images/best.jpg";
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaCcStripe,
} from "react-icons/fa";
import "./BestCity.css";
const BestCity = () => {
  return (
    <div className="bestCity position-relative">
      <img src={best} alt="" />
      <div className="best-text">
        <p className="fw-bold">BUS STATION NEAR</p>
        <p className="fw-bold fs-1">Best City Position</p>
        <p>
          Suspendisse commodo bibendum purus at hendrerit. Vivamus aliquam
          bibendum fringilla. Praesent cursus felis nunc, quis vulputate sapien
          posuere vitae. Aliquam erat volutpat. Cras egestas porta massa eget
          pulvinar. Cras non enim et dui pharetra hendrerit mattis.
        </p>
        <p className="text-dark fw-bold">PAYMENT OPTIONS :</p>
        <div className="d-flex">
          <FaCcVisa className="me-2"></FaCcVisa>
          <FaCcPaypal className="me-2"></FaCcPaypal>
          <FaCcMastercard className="me-2"></FaCcMastercard>
          <FaCcStripe></FaCcStripe>
        </div>
      </div>
    </div>
  );
};

export default BestCity;
