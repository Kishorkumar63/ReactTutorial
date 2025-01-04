import React, { useState } from "react";
import "./Color.css";
const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState(null);
  const handleColorPick = (e) => {
    const { value } = e.target;
    // console.log(value);
    setActiveColor(value);
  };
  getColor(activeColor);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(activeColor);
      console.log("copied");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="color-box">
      <input type="color" value={activeColor} onChange={handleColorPick} />
      <div>{activeColor}</div>
      <button className="btn" onClick={handleClick}>
        copy
      </button>
    </div>
  );
};

export default Callback;
