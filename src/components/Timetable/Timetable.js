import React from "react";
import "./Timetable.scss";

const Timetable = () => {
  return (
    <div className="timetable-container">
      <h1>CLASS TIMETABLE</h1>
      <img
        src={`${process.env.PUBLIC_URL}/classTimetable.png`}
        alt="timetable"
      />
    </div>
  );
};

export default Timetable;
