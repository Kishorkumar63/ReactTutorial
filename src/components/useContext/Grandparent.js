import React, { createContext } from "react";
import Parent from "./Parent";
import Child from "./Child";
export const GrandContext = createContext();
const Grandparent = () => {
  const data = "Hello From GrandParent";
  return (
    <div className="boxx">
      <h3>GrandParent Component</h3>
      <GrandContext.Provider value={data}>
        <Parent />
        {/* <Child /> */}
      </GrandContext.Provider>
    </div>
  );
};

export default Grandparent;
