import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  //   useEffect(()=>{
  // //1.The Code that we want to run
  // //3.optinoal  return function

  //   },[]) //2.Dependency Array

  //no Dependency
  //Mount Means =>  load
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
//   console.log("I am state COunt ");
//   return ()=>console.log("Re-render CleanUp");
  
//  },[count])
useEffect(()=>{
const random=Math.floor(Math.random()*1000)
const timer=setInterval(()=>{
  console.log(`${random} Re-render`);
  
},1000)
return ()=>clearInterval(timer);

})
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
