import "./FirstSection.css";
import bg from "../../../src//images/bg1.jpg";
import { FaCalendar } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const FirstSection = () => {
  const [openDate, setOpenDate] = useState(false);
  const { date, setDate } = useContext(AuthContext);
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  console.log(date);

  return (
    <div className="first-section position-relative">
      <img src={bg} alt="" />
      <div className=" position-absolute top-50 start-50 translate-middle information-text">
        <p className="small-title">LUXURY HOTEL & BEST RESORT</p>
        <p className="title-tag">
          ENJOY A LUXURY <br /> <span>EXPERIENCE</span>{" "}
        </p>
        <button className="room-suits-btn">ROOMS SUITES</button>

        <div className="bg-light  py-2 mt-5 w-75 align-items-center mx-auto rounded calender">
          <div onClick={() => setOpenDate(!openDate)}>
            <p className=" mx-auto fs-3 text fw-bold ">CHECK-IN TO CHECK-OUT</p>

            <span className="lh-lg gx-3 fs-3 text">
              <FaCalendar className="me-2"></FaCalendar>
              {`${format(
                date[0]?.startDate,

                "MM/dd/yyyy"
              )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}
            </span>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              className="date"
              ranges={date}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
