import React, { useEffect, useState } from "react";

const Useref = () => {
  let [num, setNum] = useState(0);

  const handleClick = () => {
    setNum((n) => n + 1);
  };

  useEffect(() => {
    console.log("hai");
  },[num]);
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        click Me useStateBtn <span>{num}</span>
      </button>
    </div>
  );
};

export default Useref;
