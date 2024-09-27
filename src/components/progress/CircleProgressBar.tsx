import React, { useEffect, useState } from "react";

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  targetProgress?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 80,
  strokeWidth = 20,
  targetProgress = 80,
}) => {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

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

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="text-gray-100"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="#38a169" // Màu xanh
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
