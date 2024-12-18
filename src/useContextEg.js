import React, { createContext, useContext, useState } from "react";

const useContextEg = () => {
  const [user, setUser] = useState("Kishor");
  const userContext = createContext();
  return (
    <div>
      <userContext.Provider value={user}>
        <Compoenents />
      </userContext.Provider>
    </div>
  );
};
function Compoenents() {
  const user = useContext(userContext);
  return (
    <>
      <h2>{user}</h2>
    </>
  );
}
export default useContextEg;
