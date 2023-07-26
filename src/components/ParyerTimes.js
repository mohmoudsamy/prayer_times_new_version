import React, { useState, useEffect } from "react";
import useCurrentDate from "../hooks/useDate";

const ParyerTimes = ({ data }) => {
  const { year, month, day, timestamp } = useCurrentDate();
  const [allTimes, setAllTimes] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    setAllTimes(Object.entries(data[day - 1]?.timings));
  }, [year, month, day, data]);

  // Define paryes in Arabic and English
  const prayes = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"];
  const prayersNameInAPI = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  // Extract the five times as array from the object
  const fiveTimes = allTimes.filter((time) =>
    prayersNameInAPI.some((item) => item === time[0])
  );

  // Determine next time
  let today = data[day - 1]?.date?.gregorian?.date.split("-");
  useEffect(() => {
    if (fiveTimes.length > 0) {
      const timesCompared = fiveTimes.map((time) =>
        new Date(
          `${today[1]}/${today[0]}/${today[2]} ${time[1].slice(0, 5).trim()}:00`
        ).getTime()
      );
      setTimestamps(timesCompared);
    }
  }, [allTimes]);
  console.log(timestamps);

  // Reconvert the array to object
  const fiveTimesObj = Object.fromEntries(fiveTimes);

  // Convert the 24 hours to 12 hours
  const paryerTimes = Object.values(fiveTimesObj).map((item) => {
    const sliceHour = +item.slice(0, 2);
    const h = sliceHour % 12;
    return (
      (sliceHour >= 12 ? "PM " : "AM ") +
      (h < 10 ? "0" : "") +
      h +
      item.slice(2, 5)
    );
  });

  // Highlight the upcoming pray time

  return (
    <div>
      {prayes.map((pray, i) => {
        return (
          <p
            className={`flex_between mb-6 px-4 py-2 rounded-md text-slate-400 ${
              i === 4 && "mb-0"
            } ${
              timestamp >= timestamps[i - 1] && timestamp <= timestamps[i]
                ? "bg-slate-800 !text-secondary"
                : ""
            }`}
            key={pray}
          >
            <span>{pray}</span>
            <span>{paryerTimes[i]}</span>
          </p>
        );
      })}
    </div>
  );
};

export default ParyerTimes;
