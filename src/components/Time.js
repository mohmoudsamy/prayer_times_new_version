import React, { useState } from "react";
import useCurrentDate from "../hooks/useDate";

const Time = () => {
  const { weekDay } = useCurrentDate();
  const [time, setTime] = useState("AM 00:00:00");

  const arabicWeek = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  setInterval(() => {
    let date = new Date();
    setTime(date.toLocaleTimeString());
  }, 1000);

  return (
    <>
      <h2>{arabicWeek[weekDay]}</h2>
      <h2>{time}</h2>
    </>
  );
};

export default Time;
