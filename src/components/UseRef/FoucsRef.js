import React, { useRef } from "react";

const FoucsRef = () => {
  const inpuRef = useRef(null);
  const handleClick = () => {
    inpuRef.current.focus();
    inpuRef.current.style.backgroundColor = "gray";
  };
  //When click button it will foucs on your input Box
  return (
    <div>
      <input type="text" ref={inpuRef} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default FoucsRef;
