import { useEffect, useState } from "react";
import { fetchTimes } from "../api";
import useCurrentDate from "../hooks/useDate";
import Date from "./Date";
import Time from "./Time";
import ParyerTimes from "./ParyerTimes";
import Loading from "./Loading";

// Get Current Date

const App = () => {
  const { year, month } = useCurrentDate();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchTimes(year, month)
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [year, month]);

  return (
    <div className="text-secondary bg-bg w-96 m-auto min-h-[600px] relative text-2xl">
      {data.length > 0 ? (
        <div className="py-4 px-0">
          <div className="text-center text-3xl font-bold border-b-[1px] border-primary pb-4">
            <h1>مواقيت الصلاة</h1>
          </div>

          <div className="section_padding flex_between text-font pt-6 text-xl border-b-[1px] border-primary">
            <Time />
          </div>

          <div className="pt-4">
            <div className="border-b-[1px] border-primary section_padding">
              <Date data={data} />
            </div>

            <div className="section_padding pt-4">
              <ParyerTimes data={data} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
