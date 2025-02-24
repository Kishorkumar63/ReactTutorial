import React, { useEffect, useState } from "react";
import "./Progress.css";
export const Pogress = () => {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
        }
        return Math.min(prev + 5, 100);
      });
    }, 400);
  }, []);
  return (
    <div className="progress-container">
      <div
        className="progress"
        style={{ transform: `translateX(${bar-100}%)` }}
      ></div>
    </div>
  );
};
