export const fetchTimes = async (year, month) => {
  const baseURL = `http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=30.04442&longitude=31.235712&method=5`;
  const response = await fetch(baseURL, {});
  const data = await response.json();
  return data?.data;
};
