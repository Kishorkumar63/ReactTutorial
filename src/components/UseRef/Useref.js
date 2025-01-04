import React, { useEffect, useRef, useState } from "react";

export const Userefer = () => {
  const countRef = useRef(0);
  const spanRef = useRef(null);
  console.log(countRef);
  const handleClick = () => {
    countRef.current++;
    // console.log(countRef.current++);
    // console.log(spanRef.current);
    spanRef.current.innerText = countRef.current;
  };
  useEffect(() => {
    console.log("useref");
  });

  return (
    <div>
      <button onClick={handleClick}>
        <span ref={spanRef}>Count {}</span>
      </button>
      t
    </div>
  );
};
