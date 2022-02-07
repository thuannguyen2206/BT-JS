import React from "react";

function ShowTimer({ center, timer }) {
  return (
    <div className={center ? center : ""}>
      <span>{timer.h >= 10 ? timer.h : "0" + timer.h}</span> :{" "}
      <span>{timer.m >= 10 ? timer.m : "0" + timer.m}</span> :{" "}
      <span>{timer.s >= 10 ? timer.s : "0" + timer.s}</span>
    </div>
  );
}

export default ShowTimer;
