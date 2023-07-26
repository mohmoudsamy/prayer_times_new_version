const useCurrentDate = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const timestamp = date.getTime();
  let weekDay = date.getDay();
  let datePieces = date.toLocaleDateString().split("/");
  let day = +datePieces[1];
  let month = +datePieces[0];
  let year = +datePieces[2];
  return { day, month, year, weekDay, currentTime, timestamp };
};

export default useCurrentDate;
