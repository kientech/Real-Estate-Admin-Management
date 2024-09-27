import CircularProgress from "@/components/progress/CircleProgressBar";
import React from "react";

const ProgressComponent = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex items-center justify-between">
      <div>
        <h1 className="text-[#808191] text-md mb-2">Properties for Sale</h1>
        <h1 className="font-bold text-xl">684</h1>
      </div>
      <CircularProgress targetProgress={20} />
    </div>
  );
};

export default ProgressComponent;
