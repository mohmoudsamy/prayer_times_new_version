import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center bg-black/80 w-full h-full">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
