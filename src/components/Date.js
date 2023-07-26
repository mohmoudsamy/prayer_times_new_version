import useCurrentDate from "../hooks/useDate";

const Date = ({ data }) => {
  const { day } = useCurrentDate();

  const timezone = data[day - 1]?.meta?.timezone;

  const hijriDate = () => {
    return `${data[day - 1]?.date?.hijri?.day} - ${
      data[day - 1]?.date?.hijri?.month?.ar
    } - ${data[day - 1]?.date?.hijri?.year}`;
  };

  const gregorianDate = data[day - 1]?.date?.gregorian?.date;

  return (
    <>
      <p className="flex_between">
        <span>المنطقة الزمنية: </span>
        <span>{timezone}</span>
      </p>
      <p className="flex_between my-4">
        <span>التاريخ الهجري:</span>
        <span>
          <span>{hijriDate()}</span>
        </span>
      </p>
      <p className="flex_between">
        <span>التاريخ الميلادي:</span>
        <span>{gregorianDate}</span>
      </p>
    </>
  );
};

export default Date;
