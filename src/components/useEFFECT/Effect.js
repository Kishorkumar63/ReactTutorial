import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  //   useEffect(()=>{
  // //1.The Code that we want to run
  // //3.optinoal  return function

  //   },[]) //2.Dependency Array

  //no Dependency
  //Mount Means => Call or load
  //   useEffect(() => {
  //     console.log("I am Non Dependency useEffect");
  //   });

  //Empty Dependency Array
  // useEffect(() => {
  //     console.log("I am Empty Dependency useEffect");
  //   },[]);
  // State Dependency Array

  // useEffect(() => {
  //     console.log("I am Empty Dependency useEffect");
  //   },[times]);

  // On Mount Cleanup Code
  // useEffect(()=>{
  // console.log("Mounted");
  // return ()=>console.log("Un-Mounted");
  // },[])

  //Rerender CleanUp Code
  //  useEffect(()=>{
  // console.log("Re-render");
  // return ()=>console.log("Re-render cleanUp");
  // })

  // State  Counter Clean Up Code
//  useEffect(()=>{
//   console.log("haii");
//  },[count])
  return (
    <div>
      <h3>Count : {count}</h3>
      <h3>Count : {times}</h3>
      <button onClick={() => setCount((value) => value + 1)}>+</button>
      <button onClick={() => setCount((value) => value - 1)}>-</button>
      <button onClick={() => setTimes((value) => value - 1)}>T</button>
    </div>
  );
};

export default Effect;
