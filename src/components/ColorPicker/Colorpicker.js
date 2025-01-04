import React, { useState } from "react";
import Callback from "./Callback";
import "./Color.css";
export const Colorpicker = () => {
  const [color, setColor] = useState(null);
  const getColor = (clr) => {
    setColor(clr);
  };
  return (
    <>
      <div className="app">
        <div className="box" style={{ backgroundColor: `${color}` }}></div>
      </div>
      <Callback getColor={getColor} />
    </>
  );
};
