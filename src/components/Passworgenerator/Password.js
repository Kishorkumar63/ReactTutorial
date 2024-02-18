import React, { Fragment, useState } from "react";
import "./Password.css";
const Password = () => {
  const [length, setLength] = useState(8);
  const [includeUpper, setincludeUpper] = useState(true);
  const [includeLower, setinclUdeLower] = useState(true);
  const [includeSymbol, setinclUdeSymbol] = useState(true);
  const [includeNumber, setincludeNumber] = useState(true);
  const [password, setPassword] = useState("");
  const generatePass = () => {
    let charSet = "";
    if (includeUpper) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charSet += "1234578910";
    if (includeSymbol) charSet += "!@#$%^&*";
    console.log(charSet);
    let generatePass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatePass += charSet[randomIndex];
    }
    setPassword(generatePass);
  };
  const copyTxt = () => {
    navigator.clipboard.writeText(password);
    alert("Password Will Copy");
  };
  return (
    <Fragment>
      <div className="password-generator">
        <h2> Strong Password Generator</h2>
        <div className="input-group">
          <label htmlFor="num">Password Length:</label>
          <input
            type="number"
            id="num"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="check-group">
          <input
            type="checkbox"
            name=""
            id="upper"
            checked={includeUpper}
            onChange={(e) => setincludeUpper(e.target.checked)}
          />
          <label htmlFor="Upper">Include Upper</label>
        </div>
        <div className="check-group">
          <input
            type="checkbox"
            name=""
            id="lower"
            checked={includeLower}
            onChange={(e) => setinclUdeLower(e.target.checked)}
          />
          <label htmlFor="Upper">Include Lower</label>
        </div>
        <div className="check-group">
          <input
            type="checkbox"
            name=""
            id="number"
            checked={includeNumber}
            onChange={(e) => setincludeNumber(e.target.checked)}
          />
          <label htmlFor="number">Include Number</label>
        </div>
        <div className="check-group">
          <input
            type="checkbox"
            name=""
            id="symbol"
            checked={includeSymbol}
            onChange={(e) => setinclUdeSymbol(e.target.checked)}
          />
          <label htmlFor="number">Include Symbol</label>
        </div>
        <button className="generate-btn" onClick={generatePass}>
          Generate Password
        </button>
        <div className="generate-password">
          <input type="text" readOnly value={password} />
          <button className="btn-copy" onClick={copyTxt}>
            Copy
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Password;
