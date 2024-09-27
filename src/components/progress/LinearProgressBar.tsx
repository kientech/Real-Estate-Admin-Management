import React, { useEffect, useState } from "react";

interface LinearProgressProps {
  title: string;
  width?: number;
  height?: number;
  targetProgress?: number;
}

const LinearProgress: React.FC<LinearProgressProps> = ({
  title,
  width = 400,
  height = 10,
  targetProgress = 80,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [targetProgress]);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex w-full items-center justify-between mb-2">
          <h1>{title}</h1>
          <h2>{targetProgress}%</h2>
        </div>
        <div
          className="bg-gray-200 rounded"
          style={{ width: width, height: height }}
        >
          <div
            className="bg-green-600 h-full rounded"
            style={{ width: `${progress}%`, transition: "width 0.15s" }}
          />
        </div>
      </div>
    </>
  );
};

export default LinearProgress;
