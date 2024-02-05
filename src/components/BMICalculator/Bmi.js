import React from "react";
import "./Bmi.css";
import { useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmistatus] = useState("");
  const [error, setError] = useState("");
  const handelChange = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeigth = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeigth) {
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmistatus("UnderWeight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmistatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmistatus("OverWeight");
      } else {
        setBmistatus("Obese");
      }
      setError("")
    } else {
      setBmi(null);
      setBmistatus("");
      setError("Please Enter valid numeric Values for height and weigth ");
    }
  };
  const resetFun = () => {
    setHeight("");
    setWeight("");
    setBmistatus("");
    setBmi(null);
  };
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CalCulator</h1>
          {error && <p className="error">{error}</p>}
          <div className="input-container">
            <label htmlFor="height">Height(cm):</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">weight(Kg):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={handelChange} className="btn bmi">
            Calculate BMI
          </button>
          <button onClick={resetFun} className="btn-reset btn">
            Reset
          </button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is {bmi}</p>
              <p>Status:{bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bmi;
